

function circleNumbers(n, start){
    const numArray = [];
    const halfWay = n/2;
    for(let i =0; i < n; i++){
        numArray.push(i);
    }
    if(start < halfWay){
        return numArray[start + halfWay];
    }
    return numArray[start - halfWay];
}

console.log(circleNumbers(12,12));
console.log(circleNumbers(12,7));