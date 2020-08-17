// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3017/
// Given a string, find the length of the longest substring T that contains at most k distinct characters.

// Example 1:

// Input: s = "eceba", k = 2
// Output: 3
// Explanation: T is "ece" which its length is 3.

// Example 2:

// Input: s = "aa", k = 1
// Output: 2
// Explanation: T is "aa" which its length is 2.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// var lengthOfLongestSubstringKDistinct = function(s, k) {
//     if (!s || k === 0) {
//         return 0;
//     }
//     let max=1,l=0,r=0, len = s.length;
    
//     while(l<len){
//         let local=1;
//         let map={};
//         map[s[l]] = true;
//         console.log(Object.keys(map).length);
//          while(Object.keys(map).length <k){
//             local++;
//              if(!map.hasOwnProperty(s[r])){
//                  map[s[r]] = true;
//              }
//             r++;
        
//         }
//         // let local = Object.keys(map).length;
//         console.log(local);
//         if(local > max){
//             max = local;
//         }
//         l++;
//     }
//     return max;
// };




var lengthOfLongestSubstringKDistinct = function(s, k) {
   let start = 0, end = 0, longest = 0, incoming, outgoing, distinct = 0;
   const map = {};
   
   for (; end < s.length; end++) {
       incoming = s.charAt(end);
       if (!map[incoming]) {
           distinct++;
           map[incoming] = 1;
       } else {
           map[incoming] = map[incoming] + 1;
       }
       
       if (distinct > k) {
           outgoing = s.charAt(start++);
           if (map[outgoing] === 1) {
               delete map[outgoing];
               distinct--;
           } else {
               map[outgoing] = map[outgoing] - 1;
           }
       }
       
       longest = Math.max(longest, end - start + 1);
   }
   
   return longest;
};

console.log(lengthOfLongestSubstringKDistinct('ecebo',2));
console.log(lengthOfLongestSubstringKDistinct('fdaa',1));
console.log(lengthOfLongestSubstringKDistinct('loveleetcode',4));