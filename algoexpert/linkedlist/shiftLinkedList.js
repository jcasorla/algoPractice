//https://www.algoexpert.io/questions/Shift%20Linked%20List
// 0(N) | 0(1)
function shiftLinkedList(head, k) {
  if (k === 0) return head;
  const curHead = head;
  const res = find(head, k);
  if (!res) return head;
  const curTail = res[0];
  const newHead = res[2];
  const newTail = res[1];
  curTail.next = curHead;
  newTail.next = null;

  return newHead;
}
function find(head, k) {
  let len = 1;
  let runner = head;
  let curTail;
  let newHead;
  let newTail;
  let newTailC;

  while (runner.next) {
    len++;
    runner = runner.next;
  }
  curTail = runner;
  const offset = Math.abs(k) % len;
  if (offset === 0) return false;

  newTailC = k > 0 ? len - offset : offset;

  newTail = head;

  for (let i = 1; i < newTailC; i++) {
    newTail = newTail.next;
  }
  newHead = newTail.next;
  newHead = newTail.next;

  return [curTail, newTail, newHead];
}

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//first attempt passes 9 cases:
// function shiftLinkedList(head, k) {
//   if (k === 0) return head;
//   const curHead = head;
//   const res = find(head, k);
//   console.log(res);
//   const len = res[0];
//   const curTail = res[1];
//   const newHead = res[3];
//   const newTail = res[2];
//   curTail.next = curHead;
//   newTail.next = null;

//   return newHead;
// }
// function find(head, k) {
//   let len = 0;
//   let runner = head;
//   let curTail;
//   let newHead;
//   let newTail;
//   let newHeadC;
//   let newTailC;

//   while (runner.next) {
//     len++;
//     runner = runner.next;
//   }
//   curTail = runner;
//   len++;

//   if (k > 0) {
//     newHeadC = k > len ? k % len : len - k;
//   } else {
//     newHeadC = Math.abs(k) > len ? Math.abs(k) % len : 0 + k;
//   }

//   newTailC = newHeadC - 1;

//   runner = head;
//   if (newTailC === 0) newTail = runner;

//   let c = 1;
//   while (runner) {
//     runner = runner.next;

//     if (newTailC !== 0 && c === newTailC) {
//       newTail = runner;
//     }
//     if (c === newHeadC) {
//       newHead = runner;
//     }
//     c++;
//   }

//   return [len, curTail, newTail, newHead];
// }

// // This is the class of the input linked list.
// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
