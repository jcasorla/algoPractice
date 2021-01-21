/**
 * https://leetcode.com/problems/remove-vowels-from-a-string/submissions/
 * @param {string} s
 * @return {string}
 */
var removeVowels = function (s) {
  s = s.split("").filter((ch) => {
    if (ch !== "a" && ch !== "e" && ch !== "i" && ch !== "o" && ch !== "u") {
      return ch;
    }
  });
  return s.join("");
};
