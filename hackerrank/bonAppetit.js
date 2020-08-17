
function bonAppetit(bills,k,b){
    let sum=0;
    for(val of bills){
        sum+=val;
    }    
    sum -= bills[k];
    let res = sum /2;
    return res === b ? 'Bon Appetit' : b - res;
}

console.log(bonAppetit([3,10,2,9],1,12));
console.log(bonAppetit([3,10,2,9],1,7));
