/**
 * https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3010/
 * @param {string} s
 * @return {number}
 xiv
 */
var romanToInt = function(s) {
    let rome = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M': 1000};
    let sum = 0;
    let len = s.length;
     
    for(let i =len-1; i>=0; i--){
        let cur = s[i];
        let prev = s[i-1];
        sum+=rome[cur];
        if(prev ==='I' && (cur ==='V' || cur ==='X')){
            sum-=rome[prev];
            i--;
        }else if(prev ==='X' && (cur ==='L' || cur ==='C')){
            sum-=rome[prev];
            i--;
        }else if(prev ==='C' && (cur ==='D' || cur ==='M')){
            sum-=rome[prev];
            i--;
        }
    }
    return sum;   
    
};