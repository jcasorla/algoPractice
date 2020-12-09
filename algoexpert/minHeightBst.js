class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

//my initial solution passes 8 of 17 cases
// function minHeightBst(array) {
//   let len = array.length;
//   let mid = Math.floor(len / 2);
//   let midElement = array[mid];
//   const bst = new BST(midElement);
//   if (array[1]) bst.insert(array[1]);
//   if (array[2]) bst.insert(array[0]);
//   for (let i = 2; i < mid; i++) {
//     bst.insert(array[i]);
//   }
//   if (array[mid + 2]) bst.insert(array[mid + 2]);
//   if (array[mid + 1]) bst.insert(array[mid + 1]);
//   for (let i = mid + 3; i < len; i++) {
//     bst.insert(array[i]);
//   }
//   return bst;
// }

// //0(nlog(n)) | 0(N)
// function minHeightBst(array) {
//   return constructMinHBST(array, null, 0, array.length - 1);
// }

// function constructMinHBST(arr, bst, startIdx, endIdx) {
//   if (endIdx < startIdx) return;

//   const midIdx = Math.floor(startIdx + (endIdx - startIdx) / 2);
//   const valueToAdd = arr[midIdx];

//   if (!bst) {
//     bst = new BST(valueToAdd);
//   } else {
//     bst.insert(valueToAdd);
//   }
//   constructMinHBST(arr, bst, startIdx, midIdx - 1);
//   constructMinHBST(arr, bst, midIdx + 1, endIdx);
//   return bst;
// }

// // O(n) | 0(n) space
function minHeightBst(array) {
  return constructMinHBST(array, null, 0, array.length - 1);
}
function constructMinHBST(arr, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;

  const midIdx = Math.floor(startIdx + (endIdx - startIdx) / 2);
  const node = new BST(arr[midIdx]);

  if (!bst) {
    bst = node;
  } else {
    if (arr[midIdx] < bst.value) {
      bst.left = node;
      bst = bst.left;
    } else {
      bst.right = node;
      bst = bst.right;
    }
  }
  constructMinHBST(arr, bst, startIdx, midIdx - 1);
  constructMinHBST(arr, bst, midIdx + 1, endIdx);
  return bst;
}

console.log(minHeightBst([1, 2, 3, 4, 5, 6, 7]));

// function minHeightBst(array) {
//   return constructMinHBST(array, 0, array.length - 1);
// }
// function constructMinHBST(arr, startIdx, endIdx) {
//   if (endIdx < startIdx) return null;

//   const midIdx = Math.floor(startIdx + (endIdx - startIdx) / 2);
//   const bst = new BST(arr[midIdx]);

//   bst.left = constructMinHBST(arr, startIdx, midIdx - 1);
//   bst.right = constructMinHBST(arr, midIdx + 1, endIdx);
//   return bst;
// }

//expirament
function minHeightBst(array) {
  let len = array.length;
  let left = 0;
  let right = len - 1;
  let m = Math.floor(left + (right - left) / 2);
  const bst = new BST(array[m]);
  leftHalf(array, left, m);
  rightHalf(array, m + 1, right);

  return bst;
}
function leftHalf(arr, left, right) {
  while (left < right) {
    const midIdx = Math.floor(left + (right - left) / 2);
    bst.insert(arr[midIdx]);
    //call left
    //call right
  }
}
function rightHalf(arr, left, right) {
  while (left + 1 <= right) {
    const midIdx = Math.floor(left + (right - left) / 2);
    bst.insert(arr[midIdx]);
    //call left
    //call right
  }
}
