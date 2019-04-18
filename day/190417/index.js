/**
 *
  第 56 题：要求设计 LazyMan 类，实现以下功能。
  LazyMan('Tony');
  // Hi I am Tony

  LazyMan('Tony').sleep(10).eat('lunch');
  // Hi I am Tony
  // 等待了10秒...
  // I am eating lunch

  LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
  // Hi I am Tony
  // I am eating lunch
  // 等待了10秒...
  // I am eating diner

  LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
  // Hi I am Tony
  // 等待了5秒...
  // I am eating lunch
  // I am eating dinner
  // 等待了10秒...
  // I am eating junk food
 */

class LazyManClass {
  constructor (name) {
    let that = this
    this.name = name
    this.taskQueue = []
    console.log('Hi I am Tony')
    setTimeout(() => {
      // console.log('task 0')
      that.next()
    }, 0)
  }

  eat (name) {
    let that = this
    const fn = (function (n) {
      return function (params) {
        console.log(`I am eating ${n}`)
        that.next()
      }
    })(name)
    this.taskQueue.push(fn)
    // console.log('task eat')

    return this
  }

  sleepFirst (time) {
    let that = this

    let fn = (function (t) {
      return function () {
        setTimeout(() => {
          console.log('等待了' + t + '秒')
          that.next()
        }, t * 1000)
      }
    })(time)

    this.taskQueue.unshift(fn)

    return this
  }

  sleep (delay) {
    let that = this
    const fn = (function (t) {
      return function () {
        setTimeout(() => {
          console.log('等待了' + t + '秒')
          that.next()
        }, t * 1000)
      }
    })(delay)
    this.taskQueue.push(fn)
    // console.log('task sleep')
    return this
  }

  next () {
    const fn = this.taskQueue.shift()
    return fn && fn()
  }
}

function LazyMan (name) {
  return new LazyManClass(name)
}

// let man = new LazyMan('James')
// man.sleep(1).eat('lunch')
// man.eat('lunch').sleep(2).eat('dinner')
LazyMan('James').eat('lunch').eat('dinner').sleepFirst(1).sleep(2).eat('junk food')
