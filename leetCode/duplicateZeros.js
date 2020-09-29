/**
 * https://leetcode.com/problems/duplicate-zeros
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    
    for(let i =0; i<arr.length; i++){
        if (arr == null || arr.length == 0) return;
        if(arr[i] === 0){
            for (let j = arr.length - 1; j > i; j--) {
                arr[j] = arr[j-1];
            }
            i++; // we don't want to traverse over the duplicate zero
        }    
    }    
    
};


// s = 0
// d = 0

// # Copy is performed until the destination array is full.
// for s in range(N):
//   if source[s] == 0:
//     # Copy zero twice.
//     destination[d] = 0
//     d += 1
//     destination[d] = 0
//   else:
//     destination[d] = source[s]

//   d += 1