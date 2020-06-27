

function arrayPrevLess(arr){
    let n = arr.length;
    for(let i = n-1; i>=1; i--){
        arr[i] = arr[i] < arr[i-1] ? -1 : arr[i-1]
    }

    arr[0] = -1;
    return arr;
}

console.log(arrayPrevLess([3,5,2,4,5]));