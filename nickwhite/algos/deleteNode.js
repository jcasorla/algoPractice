function deleteNode(head, position) {
    if(position==0)
        return head.next;
    let current = head;

    while(position-1>0){
        current=current.next;
        position--;
    }
    
    console.log('ehllo ' + current.next.data);
    current.next = current.next.next;
    
    return head;

}