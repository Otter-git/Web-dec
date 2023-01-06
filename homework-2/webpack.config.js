const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { resolve } = require('path');


module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.mp3$/,
                use: 'file-loader',
            },
        ]
    },
    devServer: {
        port: 5555
    }
};