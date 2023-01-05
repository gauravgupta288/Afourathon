const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',
     
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        // proxy: {
        //     '/skills': {
        //          target: 'http://localhost:3000',
        //          router: () => '54.199.238.206:8080',
        //          logLevel: 'debug' /*optional*/
        //     }
        //  }
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}