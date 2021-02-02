// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//0(N) | 0(1)
function removeDuplicatesFromLinkedList(linkedList) {
  let r1 = linkedList;
  let r2 = r1.next;
  while (r2) {
    if (r1.value === r2.value) {
      if (r2.next === null) {
        r1.next = null;
        break;
      }
      const temp = r2.next;
      r2.next = null;
      r2 = temp;
    } else {
      r1.next = r2;
      r1 = r2;
      r2 = r1.next;
    }
  }
  return linkedList;
}

//algoexpert solution
function removeDuplicatesFromLinkedList(linkedList) {
  let cur = linkedList;
  while (cur) {
    let nextDistinctNode = cur.next;
    while (nextDistinctNode && nextDistinctNode.value === cur.value) {
      nextDistinctNode = nextDistinctNode.next;
    }
    cur.next = nextDistinctNode;
    cur = nextDistinctNode;
  }
  return linkedList;
}
