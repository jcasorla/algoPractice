// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]

// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]


function rotateImage(a) {
    // Transpose
    for(var i = 0;i<a.length;i++){
        for(var j = 0;j<i;j++){
            // Switch a[i][j] and a[j][i] 
            // With XOR swap
            a[i][j] ^= a[j][i]
            a[j][i] ^= a[i][j]
            a[i][j] ^= a[j][i]
         }
    }
    
    // Reverse columns
    for(var i in a){
        a[i] = a[i].reverse()
    }
    
    return a
}

//another way
// function rotate(matrix) {          // function statement
//     const N = matrix.length - 1;   // use a constant
//     // use arrow functions and nested map;
//     const result = matrix.map((row, i) => 
//          row.map((val, j) => matrix[N - j][i])
//     );
//     matrix.length = 0;       // hold original array reference
//     matrix.push(...result);  // Spread operator
//     return matrix;
// }