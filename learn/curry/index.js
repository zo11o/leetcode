// 函数科里化
// let curry = (fn) => {
//   if (typeof fn !== 'function') {
//     throw Error('No function provided!')
//   }
//   return function curriedFn (...args) {
//     if (args.length < fn.length) { // 检查通过...args传入的参数长度是否小于函数参数列表的长度。如果是，进入if，否则调用整个函数。
//       return function () {
//         return curriedFn.apply(null, args.concat([].slice.call(arguments)))// 使用concat函数连接一次传入一个的参数，并递归调用curriedFn。
//         // 除此之外，由于args是类数组，并没有concat方法，
//         // 所以，需要应用数组的slice方法。
//       }
//     }
//     return fn.apply(null, args)// 直接调用整个函数
//   }
// }
// const multiply = (x, y, z) => x * y * z
// console.log(curry(multiply)(3)(2)(1))// 6

// 科里化封装一些 on 监听方法
// var on = function (isSupport, element, event, handler) {
//   isSupport = isSupport || document.addEventListener;
//   if(isSupport){
//     return element.addEventListener(evet,handler,false)
//   }eles {
//     return element.attachEvent('on'+evet,handler)
//   }
// }

var add = function (x, y) {
  return x + y
}

/**
 *  常规科里化
 */
// var currying = function (fn) {
//   // args 获取第一个方法内的全部参数
//   var args = Array.prototype.slice.call(arguments, 1)
//   return function () {
//     var newArgs = args.concat(Array.prototype.slice.call(arguments))
//     return fn.apply(this, newArgs)
//   }
// }

// var curryingAdd = currying(add, 100)
// console.log(curryingAdd(1))

/**
 * 支持多参数
 * @param {*} fn
 * @param {*} args
 */
// function progressCurrying (fn, args) {
//   var _this = this
//   // 函数参数长度
//   var len = fn.length
//   args = args || []

//   return function () {
//     var _args = Array.prototype.slice.call(arguments)
//     Array.prototype.push.apply(args, _args)

//     // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
//     if (args.length < len) {
//       return progressCurrying.call(_this, fn, _args)
//     }

//     // 参数收集完毕，则执行fn
//     return fn.apply(this, args)
//   }
// }

// var newAdd = progressCurrying(add)
// console.log(newAdd(1)(3))

var currying = function (fn, args) {
  var argsLen = fn.length
  var _this = this
  args = args || []

  return function () {
    var _args = Array.prototype.slice.call(arguments)
    Array.prototype.push.apply(args, _args)

    if (args < argsLen) {
      return currying.call(_this, fn, _args)
    }

    return fn.apply(this, args)
  }
}

var newAdd = currying(add)
console.log(newAdd(1)(3))

// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

/**
 * 經典面試題目
 */
// function add() {
//     // 第一次执行时，定义一个数组专门用来存储所有的参数
//     var _args = Array.prototype.slice.call(arguments);

//     // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//     var _adder = function() {
//         _args.push(...arguments);
//         return _adder;
//     };

//     // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//     _adder.toString = function () {
//         return _args.reduce(function (a, b) {
//             return a + b;
//         });
//     }
//     return _adder;
// }

// add(1)(2)(3)                // 6
// add(1, 2, 3)(4)             // 10
// add(1)(2)(3)(4)(5)          // 15
// add(2, 6)(1)                // 9
