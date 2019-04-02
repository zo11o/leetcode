/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {
//   if (!strs.length) return ''
//   let min = Number.MAX_VALUE
//   strs.sort((a, b) => a.length > b.length)
//   min = strs[0].length
//   var ms = strs[0];

//   if (min === 0) {
//     return ''
//   }

//   if (min === 1) {
//     if (strs.some((o) => o.slice(0, 1) !== ms)) return ''
//   }

//   if (strs.every((o) => o.slice(0, min) === ms)) return ms

//   if (min % 2 === 1) {
//     ms += ' '
//   }

//   var result = ''

//   function _search (m, str) {
//     if (strs.some((o, i) => o.slice(0, m) !== str)) {
//       _search(m / 2, str.slice(0, m / 2))
//     } else {
//       result = result + str
//       if (strs.some((o, i) => o.slice(m - 1, m) !== str)) {
//         return _search(m / 2, str.slice(m - 1, m / 2))
//       } else {
//         return result + str
//       }
//     }
//   }

//   result = _search(min, ms)

//   return result
// }

/**
 * 二分法查找
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  let min = Number.MAX_VALUE
  strs.sort((a, b) => a.length > b.length)
  min = strs[0].length

  function isCommonPrefix (strs, len) {
    var str1 = strs[0].substring(0, len)
    for (var i = 1; i < strs.length; i++) {
      if (strs[i].substring(0, len) !== str1) {
        return false
      }
    }
    return true
  }

  var low = 1
  while (low <= min) {
    var middle = parseInt((low + min) / 2)
    if (isCommonPrefix(strs, middle)) {
      low = parseInt(middle + 1)
    } else {
      min = parseInt(middle - 1)
    }
  }

  return strs[0].substring(0, (low + min) / 2)
}

var arr = ['flower', 'flow', 'flight']

var result = longestCommonPrefix(arr)

console.log(result)
