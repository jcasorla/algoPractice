/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let p1 = 0;
    let p2 = height.length -1;
    console.log(p2)
    let max = -Infinity;
    
    while(p1 < p2){
        
        const min = Math.min(height[p1],height[p2]);
        const dist = Math.abs(p1-p2);
        const calc = dist * min;
        console.log(calc)
        max = Math.max(max,calc);
        
        if(height[p1] < height[p2])
            p1++;
        else p2--;
    }
    return max;
    
};

// var maxArea = function(height) {
//     let p1 = 0;
//     let p2 = height.length -1;
//     console.log(p2)
//     let max = -Infinity;
    
//     while(p1 <= p2){
//         max = Math.max(max, Math.min(height[p1], height[p2]) * (p2 - p1));
//         if(height[p1] < height[p2])
//             p1++;
//         else p2--;
//     }
//     return max;
    
// };

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,2,4,3]))


// public class Solution {
//     public int maxArea(int[] height) {
//         int maxarea = 0, l = 0, r = height.length - 1;
//         while (l < r) {
//             maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
//             if (height[l] < height[r])
//                 l++;
//             else
//                 r--;
//         }
//         return maxarea;
//     }
// }