/**
 * https://leetcode.com/problems/count-and-say/
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

    countAndSay(1) = "1"
    countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.

To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

For example, the saying and conversion for digit string "3322251":

Given a positive integer n, return the nth term of the count-and-say sequence.

 

Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.

Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

 

Constraints:

    1 <= n <= 30


 */

/**
 * @param {number} n
 * @return {string}
 */
// var countAndSay = function (n) {};

// Essentially, this problem is going through your result string, and counting the number of occurences of a single number, then your new result is

// count of Number concatenated with number we counted.

// I am pretty sure this could be done with recursion, but I'd rather not.

//solution 1:
const getCountAndNum = (arr) => {
  let count = 0,
    currNumber,
    outLoud = "";

  for (var i = 0; i <= arr.length - 1; i++) {
    let num = arr[i];

    if (currNumber !== undefined && currNumber !== num) {
      // put into outLoud
      outLoud += count + currNumber;
      count = 1;
      currNumber = num;
    } else {
      count++;
      currNumber = num;
    }
  }

  outLoud += count + currNumber;

  return outLoud;
};

const countAndSay = (n) => {
  var result;

  for (var i = 1; i <= n; i++) {
    if (i === 1) {
      result = "1";
    } else {
      result = getCountAndNum(result);
    }
  }

  return result;
};

//solution 2:
// TBH, the fastest would be count the 1,2,3 with regular expression, I feel like it's cheating, imagine in a real interview, it's basically like you have to know before hand that within 30, there could be only three cases, 1,2 and 3.

// Instead, it's easy to figure out the pattern here, you literally just count and say,
// easier to just recursive the count part then patternize the say part. why not resursive the say part, simple, because it is the final ending.

function say(str) {
  let result = "";

  let num = str[0];
  let numCount = 1;

  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === num) {
      numCount += 1;
    } else {
      result += `${numCount}${num}`;
      num = str[i];
      numCount = 1;
    }
  }

  result += `${numCount}${num}`;

  return result;
}

var countAndSay = function (n) {
  if (n === 1) return "1";
  const count = countAndSay(n - 1);
  const result = say(count);
  return result;
};

//solution 3:
function countAndSay(n: number): string {
  if (n === 1) {
    return "1";
  }

  const prevStr: string = countAndSay(n - 1);

  let currStr: string = "";
  let currIdx: number = 0;
  let nextIdx: number = currIdx + 1;

  while (nextIdx < prevStr.length) {
    if (prevStr[currIdx] !== prevStr[nextIdx]) {
      currStr += `${nextIdx - currIdx}${prevStr[currIdx]}`;

      currIdx = nextIdx;
    }

    nextIdx += 1;
  }

  currStr += `${nextIdx - currIdx}${prevStr[currIdx]}`;

  return currStr;
}

//solution 4:
const countAndSay = (num) => {
  if (num === 1) return "1";
  num = countAndSay(num - 1).split("");
  let result = "";

  let counter = 1;
  num.forEach((n, inx) => {
    if (n === num[inx + 1]) counter++;
    else (result += counter + n), (counter = 1);
  });

  return result;
};
