// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3008/
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 

// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let hash ={};
//     maxCount=0;
//     count=0;
//     if(s.length < 2) {
//         return s.length;
//     }
    
//     for(let i=0; i<s.length; i++){
//         if(hash.hasOwnProperty(s[i])){
//             maxCount = Math.max(maxCount,count);
//             if(s[i+1] === s[i]){
//                 count =0;
//                 hash ={};
//             }else{
//                 count=1;
//                 hash ={};
//                 hash[s[i]] =1;
//             }
            
//         }else{
//             hash[s[i]] =1;
//             count++;
//         }
//     }
//     return Math.max(maxCount,count);
    
// };

function lengthOfLongestSubstring(s){
    if(s.length<2)  return s.length;

    let hash ={}, left =0, right =0, max=0, cur=0;

    while(right<s.length){
       
        if(!hash.hasOwnProperty(s[right])){
            hash[s[right]] =1;
           
            // console.log('left ' + s[left] + ' ' + left);
            // console.log('right ' + s[right] + ' ' + right);
            cur = Math.abs(left-right) +1;
            max = Math.max(cur,max);
            // console.log(cur);
            // console.log(max);
           
            right++;            
        }else{
            while(hash[s[left]] !== hash[s[right]]){
                delete hash[s[left]];
                left++;
            }
            delete hash[s[left]];
            left++;
            hash[right] =1;
        }
    }
    return max;
}

console.log(lengthOfLongestSubstring('abcbba'));//3
console.log(lengthOfLongestSubstring('pwwkew'));//3
console.log(lengthOfLongestSubstring('aab'));//2
console.log(lengthOfLongestSubstring('bbbb')); //1
console.log(lengthOfLongestSubstring('dvdf')); //3 


// var lengthOfLongestSubstring = function(s) {
//     var length = s.length;
//     if (length <= 1) {
//         return length;
//     }
//     var p = 0;
//     var q = 1;
//     var result = 1;
//     while (q < length) {
//         var sub = s.slice(p, q);
//         var i = sub.indexOf(s[q]);
//         if (i !== -1) {
//             p = p + i + 1;
//         }
//         q++;
//         result = q - p > result ? q - p : result;
//     }
//     return result;
// };


// var lengthOfLongestSubstring = function(s) {
//     let longestStrLength = "";
//     let currentStr = "";
//     for(i in s){
//         const c = s[i];
//         const cPos = currentStr.indexOf(c);
//         if(cPos === -1){
//             currentStr += c;
//         } else {
//             longestStrLength = Math.max(longestStrLength, currentStr.length);
//             currentStr = currentStr.substring(cPos + 1) + c;
//         }
//     }
//     longestStrLength = Math.max(longestStrLength, currentStr.length);
//     return longestStrLength;
// };