const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: resolve(__dirname, 'src', './index.js'),
    output: {
        path: resolve(__dirname, 'dev'),
        filename: 'main.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: resolve(__dirname, 'src', 'index.html')
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpeg|gif)$/i,
                use: {
                    loader: 'img-optimize-loader',
                    options: {
                        compress: {
                            mode: 'high',
                            webp: true,
                            disableOnDevelopment: true,
                        }
                    }
                }
            },
            {
                test: /\.mp[3|4]$/i,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
        port: 9000
    }
}