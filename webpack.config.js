const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'client.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                include: [path.resolve(__dirname, 'client')],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'views/pages/index.ejs'
        })
    ]
};
