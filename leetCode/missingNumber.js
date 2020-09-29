/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    if(nums.length===1){
        if(nums[0] === 1){
            return 0;
        }else{
            return nums[0]+1;
        }
    }
    let found = [];
    let max = -Infinity;
    let min = Infinity;
    for(let i =0; i<nums.length; i++){
        let num = nums[i];
        if(num >max){
            max = num;
        }
        if(num < min){
            min = num;
        }
    }
    
    for(let i =min; i<=max; i++){
        found.push(i);
    }
    for(let num in found){
        if(!nums.includes(parseInt(num))){
            return num;
        }
    }
    return max+1;
//     // 3,0,1 -> 0,1,3
//     let found = {};
//     let max = -Infinity;
//     // if(nums.length ===1) return nums[0]+1;
//     for(let i =0; i<nums.length; i++){
//         let num = nums[i];
//         if(num >max){
//             max = num;
//         }
//     }
//     for(let i =0; i<nums.length; i++){
//         let num = nums[i];
//         if(num !== max) found[num+1] = true;       
       
//     }
   
    
//     for(let key in found){
//         console.log(key)
//        if(!nums.includes(parseInt(key))) {          
//             return key;
//         }
//     }
//     return -1;
};


// var missingNumber = function(nums) {
//     nums.sort((a,b)=>a-b);
//     if (nums[0] !== 0) return 0;
//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i]+1 !== nums[i+1]) {
//             return i+1;
//         }
//     }
// };


// //Set Solution
// var missingNumber = function(nums) {
//     let numSet = new Set(nums)
//     for(let i=0; i<=nums.length; i++){
//         if(! numSet.has(i)){
//             return i
//         }
//     }
// };

// //Gauss' Formula Solution
// var missingNumber = function(nums) {
//     let sum = 0
//     nums.forEach(num => sum += num)
// 	let expectedSum = nums.length*(nums.length + 1) / 2
//     return expectedSum - sum
// };

// var missingNumber = function(nums) {
//     let actualSum = nums.length;
//     let sum = 0;
//     for(let i=0; i<nums.length; i++){
//         actualSum = actualSum + i;
//         sum = sum+nums[i]
//     }
//     return actualSum -sum;
// };


// var missingNumber = function(nums) {
//     let missing = 0
//     let sum1 = 0
//     let sum2 = 0
//     for(let i = 0;i<nums.length;i++){
//       sum1+= nums[i]
//       sum2+=i+1
//     }
    
//     return sum2 - sum1
// };