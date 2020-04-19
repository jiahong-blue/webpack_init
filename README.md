* npm init
這會建一個完全空無設定的package

* npm i -D webpack webpack-cli
npm install webpack webpack-cli --save-dev簡寫
  * 安裝完後，會把工具和套件存在node_modules
  * package.json存相關資訊
  * package-lock.json詳細的資訊
* 編寫package.json中的script
  * 大部分用來設定alias及相依套件
* 編寫webpack.config.js
  * 一般框架例如vue.js等已經設定好
* npm i -D clean-webpack-plugin
  * 清空目錄的外掛
* 再編寫webpack.config.js
  * 寫在plugins內
* npm i -D babel-loader @babel/core @babel/register @babel/preset-env
* 再編寫webpack.config.js
  * 寫在module內

* 一般會額外裝一些套件
  * Babel 轉ES5
  * Sass 轉css
  * optimization 壓縮程式碼
  * mini-css-extract-plugin 壓縮css

* 參考
  * https://magiclen.org/webpack/