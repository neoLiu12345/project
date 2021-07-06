import 'bootstrap'
import './home.scss'
import moment from 'moment'

import 'moment/locale/zh-cn'
let r = moment().endOf('day').fromNow()
console.log(r)

console.log('DEV: ', DEV)
if(DEV === 'dev') {
    console.log(DEV)
}
// import $ from 'jquery'
// console.log($)
// let win = window
// win.$ = $
// console.log(win.$)
// console.log(window.$)

// var a = require('./a')
// // require('@babel/polyfill') //非必须 装饰器相关
// console.log(a.a)

// require('./background.css')
// // require('./less.less')
// require('./scss.scss')

console.log('home sad asda1231f')
// let fn = () => {
//     console.log('测试 Es 6')
// }
// fn()

// // @log
// class A{
//     a = 1
// }
// let a1 = new A()
// console.log(a1, 1)

// // function log(target) {
// //     console.log(target, 2)
// // }

// class B{

// }

// 'aaaaa'.includes('safd')
// let b1 = new B()
// console.log(b1)
import logo from './logo.png'
let image = new Image()
image.src = logo
let bodyDom = document.getElementsByTagName('body')[0]
bodyDom.appendChild(image)
