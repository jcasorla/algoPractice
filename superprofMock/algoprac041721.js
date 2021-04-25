

/**
	palingdrome
  
  sss
  ccccccc
  
  racecar
     x
  retrar
   x  x
   
   p1 = start
   p2 = end
   
   loop compare start === end
   p2--
   
   0123456
   racecar
     x x 
     
     
     racecar
     
     4
     aaaabbbbccc
             x
               x
      
  
*/


function palindrome(str){//racecar
	const len str.length;//6
  let p1=0;
  let p2 = len-1;//6
  
  while(p1<p2){//p1: 0,1,2,3,4 , p2:6,5,4,3,2
    const val1 = str[p1];//r, a, c, e
    const val2 = str[p2];//r, a, c, e
    
    if(val1 !== val2) return false;
    
    p1++, p2--;
  	
  }
  return true; //true
}

//easy
	//{a:4.b:5,c:3}
 //01234567891011
 //aaaabbbbbccc
 //         x
 //           x

///accc
//   x
//   x
//aabbbc

function findlongestsubsame(str){
	let p1 =0, p2=0;
  let len = str.length;
  
  let max = -Infinity;//4,5
  let maxChar ='';//a,b
  
  while(p2 < len){
  	const char1 =str[p1];//a,b,c
    
    while(str[p2] === char1){//a,a,a,a,b,b,b,b,b,c
    	p2++;//0,1,2,3,4,5,6,7,8,9
      if(max < str.slice(p1,p2).length){
      	max = str.slice(p1,p2).length;
        maxChar = char1;
      }
    }
    p1 = p2;//b   
    
  }
  
  return maxChar;//b
}


//find the longest palingdrome substring
/**
	rrrbbbbbbccc
     
     y   
	rrrrrrrrrr
  
  
  
  x
  y
  
  helper palindrom function
  initate empty res var
  two pointers at begginng of str.
 	while loop checking if:
  	-res < window & window is palindrom, set res to substring
  
*/

//rrbbbc
//     x
//     y


//0(n)2
var longestPalindromSub = function(str){
  let res = '';//
  for(let i = 0; i < str.length; i++){ //r 
  	for(let j = i; j < str.length; j++){//r
    	let s = str.splice(i, j + 1);//r, r
      if(res.length < s.length && isPalindrom(s){
         	res = s;// rr, 
      } else{
				break;      
      }
    }
  }
  return res.length;
}




let isPalindrom = (str) => {
  let left = 0;
  let right = str.length -1;
  while(left < right){
    if(str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}




