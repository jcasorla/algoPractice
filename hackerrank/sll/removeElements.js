//https://leetcode.com/problems/remove-linked-list-elements/
// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

var removeElements = function(head, val) {
    if(!head) return null;    
    let runner = head;
    
    while(runner.next){
     
        if(runner.next.val===val){
            runner.next = runner.next.next;
        }else{
            runner = runner.next;
        }
    }
    return head.val == val ? head.next : head;
    
};
