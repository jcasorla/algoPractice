
function almostIncreaseSeq(arr){
    let count =0;

    for(let i =0; i < arr.length; i++){
        if(arr[i] <= [i-1]){
            count++;
            if(arr[i] <= arr[i-2] && arr[i+1] <= arr[i-1]){
                return false;
            }
        }
    }

    return count <= 1;

}


console.log(almostIncreaseSeq([1,3,1,1]));
console.log(almostIncreaseSeq([1,3,2]));