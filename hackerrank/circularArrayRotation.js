// https://www.hackerrank.com/challenges/circular-array-rotation/problem?h_r=next-challenge&h_v=zen

function circularArrayRotation(a, k, queries) {
    let len  = a.length;

    while(k>0){
        let f = a.pop();
        a.unshift(f);
        k--;
    }
    let res = [];
    for(let val of queries){
        res.push(a[val]);
    }
    return res; 
}                   