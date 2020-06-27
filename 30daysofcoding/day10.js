//https://www.youtube.com/watch?v=ZwNaQ5TKK9A

// Objective
// Today, we're working with binary numbers. Check out the Tutorial tab for learning materials and an instructional video!

// Task
// Given a base-
// integer, , convert it to binary (base-). Then find and print the base- integer denoting the maximum number of consecutive 's in

// 's binary representation.

// Input Format

// A single integer,

// .

// Constraints

// Output Format

// Print a single base-
// integer denoting the maximum number of consecutive 's in the binary representation of

// .

// Sample Input 1

// 5

// Sample Output 1

// 1

// Sample Input 2

// 13

// Sample Output 2

// 2

// Explanation

// Sample Case 1:
// The binary representation of
// is , so the maximum number of consecutive 's is

// .

// Sample Case 2:
// The binary representation of
// is , so the maximum number of consecutive 's is .


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);
    console.log(binarynumcons1(n));
}

function binarynumcons1(n){
    let count=0;
    let max=0;
    while(n>0){
        if(n%2==1){
            count+=1
            if(count>=max){
                max=count;
            }         
        }else{
            count=0;
        }        
        n/=2;
        n=parseInt(n);        
    }
    return max;
}