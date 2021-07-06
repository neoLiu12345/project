// 压缩css文件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// 压缩Js文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const configBase = require('./webpack.config.base')
module.exports = function () {
    const webpackBase = configBase()
    // 模式：开发模式：development 、 生产模式：production
    webpackBase.mode = 'production'
    /** 优化项 */
    webpackBase.optimization = {
        minimize: true,
        minimizer: [
            /** 压缩css */
            new CssMinimizerPlugin(),
            /** 压缩js */
            new UglifyJsPlugin()
        ]
    }
    
    return webpackBase
}
