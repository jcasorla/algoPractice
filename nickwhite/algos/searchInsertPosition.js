// https://leetcode.com/problems/search-insert-position/submissions/

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let similar = binarySearch(nums,target,0,nums.length-1);
    if(nums[similar] === target) return similar;
    if(nums[similar] > target) return similar;
    if(nums[similar] < target) return similar +1;
    
};

function binarySearch(arr,key,left,right){
    let mid = Math.floor(left + (right-left)/2);;
    while(left<=right){        
        mid = Math.floor(left + (right-left)/2);
        if(arr[mid] === key){
            return mid;
        }else if(arr[mid] < key){
            left = mid + 1;
        }else if(arr[mid] > key){
            right = mid - 1;
        }
    }
    return mid;
} 