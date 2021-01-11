// /**
// const array = [
//      0  1  2   3
//   0 [1, 3, 4, 10],
//   1 [2, 5, 9, 11],
//   2 [6, 8, 12, 15],
//   3 [7, 13, 14, 16],//13

//   1 3 4
//   2 5 8
//   6 7 9
//  ];
// 	//[0][0] row+1
//   cols = array[0].length;
//   rows = array.length
//   col =0
//   row = 0

//   while(row < rows && col < cols)
//     array[row][col-1] === null row+1 // edge case if array[row+1][col--] === null col++
//     while(array[row-1][col])//[1][0] ->[0][1] ->[-1][2]
//       row--, col++
//     if(col+1 >= cols) row++
//     else col++

//     while(array[row][col-1])//[0][2] =>[1][1] =>[2][0] ->[3][-1]
//       row++, col--

// */

// function zigzagTraverse(array) {
//   const res =[];
//   const cols = array[0].length;
//   const rows = array.length;
//   let col =0;
//   let row = 0;

//     while(row < rows && col < cols){
//       array[row][col-1] === null row+1 // edge case if array[row+1][col--] === null col++ // maybe format
//       if(col-1 < 0) row+1
//       else col++
//       while(array[row-1][col])//[1][0] ->[0][1] ->[-1][2]
//         row--, col++
//       if(col+1 >= cols) row++
//       else col++

//       while(array[row][col-1])//[0][2] =>[1][1] =>[2][0] ->[3][-1]
//         row++, col--
//     }

//   return res;
// }

// const array = [
//   [1, 3, 4, 10],
//   [2, 5, 9, 11],
//   [6, 8, 12, 15],
//   [7, 13, 14, 16],
// ];

// console.log(zigzagTraverse(array))

//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

//original
// function zigzagTraverse(array) {
//   const res = [];
//   const cols = array[0].length;
//   const rows = array.length;
//   let col = 0;
//   let row = 0;

//   while (row !== rows && col !== cols) {
//     if (row === rows) row--;
//     res.push(array[row][col]);
//     if (col - 1 < 0) {
//       row++;
//     } else if (row + 1 >= rows || row >= rows) {
//       col++;
//     }
//     while (row - 1 >= 0) {
//       res.push(array[row][col]);
//       row--, col++;
//     }
//     res.push(array[row][col]);
//     if (col + 1 >= cols) row++;
//     else col++;

//     while (col - 1 >= 0) {
//       res.push(array[row][col]);

//       row++;
//       col--;
//     }
//   }

//   return res;
// }

// const array = [
//   [1, 3, 4, 10],
//   [2, 5, 9, 11],
//   [6, 8, 12, 15],
//   [7, 13, 14, 16],
// ];

// expect: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
//outcome: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log(zigzagTraverse(array));

//revise later
// function zigzagTraverse(array) {
//   const res = [];
//   const cols = array[0].length;
//   const rows = array.length;
//   let col = 0;
//   let row = 0;
//   //statements en ubicacion correcto

//   while (row !== rows && col !== cols) {
//     if (row === rows) row--;
//     res.push(array[row][col]);
//     console.log(col - 1);
//     if (col - 1 < 0) {
//       row++;
//     } else if (row + 1 >= rows || row >= rows) {
//       col++;
//     }
//     while (row - 1 >= 0) {
//       res.push(array[row][col]);
//       row--, col++;
//       console.log(row + " " + col);
//     }
//     res.push(array[row][col]);
//     if (col + 1 >= cols) row++;
//     else col++;
//     console.log(array[row][col]);

//     while (col - 1 >= 0) {
//       console.log(row + " " + col);
//       res.push(array[row][col]);

//       row++;
//       col--;
//     }
//     console.log(row + " " + col);
//   }

//   return res;
// }

// const array = [
//   [1, 3, 4, 10],
//   [2, 5, 9, 11],
//   [6, 8, 12, 15],
//   [7, 13, 14, 16],
// ];

// //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
// console.log(zigzagTraverse(array));

//algoexpert
// 0(N) | 0(N)
function zigzagTraverse(array) {
  const res = [];
  const rows = array.length - 1;
  const cols = array[0].length - 1;

  let row = 0,
    col = 0;
  let goingDown = true;

  while (!isOutOfBounds(row, col, rows, cols)) {
    res.push(array[row][col]);
    if (goingDown) {
      if (col === 0 || row === rows) {
        goingDown = false;
        if (row === rows) col++;
        else row++;
      } else {
        row++;
        col--;
      }
    } else {
      if (row === 0 || col === cols) {
        goingDown = true;
        if (col === cols) row++;
        else col++;
      } else {
        row--;
        col++;
      }
    }
  }
  return res;
}

function isOutOfBounds(row, col, rows, cols) {
  return row < 0 || row > rows || col < 0 || col > cols;
}

const array = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16],
];

//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
console.log(zigzagTraverse(array));
