/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0
  let count = 0
  while (i < nums.length) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      count++
    } else {
      i++
    }
  }

  for (var j = 0; j < count; j++) {
    nums.push(0)
  }

  return nums
}
