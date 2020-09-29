

/**
 * https://leetcode.com/explore/interview/card/facebook/54/sorting-and-searching-3/3033/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = [];
    let map = {};
    
    nums1.forEach(num=>{
        map[num] = true;
    });
    
    nums2.forEach(num=>{
        if(map.hasOwnProperty(num)){
            res.push(num);
            delete map[num];
        }
    });
    
    return res;
    
};