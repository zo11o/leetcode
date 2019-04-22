// 第 59 题：给定两个数组，写一个方法来计算它们的交集。
// 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。

function intersection (array1, array2) {
  let result = []

  array1.forEach((o, i) => {
    let index = array2.indexOf(o)
    if (index !== -1) {
      result.push(o)
      array2.splice(index, 1)
    }
  })

  return result
}

let nums1 = [1, 2, 2, 1]; let nums2 = [2, 1]
intersection(nums1, nums2)
