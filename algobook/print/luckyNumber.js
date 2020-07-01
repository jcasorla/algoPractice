//https://leetcode.com/problems/happy-numbe

/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n) {
//     let hash ={};
    
//     while(n != 1){
        
//         let current = n;
//         let sum=0;
        
//         while(current != 0){
//             sum += (current % 10) * (current % 10);
//             current /= 10;
//         }
        
//         if(hash[sum]){
//             return false;
//         }
        
//         hash[sum] = 1;
//         n=sum
        
//     }
//     return true;
    
// };


//https://leetcode.com/problems/happy-number/discuss/56956/My-straightforward-solution-in-JS/176850/
var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}