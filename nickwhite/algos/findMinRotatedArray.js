// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

// Example 1:

// Input: [3,4,5,1,2] 
// Output: 1
// Example 2:

// Input: [4,5,6,7,0,1,2]
// Output: 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const pivot = findPivot(nums);
    
    return nums[pivot +1];
    
};

function findPivot(arr){
    let low = 0;
    let high = arr.length -1;
    let pivot = -1;

    while(low < high && pivot === -1){        
        
        if (low == high) {
            pivot = low;
        }
        let mid = Math.floor(low + (high -low) /2);
        if(mid < high && arr[mid] > arr[mid+1]){
            pivot = mid;
        }else if(mid > low && arr[mid] < arr[mid-1]){
            pivot = mid-1;
        }else if(arr[low] <  arr[mid]){
            low = mid+1;
        }
        else{
            high = mid-1;
        }

    }
    return pivot;
}