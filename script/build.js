const Mustache = require('mustache')
const fs = require('fs-extra-promise')
const minify = require('htmlmin')

const template = fs.readFileSync(__dirname + '/../blockfood.io/_template.html', 'utf-8')

const blockfoodIoFolderContent = fs.readdirSync(__dirname + '/../blockfood.io')

const getHtmlFiles = () => blockfoodIoFolderContent
    .filter(f => /\.html$/.test(f))
    .filter(f => f !== '_template.html')
    .map(f => ({
        name: f,
        path: __dirname + '/../blockfood.io/' + f,
        content: fs.readFileSync(__dirname + '/../blockfood.io/' + f, 'utf-8').toString()
    }))
    .map(f => {
        const htmlFile = Object.assign({}, f)
        console.log(`\tRender ${f.name}...`)
        htmlFile.rendered = minify(Mustache.render(template, { content: f.content }))
        return htmlFile
    })

const getOtherFiles = () => blockfoodIoFolderContent
    .filter(f => !/\.html$/.test(f))
    .map(f => ({
        name: f,
        path: __dirname + '/../blockfood.io/' + f
    }))

const build = async () => {

    console.log(`Start build`)
    const htmlFiles = getHtmlFiles()

    await fs.removeAsync(__dirname + '/../build/')
    await fs.ensureDirAsync(__dirname + '/../build/')

    await Promise.all(htmlFiles.map(
        htmlFile => fs.writeFileAsync(__dirname + '/../build/' + htmlFile.name, htmlFile.rendered, 'utf-8')
    ))

    const otherFiles = getOtherFiles()

    await Promise.all(otherFiles.map(
        otherFile => {
            console.log(`\tCopy ${otherFile.name}...`)
            return fs.copyAsync(otherFile.path, __dirname + '/../build/' + otherFile.name)
        }
    ))

    console.log(`Build success`)
}

build()
    .catch(e => console.log(e))