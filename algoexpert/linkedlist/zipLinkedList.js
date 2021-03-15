//https://www.algoexpert.io/questions/Zip%20Linked%20List

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//my solution
//0(n^2) | 0(1)
function zipLinkedList(linkedList) {
  let r1 = linkedList;
  let r2 = r1.next;

  while (r2) {
    let r3;
    let r4;
    if (r2.next === null) {
      break;
    } else {
      r3 = r2.next;
      r4 = r3.next === null ? null : r3.next;
    }
    if (r4 !== null) {
      while (r4.next) {
        r3 = r3.next;
        r4 = r4.next;
      }

      r3.next = null;
      r1.next = r4;
      r4.next = r2;
    } else if (r4 === null && r3 !== null) {
      r1.next = r3;
      r3.next = r2;
      r2.next = null;
      break;
    }

    r1 = r2;
    r2 = r2.next;
  }
  return linkedList;
}

//algoexpert solution
//0(n) | 0(1)
function zipLinkedList(linkedList) {
  if (linkedList.next === null || linkedList.next.next === null)
    return linkedList;

  const firstHalfHead = linkedList;
  const secondHalfHead = splitLinkedList(linkedList);
  const reversedSecondHalfHead = reverseLinkedList(secondHalfHead);
  return interweaveLinkedList(firstHalfHead, reversedSecondHalfHead);
}

function splitLinkedList(linkedList) {
  let slow = linkedList;
  let fast = linkedList;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const secondHalfHead = slow.next;
  slow.next = null;
  return secondHalfHead;
}

function reverseLinkedList(head) {
  let prev = null;
  let cur = head;
  while (cur) {
    const nextNode = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextNode;
  }
  return prev;
}
function interweaveLinkedList(linkedList1, linkedList2) {
  let r1 = linkedList1;
  let r2 = linkedList2;

  while (r1 && r2) {
    const r1Next = r1.next;
    const r2Next = r2.next;

    r1.next = r2;
    r2.next = r1Next;

    r1 = r1Next;
    r2 = r2Next;
  }
  return linkedList1;
}
