// function fib(n){
//     const cache ={};

//     function helper(cur){
//         if(cache[cur]) return cache[cur];
//         if(cur<2) return cur;
//         cache[cur] = helper(cur-1) + helper(cur-2);
//         return Object.keys(cache);
//     }
//     return helper(n);
// }

// console.log(fib(9));


function fibonacci(n){
    if(n <= 2)
       return [0, 1].slice(0, n);
    const res = fibonacci(n - 1);
    res.push(res[res.length - 1] + res[res.length - 2])
    return res;
  }

  console.log(fibonacci(4))