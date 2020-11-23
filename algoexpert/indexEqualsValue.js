//https://www.algoexpert.io/questions/Index%20Equals%20Value

//O(N)| O(1)
// function indexEqualsValue(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (i === array[i]) {
//       return i;
//     }
//   }
//   return -1;
// }

//O(log(N)) | O(1) -- binarysearch variant
function indexEqualsValue(array) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (leftIdx <= rightIdx) {
    const middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
    const middleVal = array[middleIdx];

    if (middleVal < middleIdx) {
      leftIdx = middleIdx + 1;
    } else if (middleVal === middleIdx && middleIdx === 0) {
      return middleIdx;
    } else if (
      middleVal === middleIdx &&
      array[middleIdx - 1] < middleIdx - 1
    ) {
      return middleIdx;
    } else {
      rightIdx = middleIdx - 1;
    }
  }

  return -1;
}

console.log(indexEqualsValue([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //-1
console.log(indexEqualsValue([-12, 1, 2, 3, 12]));
