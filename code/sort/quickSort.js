/**
 * 快速排序
 * 时间复杂度：O(n log n)
 * 空间复杂度：O(log n)
 * 稳定
 * @param {*} arr
 * @description https://www.cnblogs.com/Unknw/p/6346681.html
 */
export default (arr) => {
  let len = arr.length
  let i = 0
  let low = 0
  let hight = len - 1
  while (i < len && low !== hight) {
    if (arr[low] >= arr[i]) {
      arr[len - 1 - i] = arr[low]
    }
    if (arr[hight] <= arr[i]) {
      arr[i] = arr[hight]
    }
    low++
    hight--
    i++
  }

  return arr
}

// var arr = [33, 55, 1, 4, 77, 24, 0, 55, 2, 4, 6]
// console.log(quickSort(arr))
