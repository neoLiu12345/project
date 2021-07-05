const configBase = require('./webpack.config.base')
module.exports = function () {
    const webpackBase = configBase()
    // 模式：开发模式：development 、 生产模式：production
    webpackBase.mode = 'production'
    return webpackBase
}
