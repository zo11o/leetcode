;(function() {
  var arr = []
  for (let i = 1; i < 101; i++) {
    arr.push(i)
  }
  console.log(arr)
  var b = arr.reduce(function(accumulator, currentValue, index) {
    console.log("accumulator", accumulator)
    console.log("currentValue", currentValue)
    console.log("index", index)
    return accumulator + currentValue
  }, 1)

  console.log(b)
})()
