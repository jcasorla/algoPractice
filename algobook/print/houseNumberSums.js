//[5,1,2,3,0,1,5,0,2] -> 5+1+2+3 = 11

function houseNumberSums(arr){
    let sum =0;
    for(let i =0; i<arr.length; i++){
        if(arr[i] ===0){
            return sum;
        }
        sum+=arr[i];
    }
}

console.log(houseNumberSums([5,1,2,3,0,1,5,0,2] ))