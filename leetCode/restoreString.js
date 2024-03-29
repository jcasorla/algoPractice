/**
 * https://leetcode.com/problems/shuffle-string/
 * Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

 

Example 1:

Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

Example 2:

Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.

Example 3:

Input: s = "aiohn", indices = [3,1,4,2,0]
Output: "nihao"

Example 4:

Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
Output: "arigatou"

Example 5:

Input: s = "art", indices = [1,0,2]
Output: "rat"

 

Constraints:

    s.length == indices.length == n
    1 <= n <= 100
    s contains only lower-case English letters.
    0 <= indices[i] < n
    All values of indices are unique (i.e. indices is a permutation of the integers from 0 to n - 1).

 */

//my try:
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const arr = s.split("");

  for (let i = 0; i < indices.length; i++) {
    const index = indices[i];
    swap(i, index, arr);
  }

  return arr.join("");
};

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 0(n) | 0(n)
var restoreString = function (s, indices) {
  let word = "";

  for (let i = 0; i < indices.length; i++) {
    const idx = indices.indexOf(i);
    word += s[idx];
  }

  return word;
};

// 0(n) | 0(n)
var restoreString = function (s, indices) {
  let shuffled = new Array(indices.length);

  for (let i = 0; i < indices.length; i++) {
    const char = s[i];
    const to = indices[i];

    shuffled[to] = char;
  }

  return shuffled.join("");
};
