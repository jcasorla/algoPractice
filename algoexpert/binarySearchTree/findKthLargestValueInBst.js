//https://www.algoexpert.io/questions/Find%20Kth%20Largest%20Value%20In%20BST

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// solution 1
//0(n) | 0(n)
// function findKthLargestValueInBst(tree, k) {
//   const array = [];
//   function helper(node = tree) {
//     if (!node) return;
//     helper(node.left);
//     array.push(node.value);
//     helper(node.right);
//   }
//   helper(tree);

//   return array[array.length - k];
// }

// solution 2: more optimal
// 0(h+k) | 0(h)
class TreeInfo {
  constructor(numberOfNodesVisited, latestVisitedNodeValue) {
    this.numberOfNodesVisited = numberOfNodesVisited;
    this.latestVisitedNodeValue = latestVisitedNodeValue;
  }
}
function findKthLargestValueInBst(tree, k) {
  const treeInfo = new TreeInfo(0, -1);
  reverseInOrderTraverse(tree, k, treeInfo);
  return treeInfo.latestVisitedNodeValue;
}
function reverseInOrderTraverse(node, k, treeInfo) {
  if (!node || treeInfo.numberOfNodesVisited >= k) return;

  reverseInOrderTraverse(node.right, k, treeInfo);
  if (treeInfo.numberOfNodesVisited < k) {
    treeInfo.numberOfNodesVisited++;
    treeInfo.latestVisitedNodeValue = node.value;
    reverseInOrderTraverse(node.left, k, treeInfo);
  }
}
