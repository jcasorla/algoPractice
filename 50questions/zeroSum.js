function zeroSum(arr){

    let sum =0;
    let map = {};
    for(let i=0; i<=arr.length; i++){        
        if(!map.hasOwnProperty(sum) && i===arr.length){
            return false;
        }else if(map.hasOwnProperty(sum)){
            return arr.slice(map[sum], i);
        }else{
            map[sum] = i;
            sum+=arr[i];
        }
    }
    return false;
}

console.log(zeroSum([1,2,-5,1,2,-1]));
console.log(zeroSum([1,-1]));
console.log(zeroSum([5,-2,-3]));