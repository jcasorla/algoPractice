//https://www.algoexpert.io/questions/Quickselect
//0(N) | 0(1)
//worst : 0(N^2) | 0(1)
function quickselect(array, k) {
  const position = k - 1;
  return quickselectHelper(array, 0, array.length - 1, position);
}

function quickselectHelper(arr, start, end, position) {
  while (true) {
    if (start > end) {
      throw new Error("Your algo should never arrive here!");
    }
    const pivot = start;
    let left = start + 1;
    let right = end;
    while (left <= right) {
      if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
        swap(left, right, arr);
      }
      if (arr[left] <= arr[pivot]) {
        left++;
      }
      if (arr[right] >= arr[pivot]) {
        right--;
      }
    }

    swap(pivot, right, arr);
    if (right === position) {
      return arr[right];
    } else if (right < position) {
      start = right + 1;
    } else {
      end = right - 1;
    }
  }
}

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
