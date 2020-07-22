

function addOne(arr){
    let carry =1;
    let len =arr.length;
    for(let i = len-1; i>=0; i--){
        let sum = arr[i] +carry;
        if(sum===10) carry=1;
        else carry=0;
        arr[i] = sum % 10;
    }
    if(carry===1) arr.unshift(1);

    return arr;
}

console.log(addOne([1,2,3]));
console.log(addOne([1,9,9]));
console.log(addOne([9,9,9]));