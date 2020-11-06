/**
 * https://leetcode.com/explore/interview/card/uber/289/array-and-string/1683/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Input: nums = [5,7,7,8,8,8,8,8,10], target = 8
//                      x       X 
// Output: [3,7]

//linear search - O(N)
// var searchRange = function(nums, target) {
//     let len = nums.length;
//     let res = [-1,-1];
//     for(let i =0; i < len; i++){
//         let num = nums[i];
//         if(target === num){
//             res[0] = i;
            
//             res[1] = expandRight(i,nums,target);
//             break;
//         }       
        
//     }
    
//     return res; 
    
// };

// function expandRight(index, array,target){
//     while(array[index] ===target){
//         index++;
//     }
//     return index-1;
// }


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Input: nums = [5,7,8,8,8,10], target = 8
//                    x x x  
// Output: [2,4]

//binary search O(log N)
var searchRange = function(nums, target) {
    let len = nums.length;
    let res = [-1,-1];
    
    let left =0;
    let right = len -1;
    
    while(left <=right){
        let mid = Math.floor(left+ (right -left)/2)
        if(nums[mid] === target){
            res[0] = expandLeft(mid,nums,target);
            res[1] = expandRight(mid,nums,target);
            break;
            
        }else if(nums[mid] < target){
            left = mid + 1;  
        }else if(nums[mid] > target){
            right = mid - 1;
            
        }
    }
    return res; 
    
};
function expandLeft(index, array,target){
    while(array[index] ===target){
        index--;
    }
    return index+1;
}
function expandRight(index, array,target){
    while(array[index] ===target){
        index++;
    }
    return index-1;
}