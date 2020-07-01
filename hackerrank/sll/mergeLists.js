// https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem

function mergeLists(head1, head2) {
    let runner1=head1;
    let runner2=head2;
    let headNode = {    
    data: 0,
    next: null
    }
    let runner3 = headNode;

    while(runner1 || runner2){
        if(runner1){
            // console.log('runner1: ' + runner1.data); 
          
            runner3.next = runner1;
            runner3=runner3.next;
            // console.log('runner3: ' + runner3.data); 
                      
        }
        // if(runner2){
        //     // console.log('runner2: ' + runner2.data);
           
        //     runner3.next = runner2;
        //     runner3=runner3.next;
            
        // }
        runner1 = runner1 ? runner1.next : null;
        runner2 = runner2 ? runner2.next : null;
        
    }

   
    return headNode.next;

    

}


// function mergeLists(head1, head2) {
//     let runner1=head1;
//     let headNode = {};
    
//     let tail = headNode;
//     let node1 = head1;
//     let node2 = head2;


//     while (true) {
//         if (!node1 || !node2) { tail.next = node1 || node2; break; }

//         if (node1.data <= node2.data) {
      
//         tail.next = node1;
//         node1 = node1.next;
//         } else {
      
//             tail.next = node2;
//             node2 = node2.next;
//         }

//         tail = tail.next;
//     }
//     return headNode.next;    

// }