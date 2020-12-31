//https://www.algoexpert.io/questions/Right%20Smaller%20Than
// 0(N)2 | 0(N)
function rightSmallerThan(array) {
  const res = [];

  for (let i = 0; i < array.length; i++) {
    const num1 = array[i];
    res.push(0);
    const len = res.length;
    for (let j = i + 1; j < array.length; j++) {
      const num2 = array[j];
      if (num1 > num2) {
        res[len - 1]++;
      }
    }
  }
  return res;
}

//0(nlog(n)) | 0(n)
//worst 0(N^2) | 0(N)

function rightSmallerThan(array) {
  if (array.length === 0) return [];
  const lastIdx = array.length - 1;
  const bst = new SpecialBST(array[lastIdx], lastIdx, 0);
  for (let i = array.length - 2; i >= 0; i--) {
    bst.insert(array[i], i);
  }
  const rightSmallerCounts = array.slice();
  getRightSmallerCounts(bst, rightSmallerCounts);
  return rightSmallerCounts;
}

function getRightSmallerCounts(bst, rightSmallerCounts) {
  if (!bst) return;

  rightSmallerCounts[bst.idx] = bst.numSmallerAtInsertTime;
  getRightSmallerCounts(bst.left, rightSmallerCounts);
  getRightSmallerCounts(bst.right, rightSmallerCounts);
}

class SpecialBST {
  constructor(value, idx, numSmallerAtInsertTime) {
    this.value = value;
    this.idx = idx;
    this.numSmallerAtInsertTime = numSmallerAtInsertTime;
    this.leftSubTreeSize = 0;
    this.left = null;
    this.right = null;
  }

  insert(value, idx, numSmallerAtInsertTime) {
    if (value < this.value) {
      this.leftSubTreeSize++;
      if (!this.left) {
        this.left = new SpecialBST(value, idx, numSmallerAtInsertTime);
      } else {
        this.left.insert(value, idx, numSmallerAtInsertTime);
      }
    } else {
      numSmallerAtInsertTime += this.leftSubTreeSize;
      if (value > this.value) numSmallerAtInsertTime++;
      if (!this.right) {
        this.right = new SpecialBST(value, idx, numSmallerAtInsertTime);
      } else {
        this.right.insert(value, idx, numSmallerAtInsertTime);
      }
    }
  }
}
