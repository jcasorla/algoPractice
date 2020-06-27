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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {

    // if(s =='a'){
    //     return n;
    // }    
    // let count=0;
    
    // let i=0;
    // while(n>0){
        
    //     if(s[i]==='a'){
    //         count++;
    //     }
    //     n--;
    //     i++;
    //     if(i==s.length){
    //         i=0;
    //     }
    // }
    // return count;

    let whole = n / s.length;
    whole=parseInt(whole);
    let rem = n % s.length;
    let found=0;

    
    for(let val of s){
        if(val=='a'){
            found++;
        }
    }
    let total = found * whole;

    if(rem==0){
        return total;
    }else{
        let sub = s.substring(0,rem);

        for(let val2 of sub){
            if (val2=='a'){
                total++;
            }
        }
    }
    return total;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
