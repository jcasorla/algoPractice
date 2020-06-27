function reverse(head) {
    let cur = head;
    let prev =null;
    let n;

    while(cur){
        n = cur.next;
        cur.next=prev;
        prev = cur;
        cur = n;
    }
    return prev;



}