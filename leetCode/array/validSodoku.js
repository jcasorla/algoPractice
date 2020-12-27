//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

//my solution does not pass all testcases
function isValidSudoku(board) {
  const rows = board.length;
  const cols = board[0].length;

  const corners = [
    [0, 0],
    [0, 3],
    [0, 6],
    [3, 0],
    [3, 3],
    [3, 6],
    [6, 0],
    [6, 3],
    [6, 6],
  ];

  let check = checkRowCol(board, rows, cols);
  if (check[1]) return true;
  check = check[0] === true ? true : false;
  console.log(check);

  if (!checkRowCol(board, cols, rows)) return false;
  for (let corner of corners) {
    if (!checkThree(board, corner[0], corner[1])) return false;
  }
  return true;
}

function checkThree(board, i, j) {
  let valid = false;
  const seen = {};

  for (let row = i; row < i + 3; row++) {
    for (let col = j; col < j + 3; col++) {
      const num = board[row][col];
      if (num === ".") continue;
      if (parseInt(num) >= 1 && parseInt(num) <= 9) valid = true;
      if (seen.hasOwnProperty(num)) return false;
      seen[num] = true;
    }
  }
  return valid;
}

function checkRowCol(board, rows, cols) {
  let valid;
  let empty = true;
  for (let row = 0; row < rows; row++) {
    valid = false;
    const seen = {};
    for (let col = 0; col < cols; col++) {
      const num = board[row][col];
      if (num === ".") continue;
      if (parseInt(num) >= 1 && parseInt(num) <= 9) valid = true;
      if (seen.hasOwnProperty(num)) return false;
      else {
        seen[num] = true;
        empty = false;
      }
    }
  }

  return [valid, empty];
}

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// console.log(isValidSudoku(board));

board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// console.log(isValidSudoku(board));

board = [
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];
// console.log(isValidSudoku(board));

board = [
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];
// console.log(isValidSudoku(board));

board = [
  [".", "8", "7", "6", "5", "4", "3", "2", "1"],
  ["2", ".", ".", ".", ".", ".", ".", ".", "."],
  ["3", ".", ".", ".", ".", ".", ".", ".", "."],
  ["4", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", ".", "."],
  ["6", ".", ".", ".", ".", ".", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  ["8", ".", ".", ".", ".", ".", ".", ".", "."],
  ["9", ".", ".", ".", ".", ".", ".", ".", "."],
];
console.log(isValidSudoku(board));

//other solutions:
// var isValidSudoku = function (board) {
//   for (let i = 0; i < board.length; i++) {
//     if (!checkRow(board, i)) return false;
//   }
//   for (let j = 0; j < board[0].length; j++) {
//     if (!checkColumn(board, j)) return false;
//   }

//   let corners = [
//     [0, 0],
//     [0, 3],
//     [0, 6],
//     [3, 0],
//     [3, 3],
//     [3, 6],
//     [6, 0],
//     [6, 3],
//     [6, 6],
//   ];
//   for (let corner of corners) {
//     if (!checkThree(board, corner[0], corner[1])) return false;
//   }
//   return true;
// };
// function checkThree(board, i, j) {
//   let ht = {};
//   for (let row = i; row < i + 3; row++) {
//     for (let col = j; col < j + 3; col++) {
//       let num = board[row][col];
//       if (num == ".") continue;
//       if (ht[num]) return false;
//       ht[num] = true;
//     }
//   }
//   return true;
// }
// function checkColumn(board, j) {
//   let ht = {};
//   for (let i = 0; i < board.length; i++) {
//     let num = board[i][j];
//     if (num == ".") continue;
//     if (ht.hasOwnProperty(num)) return false;
//     ht[num] = true;
//   }
//   return true;
// }
// function checkRow(board, i) {
//   let ht = {};
//   for (let j = 0; j < board[i].length; j++) {
//     let num = board[i][j];
//     if (num == ".") continue;
//     if (ht.hasOwnProperty(num)) return false;
//     ht[num] = true;
//   }
//   return true;
// }

//much better
// var isValidSudoku = function (board) {
//   const map = {}; // Map for storing our key-strings.

//   for (let i = 0; i < 9; i++) {
//     // Outer-loop for rows.
//     for (let j = 0; j < 9; j++) {
//       // Inner-loop for cols.

//       if (board[i][j] === ".") continue; // Skip checking empty spaces.

//       let num = board[i][j],
//         x = Math.floor(i / 3), // We can iterate through each box
//         y = Math.floor(j / 3); // using indices (i, j) divided by 3.

//       let err =
//         map["r" + i + num] || // Check if any of the computed
//         map["c" + j + num] || // key-strings already exist in
//         map["b" + x + y + num]; // our map object.

//       if (err) return false; // If 'err' is true, board is invalid.

//       map["r" + i + num] = 1; // Add 'row' key-string to map.
//       map["c" + j + num] = 1; // Add 'col' key-string to map.
//       map["b" + x + y + num] = 1; // Add 'box' key-string to map.
//     }
//   }

//   return true; // If no error, board is valid.
// };

//pretty good:
// I found other solutions hard to grok so I tried to use the limited nature of the Sudoku board to decrease complexity.

//     Use seperate hash maps for rows, columns & boxes
//     Instantiate each of your hash maps with keys 0 through 8 and values of an empty object. As we evaluate the board we'll use this object to keep track of known values for that particular row, column or box. Keep in mind a Sudoku board will always be 9 x 9 so we should use this to our advantage.
//     Navigate the board using nested for loops
//     At each position create/calculate a reference to the hash map for your current row, current column and current box.
//     If the board value is not empty (i.e. - ".") then we need to evaluate it
//     If the value is ALREADY in the map for your current row, current column or current box then the board is invalid and we return false
//     Otherwise the board may still be valid so add the value to the map for the current row, column and box.
//     If you iterate thorugh the entire then it's valid so return true

// I believe the time and space are both O(1) as the space does not expand due to the set nature of the boards and we iterate through the board once. If I'm incorrect leave a comment and I'll update the post.

// Hope that helps!

// var isValidSudoku = function(board) {
//     let rows ={};
//     let columns = {};
//     let boxes = {};

//     // make maps
//     for (let i = 0; i < 9; i++){
//         rows[i] = {};
//         columns[i] = {};
//         boxes[i] = {}
//     }

//     //Evaluate Sudoku
//     for(let row = 0; row < 9 ; row++){
//         let currentRow = rows[row];
//         for(let column = 0; column < 9; column++){
//             let value = board[row][column];
//             let currentColumn = columns[column];
//             let currentBox = boxes[Math.floor(row / 3) * 3 + Math.floor(column / 3)];

//             if(value !== ".") {
//                 if(currentRow[value] || currentColumn[value] || currentBox[value]){
//                     return false;
//                 } else {
//                     currentRow[value] = true;
//                     currentColumn[value] = true;
//                     currentBox[value] = true;
//                 }
//             }
//         }
//     }
//     return true;
// };

// var isValidSudoku = function (board) {
//   let rows = new Set();
//   let cols = new Set();
//   let boxes = new Set();
//   let curRowElem;
//   let curColElem;
//   let curBoxElem;

//   for (let i = 0; i < board.length; i += 1) {
//     for (let j = 0; j < board[0].length; j += 1) {
//       curRowElem = board[i][j];
//       curColElem = board[j][i];
//       curBoxElem =
//         board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
//           ((i * 3) % 9) + (j % 3)
//         ];

//       if (rows.has(curRowElem)) return false;
//       if (curRowElem !== ".") rows.add(curRowElem);

//       if (cols.has(curColElem)) return false;
//       if (curColElem !== ".") cols.add(curColElem);

//       if (boxes.has(curBoxElem)) return false;
//       if (curBoxElem !== ".") boxes.add(curBoxElem);
//     }

//     rows.clear();
//     cols.clear();
//     boxes.clear();
//   }

//   return true;
// };
