/**
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * 
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

 

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]

Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]

 

Constraints:

    2 <= nums.length <= 500
    0 <= nums[i] <= 100


 */

//  no solution:
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const map = {};

  nums.forEach((num) => {
    map[num] = 0;
  });

  for (let key in map) {
    const val = map[key];

    for (let num of nums) {
      if (num == key) continue;
      if (num < key) map[key]++;
    }
  }
  return Object.values(map);
};

// 0(n^2) | 0(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const res = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < cur) {
        res[i]++;
      }
    }
  }
  return res;
};

// 0(n) | 0(n)
var smallerNumbersThanCurrent = function (nums) {
  let len = nums.length;
  let sorted = [...nums].sort((a, b) => {
    return b - a;
  });
  let result = [];
  let map = {};
  for (let i = 0; i < len; i++) {
    map[sorted[i]] = i;
  }
  for (let i = 0; i < len; i++) {
    result.push(len - 1 - map[nums[i]]);
  }

  return result;
};

function smallerNumbersThanCurrent(nums) {
  let uniqSortedItems = {},
    smallerCounter = 0,
    result = [];

  // make an object with keys of uniq numbers in nums and their indexes as values
  // and we know that number key in object, getting sorted by itself
  nums.forEach((num, numIndex) => {
    uniqSortedItems[num] = uniqSortedItems[num]
      ? [...uniqSortedItems[num], numIndex]
      : [numIndex];
  });

  // start from the smallest value/values in the `nums` (which is accessible by first item of `uniqSortedItems`)
  // set the same index/indexes of the min value/values in return array(in this solution `result`) to 0
  //(We already saved the index/indexes of min value/values in the `uniqSortedItems[min]` array)
  // increase the `smallerCounter` as many as the min was repeated,
  //So we can use `smallerCounter` (instead of 0) for the next min values after this item
  // we continue it for all of the `uniqSortedItems` value
  Object.values(uniqSortedItems).forEach((indexArray) => {
    indexArray.forEach((numIndex) => (result[numIndex] = smallerCounter));
    smallerCounter += indexArray.length;
  });

  return result;
}

//  sort duplicated array ASC
//  map existing array with the first index of value in sorted array via binary search of index (potentially we could cache results if needed, to not execute multiple time for same value)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  // sort + binary searched first index
  const sorted = [...nums].sort((a, b) => a - b);
  return nums.map((num) => findIndex(sorted, num));
};

function findIndex(nums, value) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((hi + lo) / 2);
    const midValue = nums[mid];

    if (midValue >= value) {
      hi = mid - 1;
      continue;
    }

    lo = mid + 1;
  }

  return lo;
}
