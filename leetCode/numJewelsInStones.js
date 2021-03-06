/**
 * https://leetcode.com/problems/jewels-and-stones/
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

 

Constraints:

    1 <= jewels.length, stones.length <= 50
    jewels and stones consist of only English letters.
    All the characters of jewels are unique.


 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

//0(n+m) |0(c)
var numJewelsInStones = function (jewels, stones) {
  const map = {};

  for (let ch of jewels) {
    map[ch] = 0;
  }

  for (let ch of stones) {
    if (ch in map) {
      map[ch]++;
    }
  }

  let sum = 0;
  for (const key in map) {
    const val = map[key];
    sum += val;
  }
  return sum;
};

//other solutions
// O(N + M) time complexity
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  let ht = {};

  for (let i = 0; i < stones.length; i++) {
    ht[stones[i]] ? ht[stones[i]]++ : (ht[stones[i]] = 1);
  }

  for (let j = 0; j < jewels.length; j++) {
    if (ht[jewels[j]]) {
      count += ht[jewels[j]];
    }
  }

  return count;
};

const numJewelsInStones = (jewels, stones) =>
  stones.split("").filter((s) => jewels.split("").includes(s)).length;

var numJewelsInStones = function (jewels, stones) {
  const jewelSplit = jewels.split("");
  let count = 0;
  jewelSplit.forEach((jewel) => {
    count += (stones.match(new RegExp(jewel, "g")) || []).length;
  });
  return count;
};
