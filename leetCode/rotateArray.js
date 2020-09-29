/**
 * https://leetcode.com/problems/rotate-array/submissions/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //     if(nums.length===1) return nums;
    //     let temp =[];
    //     let len = nums.length;
    //     for(let i = len-1; i>=len-k; i-- ){
    //         temp.push(nums.pop());
    //     }
    //     for(let i =0; i<k; i++){
    //         nums.unshift(temp[i]);
    //     }
        
    //     return nums;
        
        for (let i = 0; i < k; i++) {
            nums.unshift(nums.pop());
        }
        
    };