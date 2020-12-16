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

function shorttestSubArraywithLargestSum(arr, target) {
  let p1 = 0;
  let p2 = 0;
  let len = arr.length;
  let globalSum = 0;
  let sum = 0;
  let res = { 0: 0 };
  while (p1 < len) {
    p2;
  }
}
