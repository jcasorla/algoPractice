/**
 * @param {number[]} nums
 * @return {number}
 */

//O(N)^2
// var maxSubArray = function(nums) {
//     let len = nums.length;
//     let max = -Infinity;

//     if(len === 1){
//         return nums[0];
//     }
//     for(let i =0; i < len; i++){
//         let sum =0;
//         for(let j = i; j < len; j++){
//             sum +=  nums[j];
//             max = Math.max(sum,max);
//         }

//     }
//     return max;

// };

//O(N)
//Greedy
function maxSubArray(nums) {
  let n = nums.length;
  let currSum = nums[0],
    maxSum = nums[0];

  for (let i = 1; i < n; ++i) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

//Kadanse DP
// class Solution {
//   public int maxSubArray(int[] nums) {
//     int n = nums.length, maxSum = nums[0];
//     for(int i = 1; i < n; ++i) {
//       if (nums[i - 1] > 0) nums[i] += nums[i - 1];
//       maxSum = Math.max(nums[i], maxSum);
//     }
//     return maxSum;
//   }
// }
