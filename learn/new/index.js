// new 原理及模拟实现
// 1. 创建一个空对象
// 2. 实例的__props__指向构造函数的原型 prototype
// 3. 绑定this
// 4. 返回新对象

function Car (color) {
  this.color = color
}

Car.prototype.start = function () {
  console.log(this.color + ' Car start')
}

var car = new Car('green')
console.log(car.color)

car.start()

function Create () {
  var obj = {}
  var Con = [].shift.apply(arguments)

  obj.__proto__ = Con.prototype
  var ret = Con.apply(obj, arguments)

  // 优先返回构造函数返回对象
  return ret instanceof Object ? ret : obj
}

var newCar = Create(Car, 'blue')
console.log(newCar.color)
