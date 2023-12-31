const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    /* css loader */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }
};