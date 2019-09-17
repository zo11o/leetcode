;(function() {
  var arr = []
  for (let i = 1; i < 101; i++) {
    arr.push(i)
  }
  console.log(arr)
  const body = document.body;
  var b = arr.reduce(function(accumulator, currentValue, index) {
    console.log("accumulator", accumulator)
    console.log("currentValue", currentValue)
    console.log("index", index)
    var dom = document.createTextNode(`${accumulator + currentValue}\n\r`);
    body.appendChild(dom)
    return accumulator + currentValue
  }, 1)

  console.log(b)
})()
