const path = require('path');

module.exports = {
    entry: './lib/bloc.ts',
    target: 'node',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'kiss-js-bloc-react.js',
        library: 'KissJsBlocReact',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
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
    mode: 'development'
}