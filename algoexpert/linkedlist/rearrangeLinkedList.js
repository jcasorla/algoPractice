//https://www.algoexpert.io/questions/Rearrange%20Linked%20List
//0(N) | 0(1)
function rearrangeLinkedList(head, k) {
  let smallerListHead = null;
  let smallerListTail = null;
  let equalListHead = null;
  let equalListTail = null;
  let greaterListHead = null;
  let greaterListTail = null;

  let node = head;

  while (node) {
    if (node.value < k) {
      [smallerListHead, smallerListTail] = growLinkedList(
        smallerListHead,
        smallerListTail,
        node
      );
    } else if (node.value > k) {
      [greaterListHead, greaterListTail] = growLinkedList(
        greaterListHead,
        greaterListTail,
        node
      );
    } else {
      [equalListHead, equalListTail] = growLinkedList(
        equalListHead,
        equalListTail,
        node
      );
    }
    const prevNode = node;
    node = node.next;
    prevNode.next = null;
  }
  const [firstHead, firstTail] = connectLinkedList(
    smallerListHead,
    smallerListTail,
    equalListHead,
    equalListTail
  );
  const [finalHead, _] = connectLinkedList(
    firstHead,
    firstTail,
    greaterListHead,
    greaterListTail
  );
  return finalHead;
}

function growLinkedList(head, tail, node) {
  let newHead = head;
  let newTail = node;
  if (!newHead) newHead = node;
  if (tail) tail.next = node;

  return [newHead, newTail];
}

function connectLinkedList(headOne, tailOne, headTwo, tailTwo) {
  const newHead = headOne === null ? headTwo : headOne;
  const newTail = tailTwo === null ? tailOne : tailTwo;
  if (tailOne) tailOne.next = headTwo;
  return [newHead, newTail];
}

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
