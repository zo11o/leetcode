/**
 * 归并排序
 * 时间复杂度：O(n log n)
 * 空间复杂度：O(n)
 * 稳定
 * @param {*} arr
 * @description https://www.cnblogs.com/Unknw/p/6346681.html
 */
function mergeSort(arr) {
  let len = arr.length
  if (len < 2) {
    return arr
  }
  let middle = Math.floor(len / 2)

  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []

  // 比较大小
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }

  return result
}

var arr = [33, 55, 1, 4, 77, 24, 0, 55, 2, 4, 6]
console.log(mergeSort(arr))
