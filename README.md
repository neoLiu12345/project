## webpack 安装
-   安装本地的webpack
-   webpack webpack-cli -D
-       需要安装webpack-cli@3.3.12版本，webpack-cli早在4.0版本后就移除了yargs（导致无法启动服务）

## webpack 可以进行0配置
-   打包工具 -> 输出后的结果（js模块）
-   打包（支持我们的js模块化）

## 手动配置webpack
-   默认配置文件名 webpack.config.js

##  启动服务
-   yarn add webpack-dev-server -D

## Plugins
数组， 所有的插件都可以放到这里
-   生成html： html-webpack-plugin
-       yarn add html-webpack-plugin -D
-   抽离css插件： mini-css-extract-plugin
-       yarn add mini-css-extract-plugin -D
-   css 压缩： css-minimizer-webpack-plugin（使用了css压缩必须添加js插件）， webpack5之前的版本安装optimize-css-assets-webpack-plugin
-       yarn add css-minimizer-webpack-plugin@2.0.0 -D
-   Js压缩： yarn add uglifyjs-webpack-plugin
-       yarn add uglifyjs-webpack-plugin -D
-   Es6+ 转为Es5格式： babel-loader @babel/core @babel/preset-env
-       yarn add babel-loader @babel/core @babel/preset-env -D
-       yarn add @babel/plugin-proposal-class-properties -D
-       yarn add @babel/plugin-proposal-decorators -D
-       yarn add @babel/plugin-transform-runtime -D  // function * gen () {}
-       yarn add @babel/polyfill  需要引入代码内，把能加-D -> 'aaa': includes('a')

## Loader 模块规则
-   css相关
-       yarn add css-loader style-loader@^2.0.0 -D
-       yarn add less less-loader -D
-       yarn add sass node-sass@4.14.1 sass-loader@7.3.1 -D
-       yarn add postcss-loader@^3.0.0 autoprefixer@8.0.0 -D
-           loader内的use可以些成, 对象use:[{loader: "style-loader"}, "css-loader"]
-           loader内的use可以些成, 数组use:["style-loader", "css-loader"]
-   html loader
-       

## 图片处理 
-   file-loader 默认会在内部生成一张图片，到dist目录下，返回生成后的文件名
-       yarn add file-loader -D
-   url-loader
-       yarn add url-loader -D

## 第三方模块
-   externals设置打包时不打包，第三方插件
-       externals:{"jquery": "jquery"}
-   yarn add jquery
-       expose-loader 暴露全局的loader， 
-       pre 前面执行的loader
-       normal 普通loader
-       
