


function flatten(arr){
    let finalarr =[];
    recurse(arr);

    function recurse(arr){
        arr.forEach(element => {
            if(Array.isArray(element)){
                recurse(element);
            }else{
                finalarr.push(element);
            }
        });
    }
    return finalarr;
}

console.log(flatten([[1,2],[3],4])); //[1,2,3,4] 
console.log(flatten([[1],[[2]]])); //[1,2]

//[[1,2],[3],4]
// [1,2]
// [3]

// [1,2,3,4]