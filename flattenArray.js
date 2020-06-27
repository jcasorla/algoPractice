
function flattenArray(arr){
    let newArr =[];

    recurse(arr);

    function recurse(arr){
        arr.forEach(element => {
            if(Array.isArray(element)){
                recurse(element);                
            }
            else{
                newArr.push(element);
            }
        });
    }
  
    return newArr;

}

console.log(flattenArray([1,[2],3,[4,5]]));

console.log(flattenArray([1,[2,[]],3,[[4],5]]));
console.log(flattenArray([[],[[1],[2],6,[7,9]]]));

