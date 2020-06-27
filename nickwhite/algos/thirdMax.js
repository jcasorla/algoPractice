// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

// Example 1:

// Input: [3, 2, 1]

// Output: 1

// Explanation: The third maximum is 1.

// Example 2:

// Input: [1, 2]

// Output: 2

// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

// Example 3:

// Input: [2, 2, 3, 1]

// Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

var thirdMax = function(nums) {

    let firstMax = null;
    let secondMax =  null;
    let thirdMax =  null;
    
    //bumping down the values
    for(let i = 0; i < nums.length; i++){
        //if the values are duplicates, we can just skip the iteratation. [2,2,...]
        if(firstMax === nums[i] || secondMax === nums[i] || thirdMax === nums[i])
            continue;
        
        if(firstMax === null || firstMax < nums[i]){
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = nums[i];
        }
        else if(secondMax === null || secondMax < nums[i]){
            thirdMax = secondMax;
            secondMax = nums[i];
        }
        else if(thirdMax === null || thirdMax < nums[i]){
            thirdMax = nums[i];
        }
    }
    return thirdMax === null? firstMax : thirdMax;
};