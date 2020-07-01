class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    add(data, node=this.root){
        const n = new Node(data);
        if(!node){
            this.root = n;
        }else if(data < node.data){
            if(!node.left){
                node.left =n;
            }else{
                this.add(data,node.left);
            }           
        }else if(data > node.data){
            if(!node.right){
                node.right =n;
            }else{
                this.add(data,node.right);
            }
        }
    }
    traversePreOrder(node=this.root){//preorder
        if(!node) return this;
        console.log(node.data);
        this.traversePreOrder(node.left);
        this.traversePreOrder(node.right);
        return this;
    }
    traverseInOrder(node=this.root){//preorder
        if(!node) return this;
        
        this.traverseInOrder(node.left);
        console.log(node.data);
        this.traverseInOrder(node.right);
        return this;
    }
    traversePreOrder(node=this.root){//preorder
        if(!node) return this;
        
        this.traversePreOrder(node.left);
        this.traversePreOrder(node.right);
        console.log(node.data);
        return this;
    }
    findMin(node=this.root){
        if(!node) return this;

        if(node.left){
            return this.findMin(node.left);
        }else{
            return node.data;
        }
    }
    countNodes(node=this.root){
        let count =1;
        if(!node) return 0;
        else{
            count+= this.countNodes(node.left) + this.countNodes(node.right);
            return count;
        }         
    }
    findDepth(node=this.root){
        if(!node) return 0;

        let left = this.findDepth(node.left) +1;
        let right = this.findDepth(node.right) +1;
        return Math.max(right,left);
    }
    sum(node=this.root, n=0){
        if(!node) return n;
        
        if(!node.left && node.right){
            node.data +=n;
            return node.data;
        }

        node.data += this.sum(node.right,n);
        return this.sum(node.left,node.data);     
    }
    isEmpty(){
        if(!this.root) return true;
        return false;
    }
    constains(node=this.root, data){

        // if(!node) return this;

        if(node.data>data && node.left){
            return this.constains(node.left,data);
        }
        if(node.data<data && node.right){
            return this.constains(node.right,data);
        }
        else if(node.data===data){
            return node.data;
        }else{
            return null;
        }
        // // console.log(data);
        // if(data===node.data){
        //     return node.data;
        // }
        // if(node.data<data && node.right){
        //     this.constains(node.right,data);
        // }
        // else if(node.data>data && node.left){
        //     this.constains(node.left,data);
        // }
        // return null;
        // return data;
       
    }
}

const bst = new BST();

console.log(bst.isEmpty());
bst.add(4);
bst.add(3);
bst.add(5);
bst.add(2);
bst.add(1);
bst.traversePreOrder();
console.log(bst.findMin());
console.log(bst.countNodes());
console.log(bst.findDepth());
console.log(bst.sum());//15
console.log(bst.constains());

