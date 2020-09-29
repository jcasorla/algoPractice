/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let node = root;
    function helper(node){
        if(!node) return 0;
        return Math.max(helper(node.left), helper(node.right)) + 1;
        
        
    }
    return helper(node);
};