/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/

//linked list delete 

class linkedList{
    
    constructor(){
        this.head = new Node('head')
    }
    
}

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    
    }
    

}

//a->b->c->d->e->null
//a<-b-<c-<d-<e<-null
//         x
//            x
//valor a

//loop

//if first node
//this.head = head.next;

tail
head
runner1= head
runner2 = tail
while(runner1 !==runner2){
    if(runner1.val === val){
        
    }else if(runner2.val === val){
    
    }
    runner1 = runner1.next;
    runner2 = runner2.prev;

}

val = 'd';
//O(N) time

function deleteNode(val){
    if(this.head.val === val){
        head = head.next;
    }
    runner = this.head;
    while(runner !== null || runner.next !=null){//run =d, run.next =e
        if(runner.next.val === val){
            runner.next = runner.next.next;null
            break;
        }
        runner = runner.next;    
    }
    
}



