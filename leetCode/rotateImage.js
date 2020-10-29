/**
 * 
 * https://leetcode.com/problems/rotate-image/discuss/883831/Javascript-or-Transpose-or-Simple
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = i; j < matrix[0].length; j++) {
            console.log('[' + i + ' ' + j +']')
            console.log(matrix[i][j]);
            console.log('[' + j + ' ' + i +']')
            console.log(matrix[j][i]);
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            console.log(matrix[i][j]);
            console.log(matrix[j][i]);
        }
    }
    
    matrix.forEach(row => {
        row.reverse()
    });

    return matrix;
};

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))