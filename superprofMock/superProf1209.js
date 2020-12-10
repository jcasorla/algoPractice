
//implement quicksort

//array of numbers order them in zigzag


//a<b>c<d

//[1,9,2,4,7,6]
//[1,2,4,6,7,9]
//     x x 
//       x
//[1,9,2,7,4,6]
//1,2,3,4,5
//  x x

//[1,2,4,6,7,9]
//     

//1,2,3,4,5
//    xx 
function zigzag(arr){
  if(!arr.length){
  	return 'empty';
  }
	arr = arr.sort((a,b)=>(a-b));
  
  let l = 0;
  let r = arr.length-1;
  let res = [];
  while(l<=r){
    if(l===r){
    	res.push(arr[l]);//3
    }else{
    	res.push(arr[l]);//1,2,4 | 1,2
    	res.push(arr[r]);//9,7,6 | 5,4
    }

  	l++;
    r--;
  }
  return res;//[1,9,2,7,4,6] | [1,5,2,4,3]
}
console.log(zigzag([1,2,4,6,7,9]));
console.log(zigzag([1,2,3,4,5]));


//2 string are they


//'2345' original
//'3425' no valido
//'3452' valido

//2345
//3425
//    x
function isAlias(str1,str2){
  let c = 0;
  for(let i = 0; i < str1.length; i++){
  	if(str1[i] === str2[i]){
    	return false;
    }
    c++;
  }
  return !str2[c] ? true : false;  
	
}


function isAlias(str1,str2){
  let c = 0;
  for(let i = 0; i < str1.length; i++){
  	if(str1[i] === str2[i]){
    	return false;
    }
    if(!str1.includes(str2[i]))//
         return false;
    c++;
  }
  return !str2[c] ? true : false;  
	
}

console.log(isAlias('2345','3425'));
console.log(isAlias('2345','34217'));
console.log(isAlias('2345','3421'));
console.log(isAlias('234','342'));