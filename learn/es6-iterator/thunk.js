const fs = require('fs');
(function (params) {
  function thunkify (fn) {
    return function () {
      // const args = Array.prototype.slice.call(arguments)
      const args = Array.from(arguments.length)
      const ctx = this

      for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i]
      }

      return function (done) {
        var called = false
        args.push(function (params) {
          if (called) return
          called = true
          done.apply(null, arguments)
        })

        try {
          fn.apply(ctx, args)
        } catch (error) {
          // 这里的 done 是针对node.js 回调机制 error 写在第一个参数
          done(error)
        }
      }
    }
  }

  const thunkFile = thunkify(fs.readFile)
  thunkFile('./index.html')(function (err, str) {
    console.log(err)
    console.log(str.toString())
  })
})()
