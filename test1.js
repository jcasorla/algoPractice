// https://jsonmock.hackerrank.com/api/countries?page=2

// 'use strict';

// const fs = require('fs');
// const https = require('https');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// async function getCountryName(code) {
//     // write your code here
//     // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
    
//     const Http = new XMLHttpRequest();
//     const url='https://jsonmock.hackerrank.com/api/countries?page=2';
//     Http.open("GET", url);
//     Http.send();

//     let data=Http.onreadystatechange = (e) => {
//         console.log(Http.responseText)
//         return Http.responseText;
//     }
//     return data;
// }