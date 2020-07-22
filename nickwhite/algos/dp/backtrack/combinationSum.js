
/*
    https://leetcode.com/problems/combination-sum-ii/
    Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

    Each number in candidates may only be used once in the combination.

    Note:

    All numbers (including target) will be positive integers.
    The solution set must not contain duplicate combinations.
    Example 1:

    Input: candidates = [10,1,2,7,6,1,5], target = 8,
    A solution set is:
    [
    [1, 7],
    [1, 2, 5],
    [2, 6],
    [1, 1, 6]
    ]
    Example 2:

    Input: candidates = [2,5,2,1,2], target = 5,
    A solution set is:
    [
    [1,2,2],
    [5]
    ]
*/

var combinationSum = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);
    
    function permute(arr=[], sum=0, idx=0) {
        if(sum > target) return;
        if(sum === target) result.push(arr);
        const visited = new Set();
        
        for(let i = idx; i < candidates.length; i++) {
            if(visited.has(candidates[i])) continue;
            permute([...arr, candidates[i]], sum+candidates[i], i + 1)
            visited.add(candidates[i]);
        }
    }
    permute();
    return result;
};

console.log(combinationSum([10,1,2,7,6,1,5],8));