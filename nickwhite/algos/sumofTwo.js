
// function sumOfTwo(arr,n){

//     let diff = {};
//     let flag = false;

//     arr.forEach(data=>{
//         let dif = n-data;
//         console.log(data);
//         console.log(dif);
       
       

//         if(!diff.hasOwnProperty(data)) diff[data] = diff;
//         // console.log(data + ' ' + diff[dif]);
//         if(diff.hasOwnProperty(dif)){
//             flag = true;
//             console.log(data);
//         }
//         // console.log(Object.keys(diff));
//         // console.log(Object.values(diff));
//         // console.log(diff[dif]);
//     });

//     // console.log(Object.keys(diff));
   
//     return flag

// }

// // console.log(sumOfTwo([1,2,3,4,5],9));
// console.log(sumOfTwo([1,2,4],8));


// //{1:9}

function sumOfTwo(arr,num){
    let complement ={};

    for(let i=0; i<arr.length; i++){
        let dif = Math.abs(num-arr[i]);
       
        if(complement[dif] ==arr[i]) return true;
        if(!complement[arr[i]]){            
            complement[arr[i]] = dif;
        }
       
    }

    return false;

}

console.log(sumOfTwo([1,2,3,4,5],9));
console.log(sumOfTwo([1,2,4],8));
console.log(sumOfTwo([1,2,4,4],8));


// Approach 2: Two-pass Hash Table (JS object)

// var twoSum = function(nums, target) {
//     const indices = {};

//     nums.forEach((item, index) => {
//         indices[item] = index
//     });

//     for (let index = 0; index < nums.length; index++) {
//         const complement = target - nums[index];

//         if (indices[complement] !== undefined && indices[complement] !== index) {
//             return [index, indices[complement]]
//         }
//     }
// };