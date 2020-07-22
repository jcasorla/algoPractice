// https://leetcode.com/problems/climbing-stairs/

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */

 //bottom up - tabulazion
var climbStairs = function(n) {
    
    let mem = [];
    mem[0] = 1;
    mem[1] = 2;
    
    for(let i=2; i<n; i++){
        mem[i] = mem[i-1] + mem[i-2];
    }
    
    return mem[n-1];
    
};

//recursive memoization
function climbStairsMEM(n){
    if(n === 0) return 0
    let cache ={1:1,2:2};
    let helper = (num) => {
        if(cache[num]){
            return cache[num];
        }
        cache[num] = helper(num -1) + helper(num - 2);
        return cache[num];
    }
    return helper(n)
}


// var climbStairs = function(n) {
//     if(n === 0) return 0
//     let cache = new Map([[1,1],[2,2]])
//     let helper = (num) => {
//         if(cache.has(num)){
//             return cache.get(num)
//         }
//         let result = helper(num -1) + helper(num - 2)
//         cache.set(num, result)
//         return result
//     }
//     return helper(n)
// };