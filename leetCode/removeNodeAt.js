/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //     let slow = head;
    //     let fast = head;
    //     let count = 1;
    //     while(n>0){
    //         fast = fast.next;
    //     }
        
    //     while(fast){
    //         fast = fast.next;
    //         slow = slow.next;
    //     }
    //     slow.next = slow.next.next;
    //     return head;
        let dummy = new ListNode(0);
        dummy.next = head;
        let first = dummy;
        let second = dummy;
        // Advances first pointer so that the gap between first and second is n nodes apart
        for (let i = 1; i <= n + 1; i++) {
            first = first.next;
        }
        // Move first to the end, maintaini ng the gap
        while (first != null) {
            first = first.next;
            second = second.next;
        }
        second.next = second.next.next;
        return dummy.next;
        
        
    };