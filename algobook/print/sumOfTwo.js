
function sumOfTwo(a,b, v){
    let hash ={};

    for(let num of a){
        let diff = v - num;
        hash[diff] = diff;  
    }

    for(let num of b){
        if(hash[num]){
            return true
        }
    }

    return false;
}

console.log(sumOfTwo([1,2,3], [10,20,30,40], 42));