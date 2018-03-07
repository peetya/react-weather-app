const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    output: {
        filename: '[name].js',
    },

    devServer: {
        overlay: true
    },

    module: {
        rules: [
            {
                test: /\.jsx$|\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
});
