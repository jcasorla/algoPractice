function sockMerchant(n, ar) {
    let pair ={};
    for(let i=0; i<n; i++){
        if(pair[ar[i]]){
           pair[ar[i]]+=1; 
        }
        else{
            pair[ar[i]]=1;
        }
    }
    let res=0;;
    for(let key in pair){
        if(pair[key] %2==1){
            res +=  Math.round((pair[key]-1)/2)
        }else{
            res += Math.round(pair[key]/2)
        }

    }

    return res;

}

console.log(sockMerchant(10,[10,20,20,10,10,30,50,10,20]));

//1 1 3 1 2 1 3 3 3 3

// 100
// 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 
// 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42
// 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 
// 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42 42