/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const queue = [p, q];

  while (queue.length > 0) {
    const nodeA = queue.shift();
    const nodeB = queue.shift();
    if (!nodeA && nodeB) return false;
    if (nodeA && !nodeB) return false;
    if (!nodeA && !nodeB) continue;

    if (nodeA.val !== nodeB.val) return false;
    queue.push(nodeA.left);
    queue.push(nodeB.left);
    queue.push(nodeA.right);
    queue.push(nodeB.right);
  }
  return true;
};
