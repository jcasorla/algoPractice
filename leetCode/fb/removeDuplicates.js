/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};


// var removeDuplicates = function(nums) {
//         let len = nums.length;
//         let count = len;
//         let dups = {};
//         for(let i=0; i<len; i++){
//             if(dups.hasOwnProperty(nums[i])){
//                 dups[[nums[i]]] ++;
//                 count --;
//             }else{
//                 dups[[nums[i]]] = 1;
//             }
            
//         }
//         return count;
        
        
//     };