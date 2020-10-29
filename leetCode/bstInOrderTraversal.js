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
 * @return {number[]}
 */

 //recursive
var inorderTraversal = function(root) {
    let data= []
    function traverse(node){
        if(node===null) return null
        if(node.left) traverse(node.left)
        data.push(node.val)
        if(node.right) traverse(node.right)
    }
    traverse(root)
    return data
};

// iterative
var inorderTraversal = function(root) {
    let data= []
    let stack = []
    if(root===null) return data
    let current = root
    while(current!==null || stack.length){
        while(current!==null){
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        data.push(current.val)
        current = current.right
    }
    return data
};

// solution java

// class Solution {
//     public List < Integer > inorderTraversal(TreeNode root) {
//         List < Integer > res = new ArrayList < > ();
//         helper(root, res);
//         return res;
//     }

//     public void helper(TreeNode root, List < Integer > res) {
//         if (root != null) {
//             if (root.left != null) {
//                 helper(root.left, res);
//             }
//             res.add(root.val);
//             if (root.right != null) {
//                 helper(root.right, res);
//             }
//         }
//     }
// }

// public class Solution {
//     public List < Integer > inorderTraversal(TreeNode root) {
//         List < Integer > res = new ArrayList < > ();
//         Stack < TreeNode > stack = new Stack < > ();
//         TreeNode curr = root;
//         while (curr != null || !stack.isEmpty()) {
//             while (curr != null) {
//                 stack.push(curr);
//                 curr = curr.left;
//             }
//             curr = stack.pop();
//             res.add(curr.val);
//             curr = curr.right;
//         }
//         return res;
//     }
// }