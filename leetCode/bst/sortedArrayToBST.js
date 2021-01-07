//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
//my solution:
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
var sortedArrayToBST = function (nums) {
  if (nums == null || nums.length == 0) return null;
  const midIdx = Math.floor(nums.length / 2);
  const midpoint = nums[midIdx];

  const tree = new TreeNode(midpoint);

  let l = midIdx - 1;
  let r = midIdx + 1;
  while (l >= 0 || r < nums.length) {
    const leftVal = !nums[l] ? null : nums[l];
    const rightVal = !nums[r] ? null : nums[r];
    const leftNode = new TreeNode(leftVal);
    const rightNode = new TreeNode(rightVal);
    insert(leftNode, rightNode, leftVal, rightVal, tree);
    l--;
    r++;
  }
  return tree;
};

function insert(left, right, leftVal, rightVal, tree) {
  if (!tree.left) {
    if (leftVal) {
      tree.left = left;
    }
  } else {
    let runner1 = tree;
    console.log(runner1);
    while (runner1.left) {
      runner1 = runner1.left;
    }
    runner1.left = left;
  }
  if (!tree.right) {
    if (rightVal) {
      tree.right = right;
    }
  } else {
    let runner2 = tree;
    while (runner2.right) {
      runner2 = runner2.right;
    }
    runner2.right = right;
  }
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

// iterative Java
// siyang3's avatar
// siyang3
// 1055

// Last Edit: September 22, 2018 7:42 PM

// 3.8K VIEWS

// Try to solve it iteratively, need an extra class to store:

//     current TreeNode's coverage [low, up]

//     current TreeNode entity

// ()

// public class Solution {
//     class Node{ // need another class to store multi information
//         int low, up; // means the TreeNode covers [low, up], low and up are all index
//         TreeNode t;
//         Node(int l, int p, TreeNode node){
//             low = l;
//             up = p;
//             t = node;
//         }
//     }
//     public TreeNode sortedArrayToBST(int[] num) {
//         if(num == null || num.length == 0) return null;
//         Stack<Node> stack = new Stack<Node>();
//         // initialize
//         TreeNode root = new TreeNode(num[(num.length-1)/2]);
//         Node rootNode = new Node(0,num.length-1,root);
//         stack.push(rootNode);
//         // iteration
//         while(!stack.isEmpty()){
//             Node node = stack.pop();
//             int middle = (node.low+node.up)/2; // cut half for [low, up]

//             // [low, middle-1]
//             if(middle-1 >= node.low){
//                 TreeNode leftnode = new TreeNode(num[(middle-1+node.low)/2]);
//                 node.t.left = leftnode;
//                 Node left = new Node(node.low, middle-1, leftnode);
//                 stack.push(left);
//             }
//             // [middle+1, up]
//             if(middle+1 <= node.up){
//                 TreeNode rightnode = new TreeNode(num[(middle+1+node.up)/2]);
//                 node.t.right = rightnode;
//                 Node right = new Node(middle+1, node.up, rightnode);
//                 stack.push(right);
//             }
//         }
//         return root;
//     }
// }

//other:
// https://medium.com/confessions-of-a-bootcamp-grad/how-to-solve-leetcodes-convert-sorted-array-to-binary-search-tree-problem-with-javascript-a61e6d6d6c36

// var sortedArrayToBST = function (nums) {
//   return createBST(nums);
//   function createBST(nums) {
//     if (nums.length == 0) return null;
//     let mid = Math.floor(nums.length / 2);
//     let root = new TreeNode(nums[mid]);
//     root.left = createBST(nums.slice(0, mid));
//     root.right = createBST(nums.slice(mid + 1));
//     return root;
//   }
//   // Time Complexity: O(N), we visit every element exactly once
//   // Space Complexity: O(N), call stack can go as deep as number of elements
// };

// var sortedArrayToBST = function (nums) {
//   if (!nums) return null;

//   const helper = (low, high) => {
//     if (low > high) return null;

//     const mid = Math.floor((high + low) / 2);
//     const root = new TreeNode(nums[mid]);

//     root.left = helper(low, mid - 1);
//     root.right = helper(mid + 1, high);

//     return root;
//   };

//   return helper(0, nums.length - 1);
// };
