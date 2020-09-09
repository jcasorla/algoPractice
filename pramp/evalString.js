7
// Implement a function to evaluate an expression string. The expression string may contain the plus + or minus sign -, non-negative integers.
// Assume that the given expression is always valid.

// Examples =>
// "2" = 2
// "2+3" = 5
// "3-5" = -2
// "2-7+3" = -2
// "200-100" = 100

// Note: Do not use the built-in library functions like eval(python) etc.

//2+3 =5
//3 -=5 = -2
//2-=7=  -5 + 3 = -2
// .
function evalString(str){
    let len = str.length;
    let result =-1; 
    let num ='';
    for(let i=0; i<len; i++){ 
      let val = str[i];       
      
      if(val ==='+'){
          let sub = str.substr(i+1,len);
          next = convNum(sub);
        if(result ===-1){
            result =parseInt(num) + parseInt(next[0]);
        }else{
            result += parseInt(next[0]);
        }
        
        i+=next[1];
        exp = '+';
      }else if(val ==='-'){
        let sub = str.substr(i+1,len);
        next = convNum(sub);
        exp = '-';
        if(result ===-1){
            result =parseInt(num) - parseInt(next[0]);
        }else{
            result -= parseInt(next[0]);
        }
        
        i+=next[1];
      }else{
        
        // concat to num
        let sub = str.substr(i,len);
        let tmp = convNum(sub);
        i+=tmp[1] -1;
        num = tmp[0];
        if(tmp[2] === true && result===-1){
            return num;
        }
      }
    
    }   
    
    return result;    
    
  }

  function convNum(sub){
      let i=0;
      let res ='';
      while(i<sub.length){
          if(sub[i] !== '-' && sub[i] !=='+'){
            res+=sub[i];
          }          
            else{
                return [res,i];
            }
                
        i++;
      }
      return [res,i,true];
  }

//   function evalString(str){
//     let exp = str.split(/[0-9]/).join('');
//     let arr = str.split(/[^0-9]/);        
//     let result =-1;
//     let j =0;
//     if(exp.length ===0)
//         return arr.join('');

//     for(let i =0; i<arr.length-1; i++){
//         if(exp[j] === '+'){
//             if(result === -1){
//                 result = parseInt(arr[i]) + parseInt(arr[i+1]);
//             }else{
//                 result +=parseInt(arr[i+1]);
//             }
            
//             j++;
//         }else if(exp[j] === '-'){
//             if(result === -1){
//                 result = parseInt(arr[i]) - parseInt(arr[i+1]);
//             }else{
//                 result -=parseInt(arr[i+1]);
//             }
           
//             j++;            
//         }
//     }
    
    
//     return result;   
    
//   }
  
  console.log(evalString('3'));
  console.log(evalString('2+3'));
  console.log(evalString('2+32'));
  console.log(evalString('2-7+3'));
  console.log(evalString('200-100'));
  
  //20-25 minute question