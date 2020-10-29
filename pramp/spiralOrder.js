//https://www.youtube.com/watch?v=RTBNA4vDbU0&feature=emb_logo
// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]


// const spiralOrder = matrix => {  
//     if (!matrix.length || !matrix[0].length)
//         return [];

//     let startCol = 0;
//     let endCol = matrix[0].length - 1;
//     let startRow = 0;
//     let endRow = matrix.length - 1;
//     let res = [];
//     while (res.length < matrix.length *matrix[0].length) {
//         for (let i = startCol; i <= endCol; i++) {
//             res.push(matrix[startRow][i]);
//         }
//         startRow++;
//         for (let i = startRow; i <= endRow; i++) {
//             res.push(matrix[i][endCol]);
//         }
//         endCol--;
        
//             for (let i = endCol; i >= startCol; i--) {
//                 res.push(matrix[endRow][i]);
//             } 
        
//         endRow--;

//             for (let i = endRow; i >= startRow; i--) {
//                 res.push(matrix[i][startCol]);
//             }
        
//         startCol++;
//     }
    
// return res.slice(0, matrix.length * matrix[0].length);
	
// };


// /**
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// var spiralOrder = function(matrix) {
//     let startCol = 0;
//     let startRow = 0
//     let endCol = matrix.length;
//     let endRow =  matrix[0].length;
    
//     let len = endCol * endRow;
//     let res = [];
//     while(res.length < len){
//         while(startRow <= endRow){
//             res.push(matrix[startCol][startRow])
//             startRow++;
//         }
//         startCol++;
        
//         while(startCol < endCol){
//             res.push(matrix[startCol][startRow])
//             startCol++;
//         }
//         endRow--;
        
//         while(endRow >= startRow){
//             res.push(matrix[endCol][endRow])
//             endRow--;
//         }
//         endCol++;
//         while(endCol >= startCol){
//             res.push(matrix[endCol][startRow])
//             endCol--;
//         }
//     }
//     console.log(res)
//     return res;
    
// };


//my revised solution:
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length)
        return [];
    
    let startCol = 0;
    let startRow = 0
    let endRow = matrix.length - 1;
    let endCol = matrix[0].length - 1;
    
    let len = matrix.length * matrix[0].length;
    let res = [];
    while(res.length < len){
        
        for(let i = startCol; i <= endCol; i++)
            res.push(matrix[startRow][i]);
        startRow++;
        
        for(let i = startRow; i <= endRow; i++)
            res.push(matrix[i][endCol]);
        endCol--;
        
        for(let i = endCol; i >= startCol; i--)
            res.push(matrix[endRow][i]);
        endRow--;
        
        for(let i = endRow; i>=startRow; i--)
            res.push(matrix[i][startCol]);
        startCol++;
    }
    console.log(res)
    return res.slice(0, len);
    
};