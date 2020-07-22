// https://leetcode.com/problems/search-in-rotated-sorted-array/

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// function findPivotIter(arr, low, high){
//     let left = 0;
//     let right = arr.length -1;
//     let pivot = null;
//     let mid = Math.floor(low + (high -low) /2)

//     while(left < right && !pivot){
//         if(mid < right && arr[mid] > arr[mid+1]){
//             pivot = mid;
//         }else if(mid > low && arr[mid] < arr[mid-1]){
//             pivot = mid-1;
//         }else if(arr[right] > arr[mid]){
//             right = mid+1;
//         }else if(arr[left] <  arr[mid]){
//             left = mid-1;
//         }
//     }
//     return pivot;
// }

function findPivotIter(arr){
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

function binarySearchPivot(arr,key){
    if(arr.length ===0){
        return -1;
    }
    let left =0;
    let pivot = findPivotIter(arr,0,arr.length - 1);

    let res = binarySearch(arr,key,left,pivot);
    let res2 = binarySearch(arr,key,pivot+1,arr.length - 1);
    return res !=-1 ? res : -1 || res2 !=-1 ? res2 : -1;
   
    // if(res!=-1) return res;
    // if(res2!==-1) return res2;
    // return -1;
}

function binarySearch(arr,key,left,right){
    while(left<=right){        
        let mid = Math.floor(left + (right-left)/2);
        if(arr[mid] === key){
            return mid;
        }else if(arr[mid] < key){
            left = mid + 1;
        }else if(arr[mid] > key){
            right = mid - 1;
        }
    }
    return -1;
} 

let arr = [4,5,6,7,0,1,2];
console.log(binarySearchPivot(arr,0));

// console.log(binarySearchPivot([1,3],0));
// console.log(binarySearchPivot([3,1],0));