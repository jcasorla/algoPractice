// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

//brute force:
//0(n + m) | 0(n + m)
// function sumOfLinkedLists(linkedListOne, linkedListTwo) {
//   let num1 = linkedListNumber(linkedListOne);
//   let num2 = linkedListNumber(linkedListTwo);
//   let num3 = num1 + num2;
//   let str = num3.toString().split("").reverse().join("");
//   const linkedListThree = new LinkedList("start");

//   let runner = linkedListThree;
//   let i = 0;
//   while (i < str.length) {
//     const newNode = new LinkedList(parseInt(str[i]));
//     runner.next = newNode;
//     runner = runner.next;
//     i++;
//   }
//   return linkedListThree.next;
// }
// function linkedListNumber(list) {
//   const stack = [];
//   let runner = list;
//   let num = "";

//   while (runner) {
//     stack.push(runner.value);
//     runner = runner.next;
//   }
//   while (stack.length > 0) {
//     num += stack.pop();
//   }
//   return parseInt(num);
// }
// Do not edit the line below.
exports.sumOfLinkedLists = sumOfLinkedLists;

// algoexpert solution
//0(max(n.m)) | 0(max(n,m))
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const newLinkedListHead = new LinkedList(0);
  let cur = newLinkedListHead;
  let carry = 0;

  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  while (nodeOne || nodeTwo || carry !== 0) {
    const valueOne = nodeOne ? nodeOne.value : 0;
    const valueTwo = nodeTwo ? nodeTwo.value : 0;
    const sumOfValues = valueOne + valueTwo + carry;

    const newValue = sumOfValues % 10;
    const newNode = new LinkedList(newValue);
    cur.next = newNode;
    cur = newNode;

    carry = Math.floor(sumOfValues / 10);
    nodeOne = nodeOne ? nodeOne.next : null;
    nodeTwo = nodeTwo ? nodeTwo.next : null;
  }
  return newLinkedListHead.next;
}
