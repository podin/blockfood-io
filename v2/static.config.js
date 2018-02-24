import glob from 'glob-promise'
import path from 'path'

import webpack from './webpack/webpack.config'

import Document from './src/blockfood.io/Document'

export default {
    siteRoot: 'https://blockfood.io/',
    paths: {
        public: 'src/public'
    },
    Document,
    getRoutes: async() => {
        const files = await glob('src/blockfood.io/pages/*.js')

        return files.map(file => {
            const filename = path.basename(file, path.extname(file))

            if (filename === '404') {
                return {is404: true, component: file}
            }
            else {
                const path = filename === 'Home' ? '/' : filename.toLowerCase()
                return {path, component: file}
            }
        })
    },
    webpack
}
