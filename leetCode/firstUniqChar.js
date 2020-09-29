
/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
 */
var firstUniqChar = function(s) {
    let map = {};
    
    for(let i=0; i<s.length; i++){
        if(map.hasOwnProperty(s[i])){
            map[s[i]] += 1;
        }else{
            map[s[i]] = 1;
        }
    }
    
    for(let i=0; i<s.length; i++){
        if(map[s[i]] === 1) return i;
    }
    return -1;
};