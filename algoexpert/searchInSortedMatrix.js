//O(n+m) | O(1)
// function searchInSortedMatrix(matrix, target) {
//   let row = 0;
//   let col = matrix[0].length - 1;

//   while (row < matrix.length && col >= 0) {
//     if (matrix[row][col] > target) {
//       col--;
//     } else if (matrix[row][col] < target) {
//       row++;
//     } else {
//       return [row, col];
//     }
//   }

//   return [-1, -1];
// }

//O(logN) | O(1) passes 13 of 18 cases
function searchInSortedMatrix(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let left = 0;

  let right = rows * cols - 1;
  //   let midpoint = Math.floor(left + (right - left) / 2);
  //   console.log(midpoint);
  //   console.log(cols);

  //   console.log(Math.floor(midpoint / cols));
  //   console.log(Math.floor(midpoint % cols));

  while (left <= right) {
    let midpoint = Math.floor(left + (right - left) / 2);
    midElement =
      matrix[Math.floor(midpoint / cols)][Math.floor(midpoint % cols)];

    if (midElement === target) {
      return [Math.floor(midpoint / cols), Math.floor(midpoint % cols)];
    } else if (target < midElement) {
      right = midpoint - 1;
    } else if (target > midElement) {
      left = midpoint + 1;
    }
  }
  return [-1, -1];
}

//[3,3]
console.log(
  searchInSortedMatrix(
    [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004],
    ],
    44
  )
);

//[0,0]
console.log(
  searchInSortedMatrix(
    [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004],
    ],
    1
  )
);

//[-1,-1]
console.log(
  searchInSortedMatrix(
    [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004],
    ],
    43
  )
);
