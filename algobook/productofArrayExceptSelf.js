function productOfArrayExceptSelf(arr){
    let n = arr.length;
    let left =[];
    let right =[];
    let output=[];
    left[0] = 1;
    right[n-1] = 1;

    for(let i=1; i<n; i++){
        left[i] = arr[i -1] * left[i-1];
    }

    for(let i=n-2; i>=0; i--){
        right[i] = arr[i +1] * right[i+1];
    }

    for(let i =0; i<n; i++){
        output[i] = left[i] * right[i];
    }

    return output;
}

console.log(productOfArrayExceptSelf([1,2,3,4]));
