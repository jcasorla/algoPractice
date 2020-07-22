
function fibonacciMemo(n){
    const cache = {};

    function helper(current){
        if(cache[current]) return cache[current];
        if(current < 2) return current;

        cache[current] = helper(current-1) + helper(current-2);
        return cache[current];
    }
   
    return helper(n);
}

console.log(fibonacciMemo(9));

function fib(n){
    if(n < 2) return n;

    return fib(n-1) + fib(n-2);
}

console.log(fib(9));