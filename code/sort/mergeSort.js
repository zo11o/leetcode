/**
 * 归并排序
 * 时间复杂度：O(n log n)
 * 空间复杂度：O(n)
 * 稳定
 * @param {*} arr
 * @description https://www.cnblogs.com/Unknw/p/6346681.html
 */
function mergeSort(arr) {
  //采用自上而下的递归方法
  var len = arr.length
  if (len < 2) {
    return arr
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle)
  console.log("left", left)
  console.log("right", right)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  var result = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) result.push(left.shift())

  while (right.length) result.push(right.shift())

  console.log('result=====',result)
  return result
}

// TODO: 归并排序自己实现。以上为网页实现

var arr = [33, 55, 1, 4, 77, 24, 0, 55, 2, 4, 6]
console.log(mergeSort(arr))
