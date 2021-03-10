/**
 * https://www.algoexpert.io/questions/Sorted%20Squared%20Array
 * square output
 */

// 0(log(n)) | 0(n)
function sortedSquaredArray(array) {
  const len = array.length;
  const newArr = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    const cur = array[i];

    newArr[i] = cur * cur;
  }
  return newArr.sort((a, b) => a - b);
}
