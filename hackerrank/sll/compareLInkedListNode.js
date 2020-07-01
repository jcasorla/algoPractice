// This challenge is part of a tutorial track by MyCodeSchool

// You’re given the pointer to the head nodes of two linked lists. Compare the data in the nodes of the linked lists to check if they are equal. The lists are equal only if they have the same number of nodes and corresponding nodes contain the same data. Either head pointer given may be null meaning that the corresponding list is empty.

// Input Format

// You have to complete the int CompareLists(Node* headA, Node* headB) method which takes two arguments - the heads of the two linked lists to compare. You should NOT read any input from stdin/console.

// The input is handled by the code in the editor and the format is as follows: The first line contains

// , the number of test cases. The format for each test case is as follows:

// The first line contains an integer
// , denoting the number of elements in the first linked list.
// The next lines contain an integer each, denoting the elements of the first linked list.
// The next line contains an integer , denoting the number of elements in the second linked list.
// The next

// lines contain an integer each, denoting the elements of the second linked list.

// Constraints

// , where is the

//     element in the list.

// Output Format

// Compare the two linked lists and return 1 if the lists are equal. Otherwise, return 0. Do NOT print anything to stdout/console.

// The output is handled by the code in the editor and it is as follows:

// For each test case, in a new line, print
// if the two lists are equal, else print

// .

// Sample Input

// 2
// 2
// 1
// 2
// 1
// 1
// 2
// 1
// 2
// 2
// 1
// 2

// Sample Output

// 0
// 1

// Explanation

// In the first case, linked lists are: 1 -> 2 -> NULL and 1 -> NULL

// In the second case, linked lists are: 1 -> 2 -> NULL and 1 -> 2 -> NULL

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
    let runner1 = llist1;
    let runner2 = llist2;

    while(runner1 || runner2){
        if(!runner1 || !runner2) return 0;
        if(runner1.data!=runner2.data) return 0;
        runner1= runner1.next;
        runner2=runner2.next;
    }   
    return 1;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
      	const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }

        let result = CompareLists(llist1.head, llist2.head);

        ws.write((result ? 1 : 0) + "\n");
    }

    ws.end();
}
