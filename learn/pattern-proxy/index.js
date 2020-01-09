var plus = function () {
  var a = 0;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a + arguments[i]
  }
  console.log(this)
  return a;
}

var createProxy = (function (fn) {
  var cache = [];
  return function () {
    var args = Array.prototype.join.call(arguments, ',');
    if ( args in cache ) {
      return cache[args];
    }
    console.log(this)
    return cache[args] = fn.apply(this, arguments);
  }
})

var obj = {
  proxyPlus: createProxy(plus)
}
console.log(obj.proxyPlus(222,333))

// var proxyPlus = createProxy(plus);

