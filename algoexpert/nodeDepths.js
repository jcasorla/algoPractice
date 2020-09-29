//https://www.algoexpert.io/questions/Node%20Depths

// function nodeDepths(root) {
// 	let node = root;
// 	let depth = 0;
// 	function traverse(node, depth){
// 		if(node === null) return 0;
		
// 		return depth + traverse(node.left,depth+1) + traverse(node.right,depth+1);
// 	}
	
// 	return traverse(node,depth);
	

//   // Write your code here.
// }

// // This is the class of the input binary tree.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // Do not edit the line below.
// exports.nodeDepths = nodeDepths;

function nodeDepths(root) {
    let stack =[{node: root, depth:0}];
      let sum =0;
      while(stack.length > 0){
          const {node, depth} = stack.pop();
          if(!node) continue;
          sum+=depth;
          stack.push({node: node.left, depth: depth+1});
          stack.push({node: node.right, depth: depth+1});
      }	
      return sum;	
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;
  