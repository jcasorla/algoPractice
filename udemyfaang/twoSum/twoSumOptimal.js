const numsArray = [1,3,7,9,2];
const targetToFind = 11;

const findTwoSum = function(nums, target) {
  const numsMap = {};
  
  for(let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];

    if(currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }

  return null;
}

console.log(findTwoSum(numsArray, targetToFind));


function twoSum(arr,val){
    const map = {};
    let res = [];
    
    for(let num of arr){
        let dif = val - num;
        if(map.hasOwnProperty(dif){
           const chunk = [];
           chunk.push(num)
            chunk.push(dif)
            res.push(chunk)
        }
        map[dif] = num;
    }
    return res;
}