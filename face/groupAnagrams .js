//https://leetcode.com/problems/group-anagrams/

// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Note:

//     All inputs will be in lowercase.
//     The order of your output does not matter.


// We can calculate the alphabetical order of each string and take it as the key of the dictionary. The value of the key entry is a list containing the string itself. Last, we extract the values from the dictionary.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = {};
    for (let str of strs) {
        let tmp = str.split('').sort().join('');
        if (res[tmp] == null)
            res[tmp] = [str]
        else
            res[tmp].push(str)
    }
    return Object.values(res)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
