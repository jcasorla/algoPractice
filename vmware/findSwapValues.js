
function findSwapValues(arrA,arrB){
    let sumA = findSum(arrA);
    let sumB = findSum(arrB);
    let dif = Math.abs(sumA - sumB);
    for(let i=0; i<arrA.length; i++){
        let x = arrA[i];
        let y = x * 2;
        y+=dif;
        y/=2;
        if(arrB.includes(y)){
            console.log(x,y);
        }
    }
}
function findSum(arr){
    let sum = 0;
    arr.forEach(data=>{
        sum+=data;
    });
    return sum;
}

findSwapValues([4,1,2,1,1,2],[3,6,3,3])