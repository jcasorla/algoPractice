/**
 * https://leetcode.com/problems/number-of-good-pairs/
 *
Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:

Input: nums = [1,2,3]
Output: 0

 

Constraints:

    1 <= nums.length <= 100
    1 <= nums[i] <= 100

 */

/**
 * @param {number[]} nums
 * @return {number}
 */

//0(n^2) | 0(1)
var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const curVal = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const nextVal = nums[j];
      if (curVal == nextVal) {
        count++;
      }
    }
  }
  return count;
};

// 0(n) | 0(n)
const numIdenticalPairs = (nums) => {
  let map = {};
  let counter = 0;

  for (val of nums) {
    !map[val] ? (map[val] = 1) : (counter += map[val]++);
  }

  return counter;
};
