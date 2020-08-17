// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3016/
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]

// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [1], right = [1], result = [], len = nums.length;
    for (let i=1;i<len;i++) {
        left.push(left[i-1] * nums[i-1]);
    }
     
    for (let i=len-2;i>=0;i--) {
        right.push(right[(len - i - 2)] * nums[i+1]);
    }
    for (let i=0;i<len;i++) {
        result[i] = left[i] * right[len - i - 1];
    }

    return result; 
};

console.log(productExceptSelf([1,2,3,4]));


// const productExceptSelf = function(nums) {
//     var length = nums.length;
//     var result = [1];
//     var temp = 1;
//     for (let i = 1; i < length; i++) {
//         result[i] = result[i - 1] * nums[i - 1];
//     };
//     for (let i = length - 1; i > -1; i--) {
//         result[i] = result[i] * temp
//         temp = temp * nums[i];
//     };
//     return result;
// };