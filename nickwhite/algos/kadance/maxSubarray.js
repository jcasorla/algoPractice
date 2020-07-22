//https://www.youtube.com/watch?v=86CQq3pKSUw

function maxSumSubArray(arr){
    let maxCur = arr[0];
    let globalMax = maxCur;

    for(let i=1; i<arr.length; i++){
        maxCur = Math.max(arr[i], arr[i] + maxCur); 
        globalMax = maxCur > globalMax ? maxCur : globalMax;      
    }    
    return globalMax;
}

console.log(maxSumSubArray([1,-3,2,1,-1]));