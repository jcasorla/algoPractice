/**
 * https://leetcode.com/problems/symmetric-tree/
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

//recursive DFS
var isSymmetric = function (root) {
  return isMirror(root, root);

  function isMirror(node1, node2) {
    // edge case
    if (node1 == null && node2 == null) return true;
    if (node1 == null || node2 == null) return false;

    return (
      node1.val == node2.val &&
      isMirror(node1.left, node2.right) &&
      isMirror(node1.right, node2.left)
    );
  }
};

// Iterative Approach BFS

var isSymmetric = function (root) {
  const queue = [];

  queue.push(root, root);

  while (queue.length > 0) {
    const node1 = queue.shift();
    const node2 = queue.shift();

    if (node1 == null && node2 == null) continue;
    if (node1 == null || node2 == null) return false;
    if (node1.val != node2.val) return false;

    queue.push(node1.left, node2.right);
    queue.push(node1.right, node2.left);
  }

  return true;
};

//myattempt:
// var isSymmetric = function(root) {
//     const queueA=[], queueB = [];
//     if(!root) return true;
//     if(!root.left && !root.right) return true;
//     if(!root.left) return false;
//     if(!root.right) return false;
//     // if(root.left!==root.right) return false;
//     queueA.push(root.left),queueB.push(root.right);

//     while(queueA.length >0 || queueB.length > 0){
//         const nodeA = queueA.shift(), nodeB= queueB.shift();
//         if((nodeA ==='*' && nodeB ==='*') && (queueA[0] ==='*' || queueB[0]==='*') && (queueA[queueA.length-1] ==='*' || queueB[queueB.length-1]==='*')) break;
//         const compA = nodeA ==='*' ? '*' : nodeA.val;
//         const compB = nodeB ==='*' ? '*' : nodeB.val;
//         console.log(compA + '  ' + compB);
//         if(compA!==compB) return false;

//         // if((nodeA.left && !nodeA.right) && (nodeB.right && !nodeB.left)){
//         //     const tempA = nodeA.left ? nodeA.left : '*';
//         //     const tempB = nodeB.right ? nodeB.right : '*';
//         //     queueA.push(tempA);
//         //     queueB.push(tempB);
//         // }else if((nodeA.right && !nodeA.left) && (nodeB.left && !nodeB.right)){
//         //     const tempA = nodeA.right ? nodeA.right : '*';
//         //     const tempB = nodeB.left ? nodeB.left : '*';
//         //     queueA.push(tempA);
//         //     queueB.push(tempB);
//         // }else{
// //             // if(node.left && node.right)
// //         if(nodeA.left && nodeB.right)
// //             if(nodeA.left !==nodeB.right) return false;

// //         if(nodeA.left && nodeB.right)
// //             if(nodeA.right !== nodeB.left) return false;
// //             queueA.push(nodeA.left);
// //             queueB.push(nodeB.left);
// //             queueA.push(nodeA.right);
// //             queueB.push(nodeB.right);
// //             if(nodeA.left){
// //             queueA.push(nodeA.left);
// //             }
// //             if(nodeB.right){
// //                 queueB.push(nodeB.right);
// //             }
// //             if(nodeA.right){
// //                 queueA.push(nodeA.right);
// //             }
// //             if(nodeB.left){
// //                 queueB.push(nodeB.left);
// //             }

// //         }
//         let tempA = nodeA.left ? nodeA.left : '*';
//         queueA.push(tempA);
//         let tempB = nodeB.right ? nodeB.right : '*';
//         queueB.push(tempB);
//         tempA = nodeA.right ? nodeA.right : '*';
//         queueA.push(tempA);
//         tempB = nodeB.left ? nodeB.left : '*';
//         queueB.push(tempB);

//     }

//     // return queueA.length > 0 || queueB.length > 0 ? false : true;
//     return true;

// };

//revised and works
var isSymmetric = function (root) {
  const queueA = [],
    queueB = [];

  queueA.push(root);
  queueB.push(root);

  while (queueA.length > 0 && queueB.length) {
    const node1 = queueA.shift();
    const node2 = queueB.shift();

    if (node1 == null && node2 == null) continue;
    if (node1 == null || node2 == null) return false;
    if (node1.val != node2.val) return false;

    queueA.push(node1.left);
    queueB.push(node2.right);
    queueA.push(node1.right);
    queueB.push(node2.left);
  }

  return true;
};
