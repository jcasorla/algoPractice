
function chunk(arr,k){
    let res = [[]];    

    let i =0; 
    while(i < arr.length){
        let data = arr[i];
        let last = res[res.length-1];
        if(last.length<=k-1){
            last.push(data);
            i++;            
        }else{
            res.push([]);
        }
    }

    return res;
}
console.log(chunk([1,2,3,4,5],3));

//3