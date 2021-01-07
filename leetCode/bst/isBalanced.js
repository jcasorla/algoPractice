//https://leetcode.com/problems/balanced-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function (root) {
  let maxDiff = 0;

  getHeightDiff(root);

  return maxDiff <= 1;

  function getHeightDiff(node) {
    // base case
    if (node == null) return 0;

    const leftHeight = getHeightDiff(node.left);
    const rightHeight = getHeightDiff(node.right);

    maxDiff = Math.max(maxDiff, Math.abs(leftHeight - rightHeight));

    return Math.max(leftHeight, rightHeight) + 1;
  }
};

var isBalanced = function (root) {
  // if root is null then tree is  height balanced
  if (!root) return true;

  // use helper recursive function
  const helper = (node) => {
    if (!node) return 0;

    // check left subtree
    const leftLength = helper(node.left);
    if (leftLength === false) return false;
    // check right subtree
    const rightLength = helper(node.right);
    if (rightLength === false) return false;

    // if left subtree & right subtree is not balanced, return false;
    if (Math.abs(leftLength - rightLength) > 1) return false;
    // else, return height including current node
    return 1 + Math.max(leftLength, rightLength);
  };
  // invoke helper function; if false is returned then tree is not balanced, otherwise it is balanced
  return helper(root) !== false;
};
