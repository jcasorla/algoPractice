//https://www.algoexpert.io/questions/Zip%20Linked%20List

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
