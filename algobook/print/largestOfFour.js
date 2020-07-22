
function largestOfFour(doubleArr){
    let res = [0,0,0,0];
    for(let i=0; i<doubleArr.length; i++){
        res[i] = findMax(doubleArr[i]);
    }
    return res;
}

function findMax(arr){
    let max = arr[0];

    arr.forEach(data=>{
        if(data > max) max = data;
    });
    return max;
}

console.log(largestOfFour([[4,5,1,3],[13,2718,26],[32,35,37,39],[1000,1001,857,1]]));