/**
 * 希尔排序
 * 时间复杂度：O(n log n)
 * 空间复杂度：O(1)
 * 不稳定
 * @param {*} arr
 */
function shellSort(arr, gapLength = 3) {
  let len = arr.length
  let temp, gap = 1;
  while (gap < len / gapLength) {
    gap = gap * gapLength + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / gapLength)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}

var arr = [33, 55, 1, 4, 77, 24, 0, 55, 2, 4, 6]
console.log(shellSort(arr))
