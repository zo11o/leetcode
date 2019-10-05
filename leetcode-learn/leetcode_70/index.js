/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   return _climbStairs(0, n)

//   function _climbStairs (i, n, step) {
//     if (i > n) {
//       return 0
//     }
//     if (i === n) {
//       return 1
//     }

//     console.log(`(${i},${n})`)
//     return _climbStairs(i + 1, n, 'one') + _climbStairs(i + 2, n, 'two')
//   }
// }

var climbStairs = function (n) {
  if (n === 1) {
    return 1
  }

  var first = 1
  var second = 2

  for (var i = 3; i <= n; i++) {
    second = first + second
    first = second - first
  }

  return second

  // let dp = new Array(n + 1)
  // for (var i = 3; i <= n; i++) {
  //   dp[i] = parseInt(dp[i - 1]) + parseInt(dp[i - 2])
  // }
}

var number = climbStairs(5)
console.log(number)
