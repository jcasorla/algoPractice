
function extractColumn(arr){
    let res =[];
    for(let i=0; i<arr.length; i++){
        res.push(arr[i][2]);
    }
    return res;
}

console.log(extractColumn([[1,1,1,2],[0,5,0,4],[2,1,3,6]]));