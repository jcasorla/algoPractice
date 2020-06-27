
//firstduplicate
//[1,2,3,1,4,2] => 1
//[5,4,3,5,3,7,2] =>5

//{1:1,2:1,3:1}
function firstduplicate(arr){
    let dict ={};
    for(let i=0; i<arr.length; i++){
        if(dict[arr[i]]){
            return arr[i];
        }else{
            dict[arr[i]] = 1;
        }
    }
    return -1;
}


console.log(firstduplicate([1,2,3,1,4,2]));
console.log(firstduplicate([1,2,3]));
console.log(firstduplicate([5,4,3,5,3,7,2]));

//[5, 4, 3, 5, 3,7,2]
//{5:1,4:1,3:1 }
//5