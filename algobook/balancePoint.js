
function balancePoint(arr){
    let sum=0;
    let comp=arr[arr.length-1];

    for(let i=0; i<arr.length-1; i++){
        sum+=arr[i];
    }    
    if(sum==comp){
        return true;
    }

    return false;
}

console.log(balancePoint([1,2,3,4,10]));


function balancePoint(arr){
    let sum=0;
    let comp=arr[arr.length-1];

    for(let i=0; i<arr.length-1; i++){
        sum+=arr[i];
        if(sum==arr[i+1]){
            return true;
        }
    }    
  

    return false;
}

console.log(balancePoint([1,2,3,4,10]));