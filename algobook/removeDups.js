
function removeDups(arr){
    arr = arr.sort((a,b)=> a-b);
    let newArr=[];

    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i + 1]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDups([1,2,2,3,3,3,4])); //1,2,3,4