// https://leetcode.com/problems/two-sum/
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


var twoSum = function(nums, target) {
    let hash = {};
    
    // for(val of nums){
    //     if(hash[val]){
    //         return true;           
    //     }
    //     hash[target-val] =true;
    // }

    for(let i=0; i < nums.length; i++){
        if(hash[nums[i]]){
            let res = hash[nums[i]]            
            return [res[1],i]          
        }
        hash[target-nums[i]] = [true,i];
    }
    return false;
    
};

console.log(twoSum([2,7,11,],9));
console.log(twoSum([2,4,3,4],8));

// var twoSum = function(nums, target) {
//     let numberIndex = new Map();
//     let result=[];
//     for(let i=0; i < nums.length; i++){
//         let num = nums[i];
//         let complement = target - num;
//         if(numberIndex.has(complement)){
//             result[0] = numberIndex.get(complement);
//            result[1]= i;
//             return result;
//         }
//         numberIndex.set(num , i);
//     }
//     return result;
// };



// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
// 	}
// }