const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'web',
    devServer: {
        static: {
            directory: __dirname
        },
        port: 3000,
        open: true,
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
}