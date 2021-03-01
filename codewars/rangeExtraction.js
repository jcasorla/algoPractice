/**
 * https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
 * A format for expressing an ordered list of integers is to use a comma separated list of either

    individual integers
    or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
 */

//0(n) | 0(n)
function solution(list) {
  let res = "";

  for (let i = 0; i < list.length; i++) {
    let j = i + 1;
    if (list[j] - list[i] !== 1) {
      res += list[i] + ",";
    } else {
      let count = 0;
      while (parseInt(list[j]) - parseInt(list[j - 1]) === 1) {
        count++;
        j++;
      }
      if (count > 1) {
        res += list[i] + "-" + list[j - 1] + ",";
      } else {
        res += list[i] + "," + list[j - 1] + ",";
      }

      i = j - 1;
    }
  }
  res = res.split("");
  res.pop();
  res = res.join("");
  return res;
}

//Test.assertEquals(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]),
