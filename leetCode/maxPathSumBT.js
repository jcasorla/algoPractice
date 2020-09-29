//https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/422797/JavaScript-Solution-w-Explanation


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
 * @return {number}
 */

/**
    if root is neg skip it
    sum branches left and right and see which one bigger
    
    
*/
// var maxPathSum = function(root) {
//     let node = root;
//     let rootSum = node.val;
//     let left = helper(node.left);
//     let right = helper(node.right);
    
//     if(rootSum < 0){
//         // rootSum = 0;
//         if(node.left || node.right) return Math.max(left,right);
//         else return rootSum;
//     }
    
//     function helper(node){
//         // if(!node) return sum;
//         // sum += node.val;
//         // helper(node.left,sum);
//         // helper(node.right,sum);
//         // return sum;
//        let queue = [node];
//         let sum =0;
//         // console.log(queue);
//         while(queue){
//             let cur = queue.pop();
//             if(!cur) break;
//             console.log(cur.val);
//             sum+=cur.val;   
                     
//             queue.unshift(cur.left);
//             queue.unshift(cur.right);
            
//         }
//         return sum;
//     }
    
//     return left + right + rootSum;
    
    
// };


// The Idea

//     Use DFS
//     If a branch's maximum sum is negative, we will never consider that route so we set it to 0
//     Right before we backtrack, calculate the global maximum sum
//     For the backtrack value, we return the current route's max sum

var maxPathSum = function(root) {
    let max = -Infinity;
    var recur = function(node) {
        if (node == null) return 0;
        let left = Math.max(0, recur(node.left)); // negative sums will just be ignored
        let right = Math.max(0, recur(node.right));
        max = Math.max(left + right + node.val, max); // calculate the global max
        return Math.max(left, right)+node.val;  // return current route's best sum
    }
    recur(root)
    return max
};
