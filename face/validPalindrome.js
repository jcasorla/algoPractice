// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/288/
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:

// Input: "race a car"
// Output: false

 

// Constraints:

//     s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    if(s ==='') return true;

    let res ='';

    let len = s.length;
    for(let i=0; i<len; i++){
       if((s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) 
       || (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) 
       ||(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)){
           res += s[i];
       }
    }
    console.log(res);
    function isPalin(res){
        let len = res.length;
        for(let i=0; i<len/2; i++){
            if(res[i].toLowerCase() !== res[len-1-i].toLowerCase()){
                return false;
            }
        }
        return true;
    }
    return isPalin(res);
};

// console.log(isPalindrome('A man, a plan, a canal: Panama')); //true
// console.log(isPalindrome('race a car'));// false
console.log(isPalindrome('0P'));// false