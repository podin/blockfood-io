import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default (config, {defaultLoaders, stage}) => {
    config.module.rules = [
        {
            oneOf: [
                {
                    test: /\.s(a|c)ss$/,
                    use: stage === 'dev'
                        ? [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]
                        : ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    minimize: true,
                                    sourceMap: false
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: (loader) => [require('autoprefixer')()]
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {includePaths: ['src/']}
                            }
                        ]
                    })
                },
                defaultLoaders.cssLoader,
                defaultLoaders.jsLoader,
                defaultLoaders.fileLoader
            ]
        }
    ]
    return config
}