 const path = require('path');
 // 清空輸出目錄的外掛
 const {CleanWebpackPlugin} = require('clean-webpack-plugin')

 module.exports = {
    //  進入點，也可設定多個進入點
     entry: './src/index.js',
     // 打包後的輸出
     output: {
        // 編譯後檔案名
        filename: 'index.bundle.js',
        // 編譯後位置，現在目錄底下的dist
        path: path.resolve(__dirname, 'dist')
     },
    // 外掛
    plugins: [
        new CleanWebpackPlugin()
    ],
    // module
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    }
 };