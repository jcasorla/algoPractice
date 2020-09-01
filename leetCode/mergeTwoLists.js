//https://leetcode.com/explore/interview/card/facebook/6/linked-list/301/

// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let l3 = new ListNode(0,null);
    let p = l3;
    
    while(l1 || l2){
        if(l1 === null){
            p.next = new ListNode(l2.val,null);
            p = p.next;
            l2 = l2.next;
        }else if(l2 === null){
            p.next = new ListNode(l1.val,null);
            p = p.next;
            l1 = l1.next;
        }else{
             if(l1.val === l2.val){
            p.next = new ListNode(l1.val,null);
            p = p.next;
            p.next = new ListNode(l2.val,null);
            p = p.next;
            l1 = l1.next;
            l2 = l2.next;
            }else if(l1.val < l2.val){
                p.next = new ListNode(l1.val,null);
                p = p.next;
                l1 = l1.next;
            }else{
                p.next = new ListNode(l2.val,null);
                p = p.next;
                l2 = l2.next;
            }        
            
        }
       
    }
    
    return l3.next;
     
    
};