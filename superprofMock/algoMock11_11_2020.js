/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/
//anagrams
//sam, mas

//fun 
//sort 
// s1.sort() === s2.sort()
//true

//log n

//sam, mas
//dict = {s:1,a:1,m:1}
//dict[char] -=1;
//for(let key of dict)
 //    let val = dict[key]
//    if(val >0)
//        false
// return true
// constant time

/**
function isAnagram(s1,s2){
    let map = {};
    
    for(let i = 0; i < s1.length; i++){
        let char = s1[i];
        if(map.hasOwnProperty(char)){
            map[char] +=1;
        }else{
            map[char] = 1;
        }
    }
    
    for(let i = 0; i < s2.length; i++){
        let char = s2[i];
        if(map.hasOwnProperty(char)){
            map[char] -=1;
        }
    }
    
    for(let key in map){
        let val = map[key];
        if(val > 0)
            return false;
    }
    
    return true;
    
    
    
}

console.log(isAnagram('sam', 'mas'));
console.log(isAnagram('sam', 'mds'));

*/

//bublesort
//o(n)2

//[4,5,6,1,2,3]
//[4,5,6,1,2,3]
//[4,5,1,2,3,6]
// swap true
//[4,5,]
//[]
//[1,2,3,4,5,6]
//len = 5
//[ 4, 1, 2, 3, 5, 6 ]
let nums = [4,5,6,1,2,3]//
let swap = true;
do{
    swap = false;
    for(let i = 0; i < nums.length -1; i++){
        
        if(nums[i] > nums[i+1]){
            let temp = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = temp;
            swap = true;
        }
        
    }

}while(swap)
    
console.log(nums)








 



