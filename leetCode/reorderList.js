//https://leetcode.com/explore/interview/card/facebook/6/linked-list/3021/

// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example 1:

// Given 1->2->3->4, reorder it to 1->4->2->3.

// Example 2:

// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
    if(head===null || head.next=== null){
        return head;
    }
    
    let p1 = head;   
    let stack =[];
    
    while(p1){
        let temp = p1;
        stack.push(temp);
        p1 = p1.next;
    }
    
    head.next = null;
    let p2 = head;
    let i =0;
    
    while(stack.length>0){
        if(i===0){
            let s0 = stack.pop();
            stack.shift();
            s0.next = null;
            p2.next = s0;
            p2 = p2.next;
        }
        else{
            
            let s1 = stack.shift();
            if(s1){
                s1.next = null;
                p2.next = s1;
                p2 = p2.next;
            }
           
            let s2 = stack.pop();
            if(s2){
                s2.next = null;
                p2.next = s2;
                p2 = p2.next;
            }
        }
        i++;
    }   
};


//other solutions:
// var reorderList = function (head) {
//     let stack = [], node = head
//     if (!node) return
//     while (node) {
//       stack.push(node)
//       node = node.next
//     }
  
//     let len = stack.length
//     node = head
//     for (let i = 0; i < len; i++) {
//       if (i % 2 === 0)
//         node.next = stack.shift()
//       else
//         node.next = stack.pop()
//       node = node.next
//     }
//     node.next = null
//   };


// var reorderList = function(head) {
//     if (!head) return;
//     let cur = head, middle = findMiddle(head);
//     let rev = reverseList(middle.next);
//     while (rev) {
//         const saved = cur.next;
//         cur.next = rev;
//         rev = rev.next;
//         cur.next.next = saved;
//         cur = saved;
//     }
    
//     middle.next = null;
// };

// var findMiddle = function(head) {
//     if (!head) return;
//     let middle = head;
//     while (head && head.next) {
//         head = head.next.next;
//         middle = middle.next;
//     }
    
//     return middle;
// }

// var reverseList = function(head) {
//     if (!head) return;
//     let prev = null;
//     while (head) {
//         const saved = head.next;
//         head.next = prev;
//         prev = head;
//         head = saved;
//     }
    
//     return prev;
// }


// var reorderList = function(head) {
//     var stack =[];
//     while(head){
//         stack.push(head);
//         head = head.next;
//     }
//     var head = stack[0];
//     while(stack.length>0){
//         var n = stack.pop();
//         if(stack.length>0){
//             stack.shift().next=n;
//             n.next=(stack.length>0)?stack[0]:null;
//         }else{
//             n.next = null;
//         }
//     }
// };