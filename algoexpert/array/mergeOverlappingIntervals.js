//https://www.algoexpert.io/questions/Merge%20Overlapping%20Intervals

/**
 * 
 * 
 * input
 * {
  "intervals": [
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10]
  ]

output
  [
  [1, 2],
  [3, 8],
  [9, 10]
]
}
 */

//my solution
//0(nlog(n)) | 0(n)
function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);

  let i = 0,
    j = 1,
    len = array.length;
  const res = [];

  while (j < len) {
    let curPair = array[i];
    let nextPair = array[j];

    if (curPair[1] < nextPair[0]) {
      res.push(curPair);
    } else {
      let prevPair = curPair;
      while (j < len && curPair[1] >= nextPair[0]) {
        i++, j++;
        curPair = array[i];
        nextPair = array[j];
      }
      prevPair[1] = Math.max(prevPair[1], curPair[1]);
      res.push(prevPair);
    }
    if (j === len - 1) {
      res.push(nextPair);
    }
    i++, j++;
  }

  return res;
}

//algoexpert solution
// 0(nlog(n)) | 0(n)
function mergeOverlappingIntervals(array) {
  const sortedArr = array.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];

  let curInterval = sortedArr[0];
  mergedIntervals.push(curInterval);

  for (const nextInterval of sortedArr) {
    const [_, curIntervalEnd] = curInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (curIntervalEnd >= nextIntervalStart)
      curInterval[1] = Math.max(curIntervalEnd, nextIntervalEnd);
    else {
      curInterval = nextInterval;
      mergedIntervals.push(curInterval);
    }
  }
  return mergedIntervals;
}

// console.log(
//   mergeOverlappingIntervals([
//     [1, 2],
//     [3, 5],
//     [4, 7],
//     [6, 8],
//     [9, 10],
//   ])
// );

// console.log(
//   mergeOverlappingIntervals([
//     [1, 10],
//     [10, 20],
//     [20, 30],
//     [30, 40],
//     [40, 50],
//     [50, 60],
//     [60, 70],
//     [70, 80],
//     [80, 90],
//     [90, 100],
//   ])
// );

// console.log(
//   mergeOverlappingIntervals([
//     [1, 10],
//     [11, 20],
//     [21, 30],
//     [31, 40],
//     [41, 50],
//     [51, 60],
//     [61, 70],
//     [71, 80],
//     [81, 90],
//     [91, 100],
//   ])
// );

console.log(
  mergeOverlappingIntervals([
    [1, 22],
    [-20, 30],
  ])
);
