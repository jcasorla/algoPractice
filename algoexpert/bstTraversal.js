// https://www.algoexpert.io/questions/BST%20Traversal

function inOrderTraverse(tree, array) {
	if(tree){
		inOrderTraverse(tree.left,array);
		array.push(tree.value);
		inOrderTraverse(tree.right,array);
	}
	return array;	

}

function preOrderTraverse(tree, array) {
	if(tree){
		array.push(tree.value);
		preOrderTraverse(tree.left,array);	
		preOrderTraverse(tree.right,array);
	}
	return array;

  // Write your code here.
}

function postOrderTraverse(tree, array) {
	if(tree){
		postOrderTraverse(tree.left,array);	
		postOrderTraverse(tree.right,array);
		array.push(tree.value);
	}
	return array;

  // Write your code here.
}
