/**
 * https://leetcode.com/problems/two-sum/submissions/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dif = {};
    let res = [];
    // nums.forEach((data,idx)=>{
    //     // console.log(idx)
    //     dif[target-data] = idx;
    // });
    
    //   nums.forEach((data,idx)=>{
    //       console.log(data)
    //     if(dif.hasOwnProperty(data)){
    //         res.push(dif[data]);
    //         res.push(idx);
    //     }
    // });
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        
        if(dif.hasOwnProperty(target - num)){
           return [i,dif[target-num]];
        }
        
        dif[num] = i;
    }
    // console.log(Object.keys(dif) +' ' +Object.values(dif))
    return res;
};