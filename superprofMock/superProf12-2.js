//how to swap 2 variables without using temp
//j = 1, i = 2
//https://www.youtube.com/watch?v=ufLSGCZEPrg
let a = 1;
let b = 2;

[a, b] = [b, a];
a; // => 2
b; // => 1

//reverse a string using recursion
//str = 'hello'
function reverseStr(str, i){
	if(!str[i]){
  	return '';
  }
  return reverseStr(str,i+1) + str[i];
  
}
console.log(reverseStr('hello', 0));



function reverseStr(str){
  let i =str.length-1;
  let reversed = ''

	function recurse(str,i){
  	if(!str[i]){
    	return;
    }
    reversed+=str[i];
    console.log(str[i]);//h e l l o
    recurse(str,i-1);
  }
  recurse(str,i);
  return reversed;

}

console.log(reverseStr('hello'));

//array of numbers remove all dups without using libraries

function removeDups(arr){
  const map = {};
  
  arr.forEach(data=>{
  	if(map.hasOwnProperty(data)){
    	map[data] +=1;
    }else{
    	map[data] =1;
    }
  });
  
  return Object.keys(map);
	
}

console.log(removeDups([1,2,1,3,2]))//[1,2,3];


function removeDups(arr){
  const map = {};
  
  arr.forEach(data=>{
  	if(map.hasOwnProperty(data)){
    	map[data] +=1;
    }else{
    	map[data] =1;
    }
  });
  
  let res  = Object.keys(map);
    
  for(let i =0; i < res.length; i++){
      res[i] = parseInt(res[i]);
  }
    return res;
	
}

console.log(removeDups([1,2,1,3,2]))//[1,2,3];

function removeDups2(arr){
  
  let uniqueSet = new Set(arr);//dups1,2,3
  
  return [...uniqueSet];


}
//ES6

console.log(removeDups([1,2,1,3,2]))//[1,2,3];

//https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c