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
    if(!root) return [];
    const queue = [root];
    let res = [[root.val]];
    
    while(queue.length >=0){
        let node = queue.pop();
        if(!node) break;
        console.log(node.val)
        if(node.left && node.right) res.push([node.left.val,node.right.val]);
        else if (node.left && node.right) res.push([node.right.val]);
        else if(node.left && !node.right) res.push([node.left.val]);
        if(node.left) queue.unshift(node.left);
        if(node.right) queue.unshift(node.right);
    }
    return res;
    
};

var levelOrder = function(root) {
    // sanity check
    if(!root) return [];
    const result = [];
    const queue = [];
    
    queue.push([root, 0]);
    
    while(queue.length) {
        // gen stands for generation
        const [node, gen] = queue.shift();
        if(!result[gen]) result[gen] = [node.val];
        else result[gen].push(node.val);
        
        if(node.left) queue.push([node.left, gen+1]);
        if(node.right) queue.push([node.right, gen+1]);
    }
    return result;
};