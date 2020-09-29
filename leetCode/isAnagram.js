/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    if(s.split('').sort().join('') === t.split('').sort().join('')){
        return true;
    }else{
        return false;
    }
};