const configBase = require('./webpack.config.base')
module.exports = function (env) {
    console.log(123)
    console.log(env)
    console.log(123)
    
    const webpackBase = configBase()
    // 模式：开发模式：development 、 生产模式：production
    webpackBase.mode = 'development'
    webpackBase.devServer = {
            // 端口号
            port: 3000,
            // 打包进度条
            progress: true,
            // 作为服务的目录
            contentBase: './dist',
            // gzip 压缩--- gzip是什么？？？ 
            compress: true
    },
    webpackBase.watch = true,
    webpackBase.watchOptions = {
            poll: 1000,// 每秒  问我 1000 次
            aggregateTimeout: 500,// 防抖 
            ignored: /node_modules/ // 不需要监听的文件
    }
    return webpackBase
}
