// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// nums is a non decreasing array.
// -10^9 <= target <= 10^9

var searchRange = function(nums, target) {
    let left = binarySearch(nums,target);
    let right = left;
    
    if(left ===-1) return [-1,-1];
    while(nums[right] === target){
        right+=1;
    }    
    return [left,right-1] 
};

function binarySearch(arr,key){
    let left =0;
    let right = arr.length-1;
    while(left<=right){        
        let mid = Math.floor(left + (right-left)/2);
        if(arr[mid] === key){
            while(arr[mid]===key){
                mid-=1;
            }
            return mid +1;
        }else if(arr[mid] < key){
            left = mid + 1;
        }else if(arr[mid] > key){
            right = mid - 1;
        }
    }    
    
    return -1;
} 