
// https://leetcode.com/problems/longest-repeating-character-replacement/

// Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

// In one operation, you can choose any character of the string and change it to any other uppercase English character.

// Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

// Note:
// Both the string's length and k will not exceed 104.

// Example 1:

// Input:
// s = "ABAB", k = 2

// Output:
// 4

// Explanation:
// Replace the two 'A's with two 'B's or vice versa.
 

// Example 2:

// Input:
// s = "AABABBA", k = 1

// Output:
// 4

// Explanation:
// Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

//idea: 
//identify the longest substring
//swap based on that substring


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */


// var characterReplacement = function(s, k) {
//     let max = 0;
//     let start = 0;
//     let map = {};
//     let maxChar = 0;
    
//     for (let i = 0; i < s.length; i++) {
        
//         //Set max char
//         map[s[i]] = (map[s[i]] || 0) + 1;
//         maxChar = Math.max(maxChar, map[s[i]]);
//         // console.log(s[i] + ' ' +map[s[i]]);
//         console.log(maxChar)
    
        
//         //Check violation
//         //0-0+1 - 1 > 1 || 2 - 2 > 1 || 2-0+1 -2 =1 >1 || 3-0+1=4 -3=1>1 || 4-0+1 =5 -3=2 >1     
//         while (i-start+1 - maxChar > k) {
//             console.log('enter ' + maxChar)
//             console.log(--map[s[start++]]);
//             maxChar = Math.max(maxChar, --map[s[start++]]);
//         }
        
//         max = Math.max(max, i-start+1);
//     }
    
//     return max;
// };
// //AABABBA
// //A:3 ,B:3
// console.log(characterReplacement('AABABBA',1))


var characterReplacement = function(s, k) {
    var [start, end, maxCount, maxLength, hashMap, size] = [0, 0, 0, 0, {}, s.length];
    
    // window size will be (end - start + 1)
    while(end < size) {
        // Fetch the current processed character
        var char = s[end];
        
        // Populate the character map
        if(hashMap.hasOwnProperty(char)) {
            hashMap[char]++;
        } else {
            hashMap[char] = 1;
        }
        
        // Keeping track of the character which appears maximum number of times in the window
        maxCount = Math.max(maxCount, hashMap[char]);
        
        // Checking for the number of replacements
        // If the number of replacements exceed k, then shrink the window
        
        // If number of replacements exceeds k, then shrink the window
        while(end - start + 1 - maxCount > k) {
            hashMap[s[start]]--;
            start++;
            maxLength = Math.max(maxLength, end - start + 1);
            maxCount = Math.max(maxCount, hashMap[s[start]]);
        }
        
        end++;
    }
    
    // If the number of replacements never exceeds k, e.g., ABAB and k = 2
    maxLength = Math.max(maxLength, end - start);
    
    return maxLength;
};