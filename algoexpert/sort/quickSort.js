function quickSort(array) {
  helper(array, 0, array.length - 1);
  return array;
}

function helper(arr, start, end) {
  if (start >= end) return;

  const pivot = start;
  let left = start + 1;
  let right = end;
  while (right >= left) {
    if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
      swap(left, right, arr);
    }
    if (arr[left] <= arr[pivot]) left++;
    if (arr[right] >= arr[pivot]) right--;
  }
  swap(pivot, right, arr);

  const leftSubSmaller = right - 1 - start - end - (right + 1);
  if (leftSubSmaller) {
    helper(arr, start, right - 1);
    helper(arr, right + 1, end);
  } else {
    helper(arr, right + 1, end);
    helper(arr, start, right - 1);
  }
}

function swap(i, j, arr) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
