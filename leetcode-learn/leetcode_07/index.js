// 数字反转
var reverse = function (x) {
  let result = 0

  // 精髓
  // 一个数对10取余数得到个位数数字 如 235 % 10 == 5
  while (x !== 0) {
    result = result * 10 + x % 10
    x = parseInt(x / 10)
  }

  if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
    return 0
  }

  return result
}

var a = -225
console.log(reverse(a))
