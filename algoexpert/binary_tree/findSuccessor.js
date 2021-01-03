//https://www.algoexpert.io/questions/Find%20Successor
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

//0(N) | 0(N)
// function findSuccessor(tree, node) {
//   const res = [];

//   function inOrder(cur) {
//     if (!cur) return;
//     inOrder(cur.left);
//     res.push(cur);
//     inOrder(cur.right);
//   }
//   inOrder(tree);

//   for (let i = 0; i < res.length; i++) {
//     const num = res[i];
//     if (num.value === node.value) {
//       return res[i + 1];
//     }
//   }
//   return null;
// }

//0(H) | 0(1) - h is the height of the tree
function findSuccessor(tree, node) {
  if (node.right) return getLeftMostChild(node.right);
  return getRightMostParent(node);
}

function getLeftMostChild(node) {
  let cur = node;

  while (cur.left) {
    cur = cur.left;
  }

  return cur;
}

function getRightMostParent(node) {
  let cur = node;

  while (cur.parent && cur.parent.right === cur) {
    cur = cur.parent;
  }
  return cur.parent;
}
