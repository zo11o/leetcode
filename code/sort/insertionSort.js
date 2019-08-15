/**
 * 插入排序
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * 稳定
 * @param {*} arr
 */
function insertionSort(arr) {
  let len = arr.length
  let preIndex, current

  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr;
}

var arr = [33, 55, 1, 4, 77, 24, 0, 55, 2, 4, 6]
console.log(insertionSort(arr))
