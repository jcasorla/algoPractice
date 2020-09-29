//https://leetcode.com/explore/interview/card/facebook/52/trees-and-graphs/322/

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const head = root;
    let queue = [];
    
    function traverse(root) {
        if (!root) return;

        // console.log(root.val);
        queue.push(root.val);
        
        traverse(root.left)
        traverse(root.right)
    }
    
    function change(root) {
        if (!root) return;
        
        queue.shift();
        root.right = root.left = null;
        while(queue.length) {
            const val = queue.shift();
            root.right = new TreeNode(val);
            root = root.right;
        }
    }
    
    traverse(head);
    change(root);
};