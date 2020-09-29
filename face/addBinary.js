/**
 * https://leetcode.com/problems/add-binary/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

/**
    Input: a = "1010", b = "1011"
    Output: "10101"
    
    1010
    1011
    10101 
    
    101
    001
     110
    c: 0
    
    111
    N11
   1010
      
    c:1
    
    case for when there is only one value to add
*/
// var addBinary = function(a, b) {
//     let sum ='';
    
//     let i = a.length-1;
//     let j = b.length-1;
//     let carry = 0;
//     while(i >=0 || j >=0){
//         if(a[i] ===1 && b[j] ===1){
//             sum+=0;
//             carry = 1;
//             i++;
//             j++;
//         }else if((a[i] === 0 && b[j] ===1) || (a[i] === 1 && b[j] ===0)){
//             //0+1 = 1
//             sum = sum + 1 + carry;
//             carry=0;
//             i++;
//             j++;
//         }else if(a[i] === undefined){
//             //
//             sum = sum + b[j] + carry;
//             carry = 0;
//             j++;
//         }else if(b[j] === undefined){
//             sum= sum + a[i] + carry;
//             carry =0;
//             i++;
//         }
//         else{
//             //0 +0 = 0
//             // 0+0 + carry
//             //carry reset
//             sum = sum + 0 + carry;
//             carry =0;
//             i++;
//             j++;
//         }
//     }
    
//     return sum;
// };

// var addBinary = function(a, b) {
//     let i = a.length - 1, 
//         j = b.length - 1,
//         carry = 0, 
//         result = [];//1010
//     while(i >= 0 || j >= 0) {
//       let n1 = +a[i] || 0; //+a[i] is the same as parseInt(a[i])
//       let n2 = +b[j] || 0;
//       let sum = n1 + n2 + carry;
//       if(sum === 0) {
//         result.unshift(0);
//         carry = 0;
//       } else if(sum === 1) {
//         result.unshift(1);
//          carry = 0;
//       } else if(sum === 2) {
//         result.unshift(0);
//         carry = 1;
//       } else if(sum === 3) {
//         result.unshift(1);
//         carry = 1;
//       }
//       i--;
//       j--; 
//     }
//     if(carry) {
//       result.unshift(1);
//     }
//     return result.join("");
//   };
    

var addBinary = function(a, b) {
    let res = [];    
    let i = a.length-1;
    let j = b.length-1;
    let carry = 0;
    while(i >=0 || j >=0){
        const n1 = parseInt(a[i]) || 0;
        const n2 = parseInt(b[j]) || 0;
        const sum = n1 + n2 + carry;
        
        if(sum === 0){
            res.unshift(0);
            carry = 0;
        }else if(sum === 1){
            res.unshift(1);
            carry = 0;
        }else if(sum === 2){
            res.unshift(0);
            carry = 1;
        }else if(sum === 3){
            res.unshift(1);
            carry = 1;
        }
        i--; 
        j--;

    }
    
    if(carry){
        res.unshift(1);
    }
    
    return res.join('');
};

  console.log(addBinary('111','11'));

//   function addBinary(a,b){
//     let result = ''
//     let carry = 0
//     // Let's padding the shorter string if they are of different length
//     let str1 = a.padStart(b.length, '0') 
//     let str2 = b.padStart(a.length, '0')
//     //iterate from the back
//     for(let i=str1.length-1; i>= 0; i--) {
//       let charResult = Number(str1[i]) + Number(str2[i])
//       //3 possible sums
//       if (charResult === 0) charResult = 0
//       else if (charResult === 2) charResult = 10
//       else charResult = 1
      
//       charResult = carry + charResult
//       //4 different possibilities if there is a carry num
//       if(charResult === 0){
//         carry = 0
//         charResult = '0'
//       }else if(charResult === 11) {
//         carry = 1
//         charResult = '1'
//       }else if(charResult === 10 || charResult === 2){
//         carry = 1
//         charResult = '0'
//       }else {
//         carry = 0
//         charResult = '1'
//       }
//       //prepend new result to previous result
//       result= charResult + result
//     }
//     if(carry) result= carry + result
//     return result
//   }

//   var addBinary = function(a, b) {
// 	/*initialize my return value as a string*/
//     var retSum = ""; 
// 	/*set runners for both a and b, starting at the last character of the string*/
//     var apos = a.length -1, bpos = b.length -1;
// 	/*boolean for whether we have a value being carried from the previous position*/
//     var carry = false;
	
// 	/*function that uses a temp, adding to it if their is a carry, or if either digit is a one, then carrying on, if needed*/
//     var binarySum = function(pos1, pos2){
//         let temp = 0;
//         if (carry){
//             temp++;
//             carry = false;
//         }
//         if (pos1 >= 0 && a[pos1] === "1"){ temp++ }
//         if (pos2 >= 0 && b[pos2] === "1"){ temp++ }
//         if (temp >= 2){
//             carry = true;
//             temp = temp -2;
//         }
//         return temp;
//     }
// 	/* loop keeps running while either a or b still have digits to handle */
//     while (apos >= 0 || bpos >= 0){
//         retSum = binarySum(apos, bpos) + retSum;
//         apos--;
//         bpos--;
//     }
// 	/*catch any remaining carries out there*/
//     if (carry){
//         retSum = "1" + retSum;
//     }
//     return retSum;
// };


// var addBinary = function(a, b) {
//     var sum = [];
// 	var carry = 0;
	
//     var reversedA = a.split('').reverse().join('');
//     var reversedB = b.split('').reverse().join('');
    
//     for (var i = 0; i < a.length || i < b.length || carry > 0; i++) {
//         var currentA = Number(reversedA[i] || 0);
//         var currentB = Number(reversedB[i] || 0);
//         var currentSum = currentA + currentB + carry;
//         var result = currentSum % 2;
        
//         carry = currentSum > 1 ? 1 : 0;
//         sum.push(result);
//     }

//     return sum.reverse().join('')
// }