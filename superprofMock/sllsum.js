function sumTwoSLL(head1,head2){
    let p1 = head1, p2 = head2;
    let res1 ='', res2 ='';
    
    while(p1){
        res1+=p1.val;
        p1 = p1.next;
    }
    
    while(p2){
        res2 +=p2.val;
        p2 = p2.next;
    }
    
    return parseInt(res1) + parseInt(res2);
}