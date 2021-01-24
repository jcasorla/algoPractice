//https://www.algoexpert.io/questions/Selection%20Sort
//0(N^2) | 0(1)

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i + 1;
    let smallIdx = i;
    while (j < array.length) {
      if (array[j] < array[smallIdx]) {
        smallIdx = j;
      }
      j++;
    }
    swap(array, i, smallIdx);
  }
  return array;
}
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
