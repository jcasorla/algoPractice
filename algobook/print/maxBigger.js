// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 7210




function maxBigger(n){
    let num = n.toString().split('').sort((a,b)=> b-a).join('');
    return parseInt(num);   
  }

console.log(maxBigger(2017));
console.log(maxBigger(1999));

