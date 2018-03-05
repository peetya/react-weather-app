const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },

    output: {
        path: path.resolve('dist'),
    },

    target: 'web',

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: '/\.html$/',
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            favicon: './src/favicon.ico',
        })
    ],
};
