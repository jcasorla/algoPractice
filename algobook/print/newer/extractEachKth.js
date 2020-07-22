
function extractEachKth(arr,k){

    return arr.filter(data=>{
        if(data!=3){
            return arr;
        }
    })

}

console.log(extractEachKth([1,2,3,4,5,6,7],3));