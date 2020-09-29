function invertBinaryTree(tree) {
    const queue = [tree];
      
      while(queue.length){
          let cur = queue.pop();
          if(!cur) continue;
          swap(cur, cur.left,cur.right);
          queue.unshift(cur.left);
          queue.unshift(cur.right);
          
      }
      
      function swap(cur,left,right){
          cur.left = right;
          cur.right = left;
      }
  }

  function invertBinaryTree(tree){
      if(!tree) return;
        swap(tree);
        invertBinaryTree(tree.left);
        invertBinaryTree(tree.right);

      function swap(cur){
        const left = cur.left;
        cur.left = cur,right;
        cur.right = left;
    }

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
  exports.invertBinaryTree = invertBinaryTree;