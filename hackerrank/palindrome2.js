
// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/289/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let len = s.length;
    let del =1;
    let arr = s.split('');
    for(let i=0; i<len/2; i++){
            let j = len-i-1;
            if(arr[i] !==arr[j]){
                   if(del===1){
                       if(arr[i+1] === arr[j]){
                           del--;                           
                       }else{
                            del--;                       
                            i--;
                            len -=1;
                       }
                       
                   }else{
                       return false;
                   }
            }
    }
    return true;
};

console.log(validPalindrome('abca'));
console.log(validPalindrome('aba'));
console.log(validPalindrome('abcba'));
console.log(validPalindrome('deee'));
console.log(validPalindrome('racercar'));
console.log(validPalindrome('eedede'))


// function validPalindrome(str) {
//     let start = 0;
//     let end = str.length - 1;
  
//     while(start < end) {
//       if(str[start] !== str[end]) {
//         //check both ways, slice here is not so intuitive
//         return isValidYet(str.slice(start, end))
//           || isValidYet(str.slice(start + 1, end + 1));
//       }
  
//       start++;
//       end--;
//     }
  
//     return true;
//   }
  
//   // just checking is regular palindrome
//   function isValidYet(s) {
//     for(let i = 0; i < s.length / 2; i++) {
//       if(s[i] !== s[s.length - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
//   }


// function validPalindrome(s,left = 0, right = s.length - 1, removedChars = 0) {

//     if (removedChars > 1){
//         return false;
//     }

//     while(left < right){

//         if (s[left] !== s[right]){
//             return validPalindrome(s, left+1, right, removedChars+1) || validPalindrome(s, left, right-1, removedChars+1);
//         }

//         left++;
//         right--;
//     }

//     return true;

// }


// var validPalindrome = function(s, corrections = 1) {
//   let lo = 0;
//   let hi = s.length - 1;
  
//   while (lo < hi) {
//     if (s[lo] === s[hi]) {
//       lo++;
//       hi--;
//       continue;
//     }
    
//     if (corrections === 0) {
//       return false;
//     }
    
//     return validPalindrome(s.slice(lo, hi), 0) 
//       || validPalindrome(s.slice(lo + 1, hi + 1), 0);
//   }
  
//   return true;
// };

// const validPalindrome = (str, skipped = false) => {
//     for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//       if (str[i] !== str[j]) {
//         if (skipped) return false;
//         return (
//           validPalindrome(str.substring(i, j), true) ||
//           validPalindrome(str.substring(i + 1, j + 1), true)
//         );
//       }
//     }
//     return true;
//   };
