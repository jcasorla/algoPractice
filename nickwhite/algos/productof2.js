

function productOf2(arr,num){
    let complement ={};

    for(let i=0; i<arr.length; i++){
        let dif = num /arr[i];
       
        if(complement[dif] ==arr[i]) return true;
        if(!complement[arr[i]]){
            
            complement[arr[i]] = dif;
        }
       
    }

    return false;


}

console.log(productOf2([1,2,3,4,5],20));
console.log(productOf2([1,2,3,4,5],25));