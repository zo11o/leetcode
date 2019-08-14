/**
 * 选择排序
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * 不稳定
 * @param {*} arr
 */
function selectSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let minIndex = i
    let min = arr[minIndex]
    for (let j = i + 1; j < len; j++) {
      if (min > arr[j]) {
        min = arr[j]
        minIndex = j
      }
    }
    arr[minIndex] = arr[i]
    arr[i] = min
  }

  return arr
}

var arr = [33, 55, 1, 4, 77, 24, 0, 55, 2, 4, 6]
console.log(selectSort(arr))
