/**
 * https://leetcode.com/explore/interview/card/amazon/76/array-and-strings/2967/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>a-b);
    let len = nums.length;
    let min = Infinity;
    let res = -1;
    for(let i =0; i < len-2; i++){
        let left = i+1;
        let right = len-1;
        let abs = Infinity;
        
        while(left<right){
           const sum = nums[i] + nums[left] + nums[right];
              if(sum === target){
                  return sum;
              }else if(sum < target){
                  left++;
              }else if(sum > target){
                  right--;
              }
            abs = Math.abs(target - sum);
            
            if(abs < min){
                min = abs;
                res = sum;
            }
            
            
        }
    }
    return res;
    
};