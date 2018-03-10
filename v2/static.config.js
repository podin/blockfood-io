import glob from 'glob-promise'
import path from 'path'

import DEPLOY_CONFIG from './static.deploy-config'
import webpack from './scripts/webpack/webpack.config'

import Document from './src/blockfood.io/Document'

export default {
    siteRoot: DEPLOY_CONFIG.remoteRoot,
    paths: {
        public: 'src/public'
    },
    Document,
    getRoutes: async() => {
        const files = await glob('src/blockfood.io/pages/*')

        return files.map(file => {
            const filename = path.basename(file)
            const component = path.join(file, filename.replace(/\b\w/g, l => l.toUpperCase()) + '.js')

            if (filename === '404') {
                return {is404: true, component}
            }
            else {
                const route = filename === 'home' ? '/' : filename
                return {path: route, component}
            }
        })
    },
    webpack
}
