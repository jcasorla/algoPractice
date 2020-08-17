// https://leetcode.com/problems/move-zeroes/
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:

//     You must do this in-place without making a copy of the array.
//     Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
	if(nums.length<2) return nums

	let i = 0, j = 1;

	while(i<j&&j<nums.length){

		if(nums[i]== 0 && nums[j] == 0){
			j++
			continue

		}else if(nums[i] === 0 && nums[j] != 0){
			let temp = nums[i]
			nums[i] = nums[j]
			nums[j] = temp         
		}
		i++
		j++
	}
	return nums   
}

console.log(moveZeroes([0,4,3,2,1]));
console.log(moveZeroes([0,1,0,3,12]));

// Find non zero numbers and count it.
// The count is index of non zero numbers.

// var moveZeroes = function(nums) {
//   let j = 0  // nonzero count

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
// 	  // swap elements
//       [nums[j], nums[i]] = [nums[i], nums[j]]
//       j++
//     }
//   }
// };
