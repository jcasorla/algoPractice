//https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/
// function isPalindrome(str) {
//   // For easy comparison, convert to lower case and replace
//   // any non- alpha or digit character with empty string.
//   str = str.toLowerCase().replace(/[^a-z\d]/g, "");

//   // Start pointers at beginning (i) and end (j).
//   // Move inward until something doesn't match -OR-
//   // the two pointers either meet or pass each other.
//   for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//     if (str[i] !== str[j]) return false;
//   }

//   // If the loop completed with no equality issues,
//   // the string is a valid palindrome.
//   return true;
// }

// I used regexp to determine chars are fits to given explanation.
// a-zA-Z to get all letters
// ^\d+$ to get all digits 0 to 9

// var isPalindrome = function(s) {
//   if(s=='') return true;
//   s = s.match(/[a-zA-Z^\d+$]/g) 
//   var a,b;
//   if(s==null) return true;
//   s = s.join('')
//   for(var i =0; i < s.length/2; i++){
//     a = s[i]
//     b = s[s.length-i-1]
//     if(a.toLowerCase() != b.toLowerCase()){
//       return false;
//     };  
//   }
//   return true
// };


// e.g. s = "g#o_d % do$g"
// 【Approach 1】: Use RegExp & array method
// /* Runtime: 96ms, faster than 40.45% /// Memory Usage: 43MB, less than 18.06% */

// var isPalindrome = function(s) { 
//   s = s.replace(/[^a-z0-9]+/ig,"").toLowerCase();  // regex also cand be "/\W/g"  
//   return s === s.split('').reverse().join('');    // s = "goddog"
// };

// 【Approach 2】: Use RegExp & two pointer
// Since a palindrome string look the same whether we read from begging or form the end.
// We can use two poiner to check after filtering the input string with RegExp
// /* Runtime: 76ms, faster than 95.9% /// Memory Usage: 38.9MB, less than 59.5% */

//   s = s.replace(/[^a-z0-9]+/ig,"").toLowerCase();  
//   let N = s.length;
//   for(let i = 0;i<N/2; i++){
//     if(s[i] !== s[N-1-i]) return false;
//   }
//   return true;

// Theoretically, approach 2 spend less run time

// var isPalindrome = function(s) {
//     s = s.replace(/[^a-z0-9]/ig,'').toLowerCase();
//     let l = 0, r = s.length-1;
//     while (l < r) {
//         if (s[l] !== s[r]) return false;
//         l++, r--;
//     }
//     return true;
// };

// var isPalindrome = function(s) {
//     s = s.replace(/[^a-z0-9]/ig,'').toLowerCase();
//     return s === s.split("").reverse().join("")
};


//mysolution
var isPalindrome = function(s) {
    if(s.length===0) return true;
    var matches = s.match(/[a-zA-Z]+/g);
    // console.log(matches.join(''))
    // matches= matches.toLowerCase();
    matches = matches.join('');
    
    for(let i =0; i<Math.floor(matches.length/2); i++){
        if(matches[i].toLowerCase() !== matches[matches.length-i-1].toLowerCase())
            return false;
    }
    return true;
};

