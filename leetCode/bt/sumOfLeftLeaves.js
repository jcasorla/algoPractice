/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/sum-of-left-leaves/submissions/
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;

  function recurse(node, isLeft) {
    if (!node) return 0;
    recurse(node.left, true);

    if (!node.left && !node.right && isLeft) {
      sum += node.val;
    }

    recurse(node.right, false);
  }
  recurse(root, false);
  return sum;
};

var sumOfLeftLeaves = function (root) {
  var sum = 0;
  function isLeaf(node) {
    if (node === null) return 0;
    if (!node.left && !node.right) return node.val;
    let leftLeave = isLeaf(node.left);
    if (leftLeave) {
      sum += leftLeave;
    }
    isLeaf(node.right);
  }
  isLeaf(root);
  return sum;
};

var sumOfLeftLeaves = function (root) {
  if (!root || (!root.left && !root.right)) {
    return 0;
  }

  let sum = 0;

  let queue = [];

  queue.unshift(root);

  while (queue.length) {
    const node = queue.pop();

    if (node.left) {
      const nodeLeft = node.left;

      if (!nodeLeft.left && !nodeLeft.right) {
        sum += nodeLeft.val;
      } else {
        queue.unshift(nodeLeft);
      }
    }

    if (node.right) {
      queue.unshift(node.right);
    }
  }

  return sum;
};

var sumOfLeftLeaves = function (root) {
  return dfs(root, false);

  function dfs(node, isLeft) {
    if (node == null) return 0;

    if (node.left == null && node.right == null && isLeft) {
      return node.val;
    }

    const left = dfs(node.left, true);
    const right = dfs(node.right, false);

    return left + right;
  }
};
