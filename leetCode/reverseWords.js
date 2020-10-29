/**
 * https://leetcode.com/problems/reverse-words-in-a-string/submissions/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // let regexp = /\s/;
    
    s = s.replace(/\s+/g, ' ');
    s = s.trim();
    let arr = s.split(' ');
    console.log(arr)
    let len = arr.length;
    for(let i =0; i < len/2; i++){
        let temp = arr[i];
        arr[i] = arr[len -1 -i];
        arr[len -1 -i] = temp;
    }
    return arr.join(' ');
    
};

// // No array, split and join. Just string traversal and two string variable (word and result)

// var reverseWords = function(s) {
//     let left = 0;
//     let right = s.length-1;
    
//     while (s[left] === " ") left++;
//     while (s[right] === " ") right--;
    
//     let word = "";
//     let result = "";

//     while (left <= right) {
//         const char = s[left];
//         if (char !== " ") {
//             word += char;
//         } else if (word && char === " ") {
//             if (result) result = word + " " + result;
//             else result = word;
//             word = "";
//         }
//         left++;
//     }
    
//     if (word) {
//         if (result) result = word + " " + result;
//         else result = word;
//     }
    
//     return result;    
// }

// // Of course I prefer one-liner:)

// const reverseWords = s => s.trim().split(" ").filter(w => w).reverse().join(" ");
