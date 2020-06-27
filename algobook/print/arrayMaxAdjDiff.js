

function arrayMaxAdjDiff(arr){
    let maxDiff = Math.abs(arr[0] - arr[1]);
    
    for(let i=0; i<arr.length; i++){
        let absDiff = Math.abs(arr[i-1] - arr[i]);
        maxDiff = absDiff > maxDiff ? absDiff : maxDiff;
    }
    
    return maxDiff;
}

console.log(arrayMaxAdjDiff([2,4,1,0]));