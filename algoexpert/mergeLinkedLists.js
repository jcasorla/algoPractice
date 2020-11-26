// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// O(N+M) | O(N+M)
function mergeLinkedLists(headOne, headTwo) {
  let l1 = headOne,
    l2 = headTwo;
  let l3 = new LinkedList(0);
  let p = l3;

  while (l1 || l2) {
    if (l1 === null) {
      p.next = new LinkedList(l2.value);
      p = p.next;
      l2 = l2.next;
    } else if (l2 === null) {
      p.next = new LinkedList(l1.value);
      p = p.next;
      l1 = l1.next;
    } else {
      if (l1.value === l2.value) {
        p.next = new LinkedList(l1.value);
        p = p.next;
        p.next = new LinkedList(l2.value);
        p = p.next;
        l1 = l1.next;
        l2 = l2.next;
      } else if (l1.value < l2.value) {
        p.next = new LinkedList(l1.value);
        p = p.next;
        l1 = l1.next;
      } else {
        p.next = new LinkedList(l2.value);
        p = p.next;
        l2 = l2.next;
      }
    }
  }

  return l3.next;
}

//better

// O(N+M) | O(1)
function mergeLinkedLists(headOne, headTwo) {
  let p1 = headOne;
  let p2 = headTwo;
  let prev = null;

  while (p1 && p2) {
    if (p1.value < p2.value) {
      prev = p1;
      p1 = p1.next;
    } else {
      if (prev) prev.next = p2;
      prev = p2;
      p2 = p2.next;
      prev.next = p1;
    }
  }

  if (!p1) prev.next = p2;
  return headOne.value < headTwo.value ? headOne : headTwo;
}
