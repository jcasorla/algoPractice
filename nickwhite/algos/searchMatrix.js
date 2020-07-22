// https://leetcode.com/problems/search-a-2d-matrix/

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Example 1:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false

function searchMatrix(matrix,target){
    if(matrix.length ===0) return false;

    let rows = matrix.length;
    let columns = matrix[0].length;

    let left=0;
    let right = rows * columns -1;

    while(left <= right){
        let midpoint = Math.floor(left + (right-left) / 2);
        // console.log(Math.floor(midpoint/columns) + ' ' + midpoint% columns);
        let mid_element = matrix[Math.floor(midpoint/columns)][Math.floor(midpoint%columns)];
        // console.log(mid_element);
        if(mid_element === target){
            return true;
        }else if(target < mid_element){
            right = midpoint -1;
        }else if(target > mid_element){
            left = midpoint+1;
        }        
    }
    return false;
}

const matrix =[
    [1,3,5,7],
    [10,11,16,20], 
    [23,30,34,50]
];

console.log(searchMatrix(matrix,2));
