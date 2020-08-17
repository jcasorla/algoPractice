// https://leetcode.com/explore/interview/card/facebook/6/linked-list/319/
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


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
// var addTwoNumbers = function(l1, l2) {
//     let num1 ='';
//     let num2 ='';
//     let run1 = l1;
//     let run2 = l2;
    
//     while(run1){
//         num1+=run1.val;
//         run1 = run1.next;
//     }
    
//     while(run2){
//         num2 +=run2.val;
//         run2 = run2.next;
//     }
//     let res = parseInt(num1) + parseInt(num2);
//     if(parseInt(num1)===0 || parseInt(num2)===0) res =  res.toString().split('');
//     else res =  res.toString().split('').reverse();
    
//     for(let i=0; i<res.length; i++){
//         res[i] = parseInt(res[i]);
//     }
//     console.log(res);
//     const head = new ListNode(0);
//     let point = head;
//      for(let i=0; i<res.length; i++){
//        point.next = new ListNode(res[i]);
//         point = point.next;
//     }
//     return head.next;
    
// };

var addTwoNumbers = function(l1, l2) {
    const head = new ListNode(0);
    var point = head;
    var append = 0;
    var run = function (l1, l2, point) {
        if (l1 === null && l2 === null) {
            if (append == 1) {
                point.next = new ListNode(1);
            }
            return head.next;
        }
        var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + append;
        if (sum > 9) {
            point.next = new ListNode(sum%10);
            append = 1;
        } else {
            point.next = new ListNode(sum);
            append = 0;
        }
        return run(l1 ? l1.next : null, l2 ? l2.next : null, point.next);
    };
    return run(l1, l2, point)
};
