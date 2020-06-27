class Node {
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }

   

}

class BST{
    constructor(){
        this.root = null;
    }
    insert(data, node =this.root){
        const n = new Node(data);
        if(this.root==null){
            this.root = n;
        }
        else if(node.data < data){
            if(node.right){
                return this.insert(data,node.right);
            }else{
                node.right = n;
            }
        }else{
            if(node.left){
                return this.insert(data,node.left);
            }else{
                node.left = n;
            }
        }
    }
    traversePreOrder(node=this.root){
        if(!node){
            return this;
        }
        console.log(node.data);
        this.traversePreOrder(node.left);
        this.traversePreOrder(node.right);
    }
    traverseInOrder(node=this.root){
        if(!node){
            return this;
        }
        
        this.traverseInOrder(node.left);
        console.log(node.data);
        this.traverseInOrder(node.right);
    }
    traversePostOrder(node=this.root){
        if(!node){
            return this;
        }
        
        this.traversePostOrder(node.left);
        
        this.traversePostOrder(node.right);
        console.log(node.data);
    }

    findMin(node=this.root){
        if(!node){
            return false;
        }
        let min = node;
        if(!min.left){
            return min.data;
        }

        return this.findMin(node.left);
    }
}

const bst = new BST();
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(6);
bst.traversePreOrder();
bst.traverseInOrder();
bst.traversePostOrder();

console.log(bst.findMin());