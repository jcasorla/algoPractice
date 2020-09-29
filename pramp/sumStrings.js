/*
Given two binary strings, return their sum (also a binary string).

Example:
Input:  a = "27272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727", b = "12"
Output: "39" 

a. 227
b.  12

  239
  
a.   2
b. 222

  224

2777
  12

999
  1
  
999
 99
1098
  
  0
----------  
  27
   2
  29
  
  * for ( p1 = length -1, p2...)
  
  127 
    0
    
    1
    1
*/

// function sumNum(a,b){ // a= 127, b = 4
//     let sum =''; //31
     
//     let p1 = a.length-1;
//     let p2 = b.length-1;
//     let carry = 0;
    
//     while(p1 >= 0 || p2 >= 0){
//       let localSum =0;
//       //p1: 1 0 | 2 1 0
//       //p2: 0 -1  0 -1 -2 
//       if(a[p1] && b[p2]){//2 , 7 | 2  | 7,4
//         if(carry!=0){
//           localSum = parseInt(a[p1]) + parseInt(b[p2]) + carry;
//           carry=0;
//         }else{ 
//           localSum = parseInt(a[p1]) + parseInt(b[p2]); //11
          
//         }
        
//         if(localSum >=10){
//           carry = 1;
//           localSum -=10;
//         }
//         sum+=localSum; //'9' | 1
//         p1--, p2--;    
//       }else if(a[p1] && b[p2] === null){ //2, null | 2, null | 1 null
//         if(carry !=0){
//           localSum += a[p1] + carry;//3
//           carry=0;
//           if(localSum >=10){
//             carry = 1;
//             localSum -=10;
//           }
//         }else{
//           localSum += a[p1]; // 2
//         }
        
//         // sum+= localSum; //92 ->29
//         sum = localSum + sum;
//         // let temp =sum;//9
//         // sum = localSum; //2
//         // sum+= temp; //29
//         p1--;  
//       }else{
//         if(carry !=0){
//           localSum += a[p1] + carry;
//           carry=0;
//           if(localSum >=10){
//             carry = 1;
//             localSum -=10;
//           }
//         }
//         sum+= localSum;
//         p2--;
//       }
      
      
    
//     }
//     return sum;
    
//   }

function sumNum(a,b){
  let sum ='';  
  let p1 = a.length-1;
  let p2 = b.length-1;
  let carry = 0;
  let outcome = [];
  while(p1 >= 0 || p2 >= 0){
    let localSum =0;
    if(a[p1] && b[p2]){
      localSum = addOne(parseInt(a[p1]),parseInt(b[p2]),carry);
      p1--;
      p2--;   
    }else if(a[p1] && !b[p2]){
      localSum = addOne(parseInt(a[p1]),0,carry);
      p1--;  
    }else{
      localSum = addOne(0,parseInt(b[p2]),carry);
      p2--;
    } 
    outcome = carrySum(localSum);
    localSum = outcome[0];
    carry = outcome[1];
    sum = realSum(sum,localSum); 
  }
  return sum;
  
}

function addOne(n1,n2,carry){
  return parseInt(n1) + parseInt(n2) + carry;
}

function carrySum(sum){
  return sum >=10 ? [sum-=10,1] : [sum,0];
}

function realSum(sum,local){
  return local + sum;
}

console.log(sumNum('133','23'));
console.log(sumNum('139','23'));
console.log(sumNum('23','139'));