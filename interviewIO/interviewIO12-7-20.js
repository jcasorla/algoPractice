/* 
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 

Example 1:
matrix = [
    0 1 2 3
 0 [1,2,3,4],
 1 [5,1,2,3],
 2 [9,5,1,2] //last
]
Output: True
1: 0,0, 1,1, 2,2
2: 0,1, 1,2, 2,3
3: 0,2, 1,3
5: 1,0, 2,1

loop through elements in matrix
matrix[row][col] !==matrix[row+1][col+1] return false
do not loop trough last row and column

return true

Example 2:
matrix = [
  [1,2],
  [2,2]
]
Output: False

matrix = [
    0 1 2 3
 0 [1,2,3,4],
 1 [5,1,2,3],
 2 [9,5,1,2] //last

*/

// let matrix = undefined;
function isToeplitz(matrix) {
  if (!matrix) {
    return false;
  }

  if (!matrix.length) {
    return true;
  }
  let rows = matrix.length; //3
  let columns = matrix[0].length; //4

  for (let row = 0; row < rows - 1; row++) {
    //0,1

    for (let col = 0; col < columns - 1; col++) {
      //0,1,2
      if (matrix[row][col] !== matrix[row + 1][col + 1]) {
        //[1,2] === [2,3]
        return false;
      }
    }
  }
  return true;
}

/*
We want to monitor a value produced from a streaming app; say one of the swap columns from vmstat. If the value exceeds a given threshold X for more than Y consecutive samples I'd like a message printed out.

The command should take standard input and be invoked as:
yourscript <column_number> <repetitions> <threshold value>

Example: vmstat 1 | yourscript 7 5 200

That means that when the value of column 7 has gone over 200 for more than 5 times in a row, print something out. My plan is to leave this running over night and check back on it in the morning.


5  4      0 554724 1698688 32809648  200    0     0  1439 3177 10347 30  1 51 18  0
5  4      0 556532 1698688 32809712  201    0     0  1304 3168 6853  31  1 58 11  0
5  4      0 517944 1698696 32809792    0    0     0  1360 3345 10589 31  1 53 15  0
6  4      0 477476 1698748 32836968  300    0     4  1459 3819 20150 39  2 42 17  0
*/

/*
*
# Given an array of integers greater than zero, find if there is a way to
# split the array in two (without reordering any elements) such that the
# numbers before the split add up to the numbers after the split. If so,
# print the two resulting arrays.
Ex:
[5, 2, 3]
 
([5], [2,3])
true

[1, 1, 3]
False

runx=2
runy=2
x++, y--
[2,2,2,2] => [[4],[4]]
   y x

runx = 5
runy = 5
[5,2,3]
 x y
 
 
*/

function splitEqual(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;
  let runP1 = arr[0]; //5
  let runP2 = arr[arr.length - 1]; //3
  //let advP1 =false;
  //let advP2 = false;
  while (p1 < p2) {
    // p1 = 0 p2 = 1

    if (runP1 === runP2) {
      p1++;
      p2--;

      runP1 += arr[p1];
      runP2 += arr[p2];
    } else if (runP1 > runP2) {
      p2--;
      runP2 += arr[p2];
    } else {
      p1++;
      runP1 += arr[p1];
    }
  }
  return runP1 === runP2 ? true : false;
}
