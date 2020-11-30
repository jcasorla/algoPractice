//https://www.algoexpert.io/questions/Max%20Subset%20Sum%20No%20Adjacent
//O(N) | O(N)

// function maxSubsetSumNoAdjacent(array) {
//   if (!array.length) return 0;
//   if (array.length === 1) return array[0];
//   const maxSums = array;
//   console.log(maxSums);
//   maxSums[1] = Math.max(array[0], array[1]);

//   for (let i = 2; i < array.length; i++) {
//     maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
//   }
//   return maxSums[maxSums.length - 1];
// }

//O(N) | O(1)
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  let second = array[0];
  let first = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    const cur = Math.max(first, second + array[i]);
    second = first;
    first = cur;
  }
  return first;
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])); //330
