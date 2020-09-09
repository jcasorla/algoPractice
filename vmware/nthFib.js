
function nthFib(n){
    if(n<=2){
        return n-1;
    }

    return nthFib(n-1) + nthFib (n=2);
}

console.log(nthFib(5));
