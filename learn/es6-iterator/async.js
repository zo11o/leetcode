
// import { spawn } from "child_process"

// async function asyncFn () {
//   const resp = await new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve('hhh')
//     }, 1000)
//   })
//   console.log(resp)
//   return resp
// }

// console.log(asyncFn())

// 实现模仿 async 的方法
function asyncFn () {
  return spawn(function * () {
    yield new Promise(function (resolve, reject) {
      console.log(23)
      setTimeout(() => {
        console.log('33')
      }, 1000)
    })

    yield new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log('66')
      }, 2000)
    })
    
  })
}

const spawn = function (genFn) {
  return new Promise(function (resolve, reject) {
    var gen = genFn()

    function step (nextFn) {
      let next
      try {
        next = nextFn()
      } catch (error) {
        return reject(error)
      }
      console.log(next)
      if (next.done) {
        return resolve(next.value)
      }

      Promise.resolve(next.value).then(function (v) {
        step(function () { return gen.value(v) })
      }, function (e) {
        step(function () { return gen.throw(e) })
      })
    }

    step(function () {
      return gen.next(undefined)
    })
  })
}
console.log(asyncFn())
