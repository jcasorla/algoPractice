
function flatten(arr){
    let res = [];
    recurse(arr);
    function recurse(arr){

        for(let i =0; i<arr.length; i++){
            let val = arr[i]
            if(Array.isArray(val)){
                recurse(val);
            }else{
                res.push(val);
            }
        }
    }

    return res;
}

console.log(flatten([[1],[2],3,4,[[5]]]));