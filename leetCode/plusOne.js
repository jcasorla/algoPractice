/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
 * @param {number[]} digits
 * @return {number[]}
 */
//first attempt
// var plusOne = function(digits) {
//     let len = digits.length;
//     let carry = 0;
    
//     for(let i = len-1; i >= 0; i++){
//         digits[i] = digits[i] + 1 + carry;
//         carry = 0;
//         console.log(digits[i])
//         if(digits[i] >=10){
//             carry = 1;
//             digits[i] = 0;
//         }else
//             break;
//     }
//     if(carry >0){
//         digits.unshift(carry);
//     }
//     return digits;
    
// };


//works but needs cleanup
// /**

//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function(digits) {
//     let len = digits.length;
//     let carry = 0;
//     digits[len - 1] +=1;
//     let loop = false;
//     console.log(digits[len-1])
//     if(digits[len-1] ===10){
//         carry = 1;
//         digits[len-1] = 0;
//         loop = true;
//     }
    
//     if(loop){
//         console.log(len-2)
//         for(let i = len-2; i >= 0; i--){
//             digits[i] += carry;
//             carry = 0;
//             console.log(digits[i])
//             if(digits[i] ===10){
//                 carry = 1;
//                 digits[i] = 0;
//             }else
//                 break;
//         }

//     }
   
//     if(carry >0){
//         digits.unshift(carry);
//     }
//     return digits;
  
    
// };

/**
 * after cleanup
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length;
    let carry = 0;
    digits[len - 1] +=1;
    carryOver(len-1);
    
    if(carry>0){
        for(let i = len-2; i >= 0; i--){
            digits[i] += carry;
            carry = 0;
            carryOver(i);
            if(carry===0)
                break;           
        }

    }
   
    if(carry >0){
        digits.unshift(carry);
    }
    return digits;
  
    function carryOver(idx){
        if(digits[idx] ===10){
            carry = 1;
            digits[idx] = 0;
        }
    }
};


console.log(plusOne([9]));
console.log(plusOne([0]));
console.log(plusOne([9,9,9]));
console.log(plusOne([4,4,3]));