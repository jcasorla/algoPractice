// https://www.algoexpert.io/questions/Linked%20List%20Palindrome

//O(N) O(N)
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function linkedListPalindrome(head) {
    const isPalinRes = isPalin(head,head);
      return isPalinRes.outerNodesAreEqual;
  }
  
  function isPalin(leftNode,rightNode){
      if(rightNode === null){
          return new LinkedListInfo(true,leftNode);
      }
      
      const recursiveRes = isPalin(leftNode,rightNode.next);
      const {leftNodeToCompare, outerNodesAreEqual} = recursiveRes;
      
      const recursiveIsEqual = outerNodesAreEqual && leftNodeToCompare.value === rightNode.value;
      const nextLeftNodeToCompare = leftNodeToCompare.next;
      
      return new LinkedListInfo(recursiveIsEqual, nextLeftNodeToCompare);
      
  }
  
  class LinkedListInfo{
      constructor(outerNodesAreEqual, leftNodeToCompare){
          this.outerNodesAreEqual = outerNodesAreEqual;
          this.leftNodeToCompare = leftNodeToCompare;
      }
  }
  
  class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  //O(N) 0(1)
  function linkedListPalindrome(head) {
    let fast = head;
      let slow = head;
      
      while(fast && fast.next){
          slow = slow.next;
          fast = fast.next.next;
      }
      let = reversedSecondHalfNode = reverseLL(slow);
      let firstHalfNode = head;
      
      while(reversedSecondHalfNode){
          if(reversedSecondHalfNode.value !== firstHalfNode.value)
              return false;
          reversedSecondHalfNode = reversedSecondHalfNode.next;
          firstHalfNode = firstHalfNode.next;
      }
      return true;
  }
  
  function reverseLL(head){
      let prev = null;
      let cur = head;
      
      while(cur){
          const nextNode = cur.next;
          cur.next = prev;
          prev = cur;
          cur = nextNode;
      }
      return prev;
  }
  
  