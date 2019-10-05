// var handler = {
//   get: function (target, name) {
//     if (name === 'prototype') {
//       return Object.prototype
//     }
//     return 'Hello, ' + name
//   },

//   apply: function (target, thisBinding, args) {
//     return args[0]
//   },

//   construct: function (target, args) {
//     return { value: args[1] }
//   }
// }

// var fproxy = new Proxy(function (x, y) {
//   return x + y
// }, handler)

// console.log(fproxy(1, 2)) // 1
// console.log(new fproxy(1, 2)) // {value: 2}
// console.log(fproxy.prototype === Object.prototype) // true
// console.log(fproxy.foo === 'Hello, foo') // true

var handler = {
  get: function (target, property) {

  },

  apply: function (target, bindThis, arg) {
    console.log(target, bindThis, arg)
    return target(...arg)
  },

  construct: function (target, arg, receiver) {
    console.log(target, arg, receiver)
    return arg
  }
}

// var receiver = {

// }

var proxy = new Proxy(function (x, y) {
  return x + y
}, handler)

console.log(proxy(1, 3))
console.log(new proxy(2, 4))
