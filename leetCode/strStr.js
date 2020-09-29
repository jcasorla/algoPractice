/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
    hello ll
 */

 //hello ll
 //  ##

var strStr = function(haystack, needle) {
    if(!haystack && !needle) return 0;
    if(haystack === needle) return 0;
    let left = 0;
    let right = needle.length;
    
    while(right <= haystack.length){//1,2,3
        let sub = haystack.slice(left,right);//he , el, ll
        if(sub === needle) return left;//ll ===ll 
        right++;
        left++;
    }
    return -1;
    
};