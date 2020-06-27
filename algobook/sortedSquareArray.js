
function sortedSquareArray(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]*=arr[i];
    }
    return arr.sort((a,b)=>a-b);
}

console.log(sortedSquareArray([-7,-4,1,2,3]));