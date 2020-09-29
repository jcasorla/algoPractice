// time complexity - O (n)
// space complexity - O (n)
var reverseList = function(head) {
    if(head === null) return head;
    let stack = [];
    while(head !== null){
        stack.push(head);
        head = head.next;
    }
    let current = stack.pop();
    head = current;
    while(stack.length > 0){
        current.next = stack.pop();
        current = current.next;
    }
    current.next = null;
    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let s = [];
    let run = head;
    const newer = new ListNode();
    let run2 = newer;
    while(run){
        s.push(run.val);
        run = run.next;
    }
    
    // console.log s;
    
    for(let i =s.length-1; i>= 0; i--){
        let cur = s[i];
        // let prev = s[i-1];
        let node = new ListNode(cur);
        // if(prev === '-'){
        //     const val = s[i-1] + s[i];
        //   node = new ListNode(val);
        //     i--;
        // }
        
        run2.next = node;
        run2 = run2.next;
    }
    
    return newer.next;
};