//https://www.algoexpert.io/questions/Insertion%20Sort
//0(N^2) | 0(1)
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let s = i;
    while (array[s] < array[j] && j >= 0) {
      swap(array, s, j);
      (s = j), j--;
    }
  }
  return array;
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
