/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let node = root;
    const pval = p.val;
    const qval = q.val;
    
    while(node){
        let parentVal = node.val;
        
        if(pval > parentVal && qval > parentVal){
            node = node.right;
        }else if(pval < parentVal && qval < parentVal){
            node = node.left;
        }else{
            return node;
        }
    }
    
    return null;
    
};

// class Solution {
//     public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {

//         // Value of current node or parent node.
//         int parentVal = root.val;

//         // Value of p
//         int pVal = p.val;

//         // Value of q;
//         int qVal = q.val;

//         if (pVal > parentVal && qVal > parentVal) {
//             // If both p and q are greater than parent
//             return lowestCommonAncestor(root.right, p, q);
//         } else if (pVal < parentVal && qVal < parentVal) {
//             // If both p and q are lesser than parent
//             return lowestCommonAncestor(root.left, p, q);
//         } else {
//             // We have found the split point, i.e. the LCA node.
//             return root;
//         }
//     }
// }