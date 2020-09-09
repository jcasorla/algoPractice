
function chunkyMonkey(arr,size){
    const nested = [];
    let count =0;

    while(count<arr.length){
        // console.log(count)
        // console.log(arr.slice(count,count+=size))
        nested.push(arr.slice(count, count +=size));
        // console.log(count);
    }

    return nested;
}

console.log(chunkyMonkey([0,1,2,3,4,5,6],4))