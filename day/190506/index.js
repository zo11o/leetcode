// 第 67 题：随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]
function formatArray (arr) {
  let result = []

  arr.sort((a, b) => {
    return a - b
  })

  arr = _unique(arr)
  let i = 4
  let n = 0
  while (n < 7) {
    result.push(arr.slice(n, i + n))
    n = n + i
    i = (i / 2)
  }

  function _unique (arr) {
    var x = new Set(arr)
    return [...x]
  }

  return result
}

console.log(formatArray([2, 10, 3, 4, 5, 11, 10, 11, 20]))
