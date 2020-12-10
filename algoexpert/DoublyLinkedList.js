//https://www.algoexpert.io/questions/Linked%20List%20Construction
// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (!this.tail) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
    //     while(node.next){
    // 			node=node.next;

    // 		}
    this.tail = node;
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (!node.prev) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
    // let temp=node;
    // node=nodeToInsert;
    // node.next=temp;

    // Write your code here.
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (!node.next) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
    // let temp = node.next;
    // node.next = nodeToInsert;
    // nodeToInsert.next = temp;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let c = 1;
    let runner = this.head;

    while (runner && c++ !== position) {
      runner = runner.next;
    }
    if (runner) {
      this.insertBefore(runner, nodeToInsert);
      // let temp = runner.prev;
      // temp.next = nodeToInsert;
      // nodeToInsert.next = runner;
    } else {
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    let runner = this.head;
    while (runner) {
      const nodeToRemove = runner;
      runner = runner.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }

    // while(runner){
    // 	if(runner.value=== value){
    // 		let temp = runner.prev;
    // 		temp.next = runner.next.next;
    // 		runner = temp;
    // 	}
    // 	runner = runner.next
    // }
  }

  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
    // let runner = this.root;

    // while(runner){
    // 	if(node === this.head) this.head = this.head.next;
    // 	if(node === this.tail) this.tail = this.tail.prev;
    // 	if(runner === node){
    // 		const temp = runner.prev;
    // 		temp = runner.next.next;
    // 		runner = temp;
    // 		break;
    // 	}
    // 	runner = runner.next;
    // }
  }

  containsNodeWithValue(value) {
    let runner = this.head;
    while (runner && runner.value !== value) runner = runner.next;
    return runner !== null;
    // while(runner){
    // 	if(runner.val === runner)
    // 		return true;
    // 	runner = runner.next;
    // }
    // return false;
  }
  removeNodeBindings(node) {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}
