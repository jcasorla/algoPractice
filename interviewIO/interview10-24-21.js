/*
250 to 350

80 to 85% medium
easy and hard , rest 

https://github.com/cl2333/Grokking-the-Coding-Interview-Patterns-for-Coding-Questions

- Clarifying questions 
- approach clarity before coding 
- Call out any non trivial cases or stuff
- Code 
- Walkthrough the code, pick an example input, step through it like a debugger, showing var updates

- Edge cases discussion, unit tests 
- Eyeball the code, look for logical/syntactic errors before running code
- Dont use global vars 
- Present multiple approaches if you know of more than one, discuss the tradeoff. Simplify, efficiency …


// const _ = require('lodash');

pramp.com -> 
  
med 20 to 30 min max
+++++++++++++++++
my comments:
bruteforce -> generate every possible substr and see if they are palingdromes
journaling of problems

200
15 
*/


/* 
Your previous Plain Text content is preserved below:

"abccbabccb" -> "abccba"

longest: 1

ans = "b"
bcc

i= center (one letter center)
i-1 and i (two letter center)


   i
abccbabccb
l
    r
012
aaa
l
  r
 1
 
 cac => cac
 bac -> b
 abbd -> bb
 abba -> abba
 abca -> a
 '' -> ''
 a -> a
 ab
 aa 
 */

function longestPalindrome(str){
  const len = str.length;
  
  let ans = '';//aa
  //i as center
  
  
  while(i < len){
      //expand
    let res1 = expandOut(str, i, i);
    let res2 = expandOut(str, i, i+1);
    let str1 = str.slice(res1[0], res1[1]+1); 
    let str2 = str.slice(res2[0], res2[1]+1); 
    
    let curLongest = str1.length > str2.length ? str1 : str2;
    ans = curLongest.length > ans.length ? curLongest : ans; 
    
    
    
  }
  return ans;
  
  
  //i and i+1 center
  
}
 i
"abccbabccb"
 l
 r
function expandOut(str, left, right) {
  
  while (left >= 0 && right < str.length) {
    if(str[left] !== str[right]) break;
    
    left--;
    right++;
  }
  
  return [left+1, right-1];
  
}