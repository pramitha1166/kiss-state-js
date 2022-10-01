const path = require('path')
const babel = require('babel-loader')

module.exports = {
    entry: './lib/bloc.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'kiss-state-js.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    mode: 'development',
}