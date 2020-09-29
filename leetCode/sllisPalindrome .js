/**
 * https://leetcode.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function(head) {
//     // let str = '';
    
    
//     let fast = head;
//     let mid = head;
//     let slow = head;
    
//     while(fast.next && fast.next.next){
        
//         mid=mid.next;
//         fast=fast.next.next;
        
//     }  
  
//     // console.log(mid.val)
    
//     while(mid){
//         if(mid.val !== slow.val) return false;
        
//         mid = mid.next;
//         slow = slow.next;
//     }
    
//     return true;
   
    
// };

var isPalindrome = function(head) {
    const stack = [];
    let s = head,
        f = head;

    while (f && f.next) {
        stack.push(s.val);
        s = s.next;
        f = f.next.next;
    }

    if (f) stack.push(s.val); // odd length

    while (s) {
        if (s.val !== stack.pop()) return false;
        s = s.next;
    }

    return true;
};

// var isPalindrome = function(head) {
//     if (!head || !head.next)
//         return true
//     let slow = head, fast = head, cnt = 0
//     while (fast.next) {
//         slow = slow.next
//         cnt++
//         fast = fast.next
//         if (!fast.next)
//             break
//         fast = fast.next
//     }
    
//     helper(null, slow)
//     for (let i = 0; i < cnt; i++) {
//         if (head.val != fast.val)
//             return false
//         head = head.next
//         fast = fast.next
//     }
//     return true
    
// };

// const helper = function(prev, p) {
//     if (!p)
//         return
//     let next = p.next
//     p.next = prev
//     helper(p, next)
// }