// https://leetcode.com/problems/one-edit-distance/
// Given two strings s and t, determine if they are both one edit distance apart.

// Note: 

// There are 3 possiblities to satisify one edit distance apart:

//     Insert a character into s to get t
//     Delete a character from s to get t
//     Replace a character of s to get t

// Example 1:

// Input: s = "ab", t = "acb"
// Output: true
// Explanation: We can insert 'c' into s to get t.

// Example 2:

// Input: s = "cab", t = "ad"
// Output: false
// Explanation: We cannot get t from s by only one step.

// Example 3:

// Input: s = "1203", t = "1213"
// Output: true
// Explanation: We can replace '0' with '1' to get t.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isOneEditDistance = function(s, t) {
//     if(s.length ===0 && t.length===0) return false;
//     if(s === t) return false;
//     if(s.split('').sort().join('') === t.split('').sort().join('')) return false;
    

//     let map = {};
    
//     for(let word of s){
//         if(map.hasOwnProperty(word)){
//             map[word] +=1;
//         }else{
//             map[word] = 1;
//         }
//     }
//     let dist =0;
//     for(let word of t){
//         if(!map.hasOwnProperty(word)){
//             dist++;
//         }
//     }
    
//     // if(dist ===1 && (t.length > s.length || t.length < s.length)){
//     //     return false;
//     // }
//     // if(dist ===0 && (t.length > s.length || t.length < s.length)){
//     //     return true;
//     // }
//     if(s.length > t.length){
//         let temp =s;
//         s = t;
//         t = temp;
//         dist++;
//     }else if(s.length < t.length){
//         let temp =t;
//         t = s;
//         s = temp;
//         dist++;
//     }
//     return dist <= 1 ? true : false;
    
// };


var isOneEditDistance = function(s, t) {
    if (s === t) return false;
    
    const lenDiff = Math.abs(s.length - t.length);
    if (lenDiff > 1) return false;
    
    // make sure s is the longer of the strings
    if (s.length < t.length) [s, t] = [t, s];
    
    // only one mismatch is allowed (replaced or deleted)
    let allowedDiffs = 1;
    
    let i = 0, j = 0;
     
    while (i < s.length) {
        console.log(s[i] + ' ' + t[j]);
        if (s[i] !== t[j]) {
            
            if (allowedDiffs) {
                console.log(s[i] + ' ' + t[j]);
                allowedDiffs--;
                if (lenDiff) {
                    // if one string is shorter and there's a mismatch
                    // then we assume it was deleted from the shorter string
                    // and set it's pointer 1 step back, to account for the removed char
                    j--;
                    console.log(t[j])
                }
            } else {
                return false;
            }
        }
        i++; 
        j++;
    }
    
    return true
};


// console.log(isOneEditDistance('ab','ba'));
// console.log(isOneEditDistance('cab','ad'));
// console.log(isOneEditDistance('123','0133'));
console.log(isOneEditDistance('ab','acb'));