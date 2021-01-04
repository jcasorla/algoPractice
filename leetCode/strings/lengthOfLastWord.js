/**
 * https://leetcode.com/problems/length-of-last-word/submissions/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.split(" ");
  let i = arr.length - 1;
  while (i >= 0) {
    if (arr[i] !== "") break;

    i--;
  }

  return i < 0 ? 0 : arr[i].length;
};
