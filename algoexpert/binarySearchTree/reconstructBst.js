//https://www.algoexpert.io/questions/Reconstruct%20BST

// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
//solution 1: 0(n^2) | 0(n)

// function reconstructBst(preOrderTraversalValues) {
//   if (preOrderTraversalValues.length === 0) return null;

//   const root = preOrderTraversalValues[0];
//   let rightSubTreeIdx = preOrderTraversalValues.length;

//   for (let i = 1; i < preOrderTraversalValues.length; i++) {
//     const val = preOrderTraversalValues[i];
//     if (val >= root) {
//       rightSubTreeIdx = i;
//       break;
//     }
//   }

//   const leftTree = reconstructBst(
//     preOrderTraversalValues.slice(1, rightSubTreeIdx)
//   );
//   const rightTree = reconstructBst(
//     preOrderTraversalValues.slice(rightSubTreeIdx)
//   );
//   return new BST(root, leftTree, rightTree);
// }

//solution 2: 0(n) |0(h)
class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}
function reconstructBst(preOrderTraversalValues) {
  const treeInfo = new TreeInfo(0);
  return reconstructBstFromRange(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
}

function reconstructBstFromRange(
  lowerBound,
  upperBound,
  preOrderTraversalValues,
  currentSubtreeInfo
) {
  if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length)
    return null;

  const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) return null;

  currentSubtreeInfo.rootIdx++;
  const leftSubtree = reconstructBstFromRange(
    lowerBound,
    rootValue,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  const rightSubtree = reconstructBstFromRange(
    rootValue,
    upperBound,
    preOrderTraversalValues,
    currentSubtreeInfo
  );
  return new BST(rootValue, leftSubtree, rightSubtree);
}
