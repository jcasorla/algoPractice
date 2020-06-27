// Given a time in

// -hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

//     s: a string representing time in 

//     hour format

// Input Format

// A single string
// containing a time in -hour clock format (i.e.: or ), where and

// .

// Constraints

//     All input times are valid

// Output Format

// Convert and print the given time in
// -hour format, where

// .

// Sample Input 0

// 07:05:45PM

// Sample Output 0

// 19:05:45

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let when = s.slice(s.length-2,s.length);
    let time = s.slice(0,s.length-2);
    let arr =time.split(':');
    arr[0]=parseInt(arr[0]);

    if(when==='PM' && arr[0]!=12){
        arr[0]+=12;
        time=arr.join(':');
        return time;  
    }else if(arr[0]===12 && when==='AM'){
        arr[0]='00';
        time=arr.join(':');
        return time;  
    }
    else if(arr[0]===12 && when==='PM'){
        return time;  
    }else{
        return time;
    }

}

// console.log(timeConversion('12:40:22AM'));
console.log(timeConversion('12:45:54PM'));

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
