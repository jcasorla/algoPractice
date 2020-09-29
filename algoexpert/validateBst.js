//https://www.algoexpert.io/questions/Validate%20BST

// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree) {
    return helper(tree, -Infinity, Infinity);
      
      function helper(tree,min,max){
          if(!tree) return true;
          if(tree.value < min || tree.value >= max) return false;
          const leftIsValid = helper(tree.left,min,tree.value);
          const rightIsValid = helper(tree.right, tree.value, max);
          
          return leftIsValid && rightIsValid;
      }
  }
  