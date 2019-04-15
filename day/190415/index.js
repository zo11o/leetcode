// 冒泡排序
function buddleSort (arr) {
  const array = [...arr]
  let isOk = true

  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = i + 1; j <= array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i]
        array[j] = array[i]
        array[i] = temp
      }
    }
    if (isOk) {
      break
    }
  }
  return array
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let result = buddleSort(array)
console.log(result)
