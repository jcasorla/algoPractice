//https://www.algoexpert.io/questions/Min%20Heap%20Construction

// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  //   0(n) | 0(1)
  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  //   0(Log(n)) | 0(1)
  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;

      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  //   0(Log(n)) | 0(1)
  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  //0(1) | 0(1)
  peek() {
    return this.heap[0];
  }

  //   0(log(n)) | 0(1)
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }
  //0(Log(N)) |0(1)
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}

const array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];
const heap = new MinHeap(array);
heap.insert(76);
console.log(heap.peek());
console.log(heap.remove());
console.log(heap.peek());
console.log(heap.remove());
console.log(heap.peek());
heap.insert(87);
console.log(heap.heap);
