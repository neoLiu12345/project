// node 内置模块，不需要安装
const path = require('path')
module.exports = {
    devServer: {
        // 端口号
        port: 3000,
        // 打包进度条
        progress: true,
        // 作为服务的目录
        contentBase: './dist'
    },
    // 模式：开发模式：development 、 生产模式：production
    mode: 'development',
    // 入口文件
    entry: './src/index.js',
    // 出口文件
    output: {
        filename: '[name].bundle.js',// 打包后的文件名
        path: path.resolve('dist')// 路径必须是一个绝对路径，（__dirname）以当前目录产生一个绝对路径
    }
}