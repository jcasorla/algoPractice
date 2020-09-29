/**
 * https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/289/
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l = 0, r = s.length-1, correction = 1;
    while (l < r) {
        if (s[l] === s[r]) l++, r--;
        else if (s[l+1] === s[r] && s[l+2] === s[r-1] && correction) l++, correction--;
        else if (s[l] === s[r-1] && correction) r--, correction--;
        else return false;
    }
    return true;
};