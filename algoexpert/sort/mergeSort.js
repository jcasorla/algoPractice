//https://www.algoexpert.io/questions/Merge%20Sort

//1st solution:
//0(Nlog(N)) | 0(Nlog(N))
// function mergeSort(array) {
//   if (array.length <= 1) return array;
//   const mid = Math.floor(array.length / 2);
//   const left = array.slice(0, mid);
//   const right = array.slice(mid);
//   return mergeSortedArrays(mergeSort(left), mergeSort(right));
// }

// function mergeSortedArrays(left, right) {
//   const sortedArray = new Array(left.length + right.length);
//   let k = 0;
//   let i = 0;
//   let j = 0;
//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       sortedArray[k++] = left[i++];
//     } else {
//       sortedArray[k++] = right[j++];
//     }
//   }
//   while (i < left.length) {
//     sortedArray[k++] = left[i++];
//   }
//   while (j < right.length) {
//     sortedArray[k++] = right[j++];
//   }
//   return sortedArray;
// }

//2nd solution:
// 0(Nlog(N)) | 0(N)
function mergeSort(array) {
  if (array.length <= 1) return array;
  const auxArr = array.slice();
  mergeSorthelper(array, 0, array.length - 1, auxArr);
  return array;
}

function mergeSorthelper(mainArr, start, end, auxArr) {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSorthelper(auxArr, start, mid, mainArr);
  mergeSorthelper(auxArr, mid + 1, end, mainArr);
  doMerge(mainArr, start, mid, end, auxArr);
}

function doMerge(mainArr, start, mid, end, auxArr) {
  let k = start;
  let i = start;
  let j = mid + 1;

  while (i <= mid && j <= end) {
    if (auxArr[i] <= auxArr[j]) {
      mainArr[k++] = auxArr[i++];
    } else {
      mainArr[k++] = auxArr[j++];
    }
  }

  while (i <= mid) {
    mainArr[k++] = auxArr[i++];
  }

  while (j <= end) {
    mainArr[k++] = auxArr[j++];
  }
}
