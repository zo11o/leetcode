// 手写jsonp 代码 参考
// 作者：陈建光
// 链接：https://juejin.im/post/5be4f163f265da61483b1b08
// 来源：掘金

//对请求data进行格式化处理
function formateData(data) {
  let arr = []
  for (let key in data) {
    //避免有&,=,?字符，对这些字符进行序列化
    arr.push(encodeURIComponent(key) + "=" + data[key])
  }
  return arr.join("&")
}

function myJsonp() {
  //先对params进行处理，防止为空
  params = params || {}
  params.data = params.data || {}

  var callbackName = params.jsonp
  var head = document.querySelector("head")
  var script = document.createElement("script")

  params.data["callback"] = callbackName

  var data = formateData(params.data)

  script.src = `${params.url}?${data}`

  window[callbackName] = function(jsonData) {
    //请求移除scipt标签
    head.removeChild(script)
    clearTimeout(script.timer)
    window[callbackName] = null
    params.success && params.success(jsonData)
  }

  //请求超时的处理函数
  if (params.time) {
    script.timer = setTimeout(() => {
      //请求超时对window下的[callbackName]函数进行清除，由于有可能下次callbackName发生改变了
      window[callbackName] = null
      //移除script元素，无论请求成不成功
      head.removeChild(script)
      //这里不需要清除定时器了，clearTimeout(script.timer); 因为定时器调用之后就被清除了

      //调用失败回调
      params.error &&
        params.error({
          message: "超时"
        })
    }, time)
  }
  //往head元素插入script元素，这个时候，script就插入文档中了，请求并加载src
  head.appendChild(script)
}

//这个是jsonp的请求demo
myJsonp({
  url: "http://127.0.0.1:3000/jsonp",
  jsonp: "callback",
  data: {
    name: "jgchen",
    stuNo: 2016130201,
    method: "jsonp"
  },
  success(res) {
    console.log("jsonp success:", res)
  },
  error(err) {
    console.log(err)
  }
})
