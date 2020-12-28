// https://www.algoexpert.io/questions/Same%20BSTs

function sameBsts(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
  if (arrayOne[0] !== arrayTwo[0]) return false;

  const leftOne = getSmaller(arrayOne);
  const leftTwo = getSmaller(arrayTwo);
  const rightOne = getBiggerOrEqual(arrayOne);
  const rightTwo = getBiggerOrEqual(arrayTwo);

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function getSmaller(array) {
  const smaller = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) smaller.push(array[i]);
  }
  return smaller;
}

function getBiggerOrEqual(array) {
  const biggerOrEqual = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[0]) biggerOrEqual.push(array[i]);
  }
  return biggerOrEqual;
}

//my attempts:
// function sameBsts(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
//   if (arrayOne[0] !== arrayTwo[0]) return false;
//   const map = {};

//   arrayOne.forEach((data) => {
//     if (map.hasOwnProperty(data)) {
//       map[data]++;
//     } else {
//       map[data] = 1;
//     }
//   });

//   arrayOne.forEach((data) => {
//     if (map.hasOwnProperty(data)) {
//       map[data]--;
//     } else {
//       return false;
//     }
//   });

//   for (let key in map) {
//     console.log(key + " " + map[key]);
//     if (map[key] > 0 || map[key] < 0) return false;
//     // if(map[key] ===null) return false;
//   }
//   return true;
// }

// function sameBsts(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) return false;
//   if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
//   if (arrayOne[0] !== arrayTwo[0]) return false;
//   return (
//     arrayOne.sort((a, b) => a - b).toString() ===
//     arrayTwo.sort((a, b) => a - b).toString()
//   );
// }
