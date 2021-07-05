// node 内置模块，不需要安装
const path = require('path')
// 根据模版，生成html
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 抽离css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css文件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// 压缩Js文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// const webpack = require('webpack')

module.exports = function () {
    return {
        /** 入口文件 */
        entry: {
            index: './src/index.js'
        },
        /** 出口文件 */
        output: {
            filename: '[name].bundle.[hash:8].js',// 打包后的文件名name: 入口名称是什么默认就是什么名称    hash:8自动生产8位数的数字字母，保持每次打包文件名不一样（解决缓存问题）
            path: path.resolve('dist')// 路径必须是一个绝对路径，（__dirname）以当前目录产生一个绝对路径
        },
        /** 插件  */
        plugins: [
            /** 生产打包后的html文件 */
            new HtmlWebpackPlugin({
                // 入口文件
                template: './src/index.html',
                // 出口文件名
                filename: 'index.html',
                // 是否增加 hash 值
                hash: false,
                /*** 压缩html 配置  */
                minify: {
                    // 删除双引号
                    removeAttributeQuotes: true,
                    // 是否折叠空行
                    collapseWhitespace: false
                }
            }),
            /** 抽离样式 */
            new MiniCssExtractPlugin({
                filename: 'index.css'
            })
        ],
        /** 模块 */
        module: {
            rules: [
                {
                    test: /\.js/,
                    use: {
                        loader: 'eslint-loader',
                        options: {
                            enforce: 'pre', // previous 强制在前面执行
                        }
                    }
                },
                /** js校验 */
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        /** 用babel-loader 需要把es6转es5 */
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ],
                            plugins: [
                                // "@babel/plugin-transform-runtime", //有问题后期查
                                ['@babel/plugin-proposal-decorators', {"legacy": true}],
                                ['@babel/plugin-proposal-class-properties', {"loose": true}]
                            ]
                            // plugins: ["transform-decorators-legacy", "transform-class-properties"]
                        }
                    }
                },
                /** loader 顺序，默认从右向左，从下向上执行
                 * style-loader 他是把css 插入到head的标签内
                 * css-loader 处理css文件，解析@import语法 比如：css内引入其他的css文件 
                 * postcss-loader 自动补全前缀， 需要配置文件： postcss-config.js
                 * sass-loader 将scss解析成css
                 * 
                */
                {
                    test: /\.(css|scss|less)$/,
                    exclude: /node_modules/,
                    use: [
                        /** 可以是对象的形式 */
                        // {
                        //     loader: 'style-loader',
                        //     options: {
                        //         // 配置style 插入到html的位置
                        //         insert: 'top'
                        //     } 
                        // },
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: 'file-loader'
                }
            ]
        },
        /** 优化项 */
        optimization: {
            minimize: true,
            minimizer: [
                /** 压缩css */
                new CssMinimizerPlugin(),
                /** 压缩js */
                new UglifyJsPlugin()
            ]
        },
        /** 打包时过滤的插件 */
        externals: {
            "jquery": "jquery"
        }
    }
}