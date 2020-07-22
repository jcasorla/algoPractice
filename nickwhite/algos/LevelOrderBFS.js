
// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let node = root;
    let queue = [node];
    let res = [];
    
    while(queue.length >0){        
        let current = queue.pop();
        res.push(current.val);
        if(current.left) queue.unshift(current.left);
        if(current.right) queue.unshift(current.right);
        
    }
    
    return res;
    
};

function levelOrder(root) {
    let home = []
    let level = 0
    let delivery = [root]
    
    if(root === null) return home 
    
    while(delivery.length !== 0) {
        home.push([])
        let num = delivery.length
        for(let i=0; i<num; i++) {
            let pizza = delivery.pop()
            home[level].push(pizza.val)
            if(pizza.left !== null) delivery.unshift(pizza.left)
            if(pizza.right !== null) delivery.unshift(pizza.right)    
        }
        level++
    }
    
    return home
}