/**
 * https://leetcode.com/problems/shuffle-the-array/
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

const shuffle = (nums, n) => {
  const ret = [];

  for (let i = 0; i < n; i++) {
    ret.push(nums[i]);
    ret.push(nums[i + n]);
  }

  return ret;
};
// var shuffle = function(nums, n) {
//     let res =  new Array(nums.length).fill(0);

//     let mid = Math.floor(nums.length/2);

//     for(let i =0; i < res.length; i++){
//         if(i % 2 ===0){
//             res[i] = nums[1]
//         }else{
//             res[i] = nums[mid];
//             mid++;
//         }
//     }

//     return res;
// };

// time O(n) space O(n)
var shuffle = function (nums, n) {
  const result = [];
  let isEvenIndex = true;

  for (let i = 0; i < n; i++) {
    if (isEvenIndex) {
      result.push(nums[i]);
      i--;
    } else {
      result.push(nums[i + n]);
    }

    isEvenIndex = !isEvenIndex;
  }

  return result;
};
