/**
 * 防抖 与 节流
 */

/**
 * 防抖函数 简易版
 */
function throttle (fn, wait = 50) {
  var previous = 0
  return function (...args) {
    var now = +new Date()
    if (now - previous > wait) {
      previous = now
      fn.apply(this, args)
    }
  }
}

var input = document.getElementById('input')

var throttleFn = throttle(function (e) {
  console.log(e.target.value)
}, 300)

input.addEventListener('input', throttleFn)
