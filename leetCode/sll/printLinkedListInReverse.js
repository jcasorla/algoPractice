/**
 * https://leetcode.com/problems/print-immutable-linked-list-in-reverse/submissions/
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */

//  iterative;

var printLinkedListInReverse = function (head) {
  let curr = head;
  const stack = [];
  while (curr) {
    stack.push(curr);
    curr = curr.getNext();
  }
  while (stack.length) {
    let node = stack.pop();
    node.printValue();
  }
};

//  recursive;

var printLinkedListInReverse = function (head) {
  if (!head) return;
  printLinkedListInReverse(head.getNext());
  head.printValue();
};
