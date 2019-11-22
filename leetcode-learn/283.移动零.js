/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//   var j = -1;

//   for(var i = 0; i < nums.length; i++) {
//     if (nums[i] != 0) {
//       j ++;
//       var temp = nums[i];
//       nums[i] = nums[j];
//       nums[j] = temp;
//     }
//   }
// };

var moveZeroes = function(nums) {
  var insertPos = 0;

  for (var i = 0; i < nums.length ; i ++) {
    if (nums[i]!= 0) {
      nums[insertPos++] = nums[i];
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
};

// @lc code=end
