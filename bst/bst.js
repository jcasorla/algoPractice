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
    isEmpty(){
        return this.root ===null;
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
    traversePreOrder(node=this.root){
        if(!node) return this;
        console.log(node.data);
        this.traversePreOrder(node.left);
        this.traversePreOrder(node.right);
        return this;
    }
    traverseInOrder(node=this.root){
        if(!node) return this;
        
        this.traverseInOrder(node.left);
        console.log(node.data);
        this.traverseInOrder(node.right);
        return this;
    }
    traversePreOrder(node=this.root){
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
    //works but dont like
    // sum(node=this.root, n=0){
    //     if(!node) return n;
        
    //     if(!node.left && node.right){
    //         node.data +=n;
    //         return node.data;
    //     }

    //     node.data += this.sum(node.right,n);
    //     return this.sum(node.left,node.data);     
    // }
    sum(){ //much better
        let node = this.root;
        let sum=0;

        function recurse(node){
            if(!node) return;           
            sum+=node.data;
            recurse(node.left);
            recurse(node.right);
        }
        recurse(node);
        return sum;
    }
    isEmpty(){
        if(!this.root) return true;
        return false;
    }
    constains(data){
        let node = this.root;

        function recurse(node,data){
            if(!node) return this;
            if(node.data == data) return node;
            if(node.data>data && node.left){
                return recurse(node.left,data);
            }
            if(node.data<data && node.right){
                return recurse(node.right,data);
            }
        }
        return recurse(node,data);      
       
    }

    bst2Array(){

        let arr =[];
        let node = this.root;
        function recurse(node){
            if(!node) return this;
         
            recurse(node.left);
            arr.push(node.data);
            recurse(node.right);
            return this;
        }
        recurse(node);
        return arr;
    }

    // remove(value,node=this.root){
    //     if(!this.isEmpty()){
    //         if (!node) {
    //             this.root = this.remove(value, this.root);
    //         } else if (value < node.value && node.left) {
    //             node.left = this.remove(value, node.left);
    //         } else if (value > node.value && node.right) {
    //             node.right = this.remove(value, node.right);
    //         } else if (value === node.value) {
    //             // check if node is a leaf node
    //             if (node.left && node.right) {
    //                 // node has two children. change its value to the min
    //                 // right value and remove the min right node
    //                 node.value = this.findMinValue(node.right);
    //                 node.right = this.remove(node.value, node.right);
    //             } else {
    //                 // replace the node with whichever child it has
    //                 node = node.left || node.right;
    //             }
    //         }
    //         return node.data;

    //     }
        
    // }

   
    // remove(val) {
    //     this.root = this.removeNode(this.root, val);
    // }

    // removeNode(current, value) {
    //     if (value == null || value == undefined)
    //         return;

    //     if (value == current.data) {
    //         if (current.left == null && current.right == null) {
    //             return null;
    //         } else if (current.left == null)
    //             return current.right;
    //         else if (current.right == null)
    //             return current.left;
    //         else {
    //             var tempNode = this.findMin(current.right);
    //             current.data = tempNode.data;
    //             current.right = this.removeNode(current.right, tempNode.data);
    //             return current;
    //         }


    //     } else if (value < current.data) {
    //         current.left = this.removeNode(current.left, value);
    //         return current;
    //     } else {
    //         current.right = this.removeNode(current.right, value);
    //         return current;
    //     }
    // }

    remove(n, node=this.root) {
        if(!node) return false;
        if(n == this.root.data && n != this.root.right.data) {
            if(this.root.left && this.root.right) {
                this.root.data = this.findMin(this.root.right);
                console.log(this.root.data);
                // if(!this.root.right.right) this.root.right=null;
                // if(this.root.right.right){
                //     this.root.right.data = this.root.right.right.data;
                //     this.root.right.right = null;

                // }  
                this.remove(this.root.data, this.root.right);
            }
            else if (this.root.left) {
                this.root = this.root.left;
            }
            else if (this.root.right) {
                this.root = this.root.right;
            }
            else this.root = null;
            return true;
        }
        else if (node.left && node.left.data == n) {
            if(!node.left.left && !node.left.right) {
                node.left = null;
            }
            else if (node.left.left && !node.left.right) {
                node.left = node.left.left;
            }
            else if (!node.left.left && node.left.right) {
                node.left = node.left.right;
            }
            else {
                node.left.data = this.findMin(node.left.right);
                this.remove(node.left.data, node.left.right);
            }
            return true;
        }
        else if (node.right && node.right.data == n) {
            if(!node.right.left && !node.right.right) {
                node.right = null;
            }
            else if (node.right.left && !node.right.right) {
                node.right = node.right.left;
            }
            else if (!node.right.left && node.right.right) {
                node.right = node.right.right;
            }
            else {
                node.right.data = this.findMin(node.right.right);
                this.remove(node.right.data, node.right.right);
            }
            return true;
        }
        if(n > node.data) return this.remove(n, node.right);
        else if (n < node.data) return this.remove(n, node.left);
    }
    // BFS(start) {
    //     let data = [],
    //         queue = [],
    //         current = start ? this.find(start) : this.root;
      
    //     queue.push(current);
    //     while (queue.length) {
    //       current = queue.shift();
    //       data.push(current.val);
      
    //       if (current.left) queue.push(current.left);
    //       if (current.right) queue.push(current.right);
    //     };
      
    //     return data;
    //   }

      breadthFirstSearch() {
        let node = this.root;
        const queue=[node];
        let arr =[];
        // queue.unshift('<>');
        
        while(queue.length>0){
            const current = queue.pop();           
            arr.push(current.data)
            if(current.left) queue.unshift(current.left);
            if(current.right) queue.unshift(current.right);            
        }

        return arr.join(' ');       
    }

}

const bst = new BST();

console.log(bst.isEmpty());
bst.add(4);
bst.add(3);
bst.add(5);
bst.add(6);
bst.add(7);
bst.add(2);
bst.add(1);
// bst.traversePreOrder();
console.log(bst.findMin());
console.log(bst.countNodes());
console.log(bst.findDepth());
console.log(bst.sum());//15
console.log(bst.constains(5));
console.log(bst.bst2Array());
// console.log(bst.remove(4));
// bst.traversePreOrder();
// console.log(bst.bst2Array());
// console.log(bst.BFS);

console.log(bst.breadthFirstSearch());

