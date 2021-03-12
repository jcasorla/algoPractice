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

//0(n) |0(n)
function sortedSquaredArray(array) {
  const len = array.length;
  const sortedSquares = new Array(len).fill(0);
  let smallerValueIdx = 0;
  let largestValueIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largestValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[i] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[i] = largerValue * largerValue;
      largestValueIdx--;
    }
  }
  return sortedSquares;
}
