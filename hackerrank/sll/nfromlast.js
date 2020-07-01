//https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/problem?h_r=next-challenge&h_v=zen

function getNode(head, positionFromTail) {
    let slow = head;
    let fast = head;

    while(positionFromTail){
        fast=fast.next;
        positionFromTail--;
    }
    while(slow && fast.next){
        slow=slow.next;
        fast = fast.next;
        
    }
    return slow.data;

}