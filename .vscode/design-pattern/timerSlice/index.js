// 分时函数 
var timerSlice = function(ary, fn, count) {
  var timer;

  var len = ary.length;

  var start = function () {
    for (var i = 0; i < Math.min(count || 1, len); i++){
      var obj = ary.shift();
      fn(obj);
    }
  }

  return function() {
    timer = setInterval(function() {
      if (len === 0) {
        return clearInterval(timer);
      }
      start();
    }, 200)
  }
}

var init = function() {
  var ary = []

  for (let i = 0; i < 40000; i++) {
    ary.push(i)
  }

  var appendDiv = function(n) {
    let root = document.getElementById("root")
    let div = document.createElement("div")
    div.innerHTML = n
    root.appendChild(div)
  }

  //TODO: 分时添加节点
  appendDiv = timerSlice(ary, appendDiv, 1000)
  appendDiv()
  // ary.forEach(function(o){
  //   appendDiv(o)
  // })
}

init()
