// sucecion de fibonacci
 /**
	1 1  | 2 3 5 8 13 21 34 ...
  
  n <= 1 = 1
  n>1
  rec(n) = rec(n-1) + rec(n-2)
 */

function fib(n){ //o(n!)
	if(n <= 1) return 1;
  
  return fib(n-1) + fib(n-2);
}
//memoization
//0(n) | 0(n)
function fib(n){
	const cache = {};
  
  function helper(n){
  	if(n <=1) return 1;
    if(n in cache) return cache[n];
    cache(n) = helper(n-1) + helper(n-2);
    return cache[n];   
    
  }
  return helper(n); 
  
}


/* 
	Voltear string.
  "hola" -> "aloh"
*/

function reverseStr(str){
  const stack = ();
  
  for(let i =0; i < str.length; i++){
  	const ch = str[i];
    stack.push(ch);
  }
  let newStr = '';
  while(stack.length >0){
  	newStr = stack.pop();
  }
  return newStr;
}

function reverseStrRec(str,i = -1){
	if(i === str.length) return;
  
  //return reverseStrRec(str,i+1);
  
  
}
anb
[]
bna

// n => n
// na => an
// anb => bna
// erqt => tqre

