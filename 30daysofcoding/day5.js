// Objective
// In this challenge, we're going to use loops to help us do some simple math. Check out the Tutorial tab to learn more.

// Task
// Given an integer,
// , print its first multiples. Each multiple (where

// ) should be printed on a new line in the form: n x i = result.

// Input Format

// A single integer,

// .

// Constraints

// Output Format

// Print
// lines of output; each line (where ) contains the of

// in the form:
// n x i = result.

// Sample Input

// 2

// Sample Output

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20

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

    for(let i=1; i<=10; i++){
        console.log(n + " x " + i + " = " + n*i);
    }
}