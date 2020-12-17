//dado un arreglo de numeros encuentra el arreglo mas pequeno = greatest sum
//mas grande 	que el numero dado

//
//	  	0 1 2 3 4 5
//arr: [1,2,3,3,2,1], num: 6
//      x
//                x
//sublen = j - i : 5
//runningSum: 12
//if runningSum > num && longestLength > sublen
//sum =  9, 11 , 12
//longestLength = sublen: 3 , 4, 5

//[9,1,2,3,3,2,1]
// x
// x
//runningSum: 0
//sum = 0;

//cadance algo

// function shorttestSubArraywithLargestSum(arr, target) {
//   const len = arr.length;
//   const res = [];
//   //O(N)2
//   for (let i = 0; i < len; i++) {
//     let sum = arr[i];
//     if (sum > target) {
//       res.push([sum, 1]);
//     }
//     for (let j = i + 1; j < len; j++) {
//       const sublen = j - i + 1;
//       sum += arr[j];

//       if (sum > target) {
//         res.push([sum, sublen]);
//       }
//     }
//   }
//   let max = -Infinity;
//   for (let i = 0; i < res.length; i++) {
//     if (res[i][0] > max) max = res[i][0];
//   }

//   return res;
// }

//https://www.geeksforgeeks.org/minimum-length-subarray-sum-greater-given-value/
function shorttestSubArraywithLargestSum(arr, target) {
  const len = arr.length;
  let minlen = arr.length + 1;
  //O(N)2 | O(1)
  for (let i = 0; i < len; i++) {
    let sum = arr[i];
    if (sum > target) {
      return 1;
    }
    for (let j = i + 1; j < len; j++) {
      sum += arr[j];

      if (sum > target && j - i + 1 < minlen) {
        minlen = j - i + 1;
      }
    }
  }

  return minlen;
}

console.log(shorttestSubArraywithLargestSum([1, 3, 9, 5, 1], 6));
console.log(shorttestSubArraywithLargestSum([1, 3, 9, 5, 1], 9));
console.log(shorttestSubArraywithLargestSum([1, 1, 2, 3, 1], 9));
