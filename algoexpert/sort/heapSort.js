//https://www.algoexpert.io/questions/Heap%20Sort
//0(Nlog(N)) | 0(1)
function heapSort(array) {
  buildMaxHeap(array);
  for (let end = array.length - 1; end > 0; end--) {
    swap(0, end, array);
    siftDown(0, end - 1, array);
  }
  return array;
}

function buildMaxHeap(arr) {
  const firstParentIdx = Math.floor((arr.length - 2) / 2);
  for (let cur = firstParentIdx; cur >= 0; cur--) {
    siftDown(cur, arr.length - 1, arr);
  }
}

function siftDown(cur, end, heap) {
  let childOneIdx = cur * 2 + 1;
  while (childOneIdx <= end) {
    const childTwoIdx = cur * 2 + 2 <= end ? cur * 2 + 2 : -1;
    let idxToSwap;
    if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }

    if (heap[idxToSwap] > heap[cur]) {
      swap(cur, idxToSwap, heap);
      cur = idxToSwap;
      childOneIdx = cur * 2 + 1;
    } else {
      return;
    }
  }
}

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
