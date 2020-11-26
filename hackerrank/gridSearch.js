/**
 * 
 * https://www.hackerrank.com/challenges/the-grid-search/problem
 *
 *
x    x 
1234567890  
0987654321  
1111111111  
1111111111  
2222222222

876543  
111111  
111111
 */

//passes all cases
// function gridSearch(G, P) {
//   let rowStart = 0;
//   let colStart = 0;
//   let rowEnd = P.length;
//   let colEnd = P[0].length;
//   let pColEnd = G[0].length;
//   let pRowEnd = G.length;
//   while (rowEnd <= pRowEnd) {
//     colStart = 0;
//     colEnd = P[0].length;
//     while (colEnd <= pColEnd) {
//       if (searchMatrix(colStart, colEnd, rowStart, rowEnd, G, P)) return "YES";

//       colStart++;
//       colEnd++;
//     }
//     rowStart++;
//     rowEnd++;
//   }
//   return "NO";
// }

// function searchMatrix(colStart, colEnd, rowStart, rowEnd, G, P) {
//   let idx = 0;
//   for (let i = rowStart; i < rowEnd; i++) {
//     let jdx = 0;
//     for (let j = colStart; j < colEnd; j++) {
//       if (G[i][j] !== P[idx][jdx]) return false;
//       jdx++;
//     }
//     idx++;
//   }
//   return true;
// }

//better solution
//update it did not pass 5th case but no it passes
function gridSearch(G, P) {
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = P.length;
  let colEnd = P[0].length;
  let pColEnd = G[0].length;
  let pRowEnd = G.length;
  while (rowEnd <= pRowEnd) {
    colStart = 0;
    colEnd = P[0].length;
    while (colEnd <= pColEnd) {
      if (searchMatrix(colStart, colEnd, rowStart, rowEnd, G, P)) return "YES";
      colStart++;
      colEnd++;
    }
    rowStart++;
    rowEnd++;
  }
  return "NO";
}
function searchMatrix(colStart, colEnd, rowStart, rowEnd, G, P) {
  let idx = 0;
  for (let i = rowStart; i < rowEnd; i++) {
    let arr = G[i].slice(colStart, colEnd);
    arr = arr.join("");
    let comp = P[idx];
    comp = comp.join("");
    // console.log(comp);
    // console.log(arr);
    if (comp !== arr) return false;
    idx++;
  }
  return true;
}

const G = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

const P = [
  [8, 7, 6, 5, 4, 3],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

console.log(gridSearch(G, P));

//https://www.hackerrank.com/challenges/the-grid-search/forum/comments/821775
// function gridSearch(G, P) {
//   for (const [rIndex, row] of G.entries()) {
//     if (G.length - rIndex < P.length) break;
//     for (const [cIndex, col] of [...row].entries()) {
//       if (G[0].length - cIndex < P[0].length) break;
//       if (col != P[0][0]) continue;
//       if (compare(G, P, rIndex, cIndex)) return "YES";
//     }
//   }
//   return "NO";
// }

// function compare(G, P, r, c) {
//   for (const [rIndex, row] of P.entries()) {
//     for (const [cIndex, col] of [...row].entries()) {
//       if (col != G[r + rIndex][c + cIndex]) return false;
//     }
//   }
//   return true;
// }

//other soultion where fails 5th case:
//https://github.com/Ashishg251/HackerrANK_code/blob/master/the_grid_search.js
