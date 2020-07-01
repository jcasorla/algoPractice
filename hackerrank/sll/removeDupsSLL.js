// https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list/problem

function removeDuplicates(head) {
    if(head==null || head.next==null) return head;
    let runner = head;

    while(runner.next!=null){
       if(runner.data!=runner.next.data){
           runner = runner.next;
       }else{
           runner.next = runner.next.next;
       }
    }
    return head;

}