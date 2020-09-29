/**
 * https://leetcode.com/problems/longest-common-prefix/solution/
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//     let prefix = strs[0];
//     // console.log(prefix)
//     for(let i=1; i<strs.length; i++){
//         while(!strs[i].includes(prefix)){
//             prefix = prefix.split('');
//             console.log(prefix + 'd')
//             prefix.pop();
//             prefix = prefix.join('');
//         }
//     }
//     return prefix === undefined ? '' : prefix;
// };

var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for(let i=1; i<strs.length; i++){
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }      
    }
    return prefix === undefined ? '' : prefix;
};