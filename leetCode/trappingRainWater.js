/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     let l=0, r=1, len = height.length;
//     let max = -Infinity;
    
//     while(r < len){
        
//         let sum =0;
//         let area = 0;
        
//         if(height[l+1] > height[l]){
//             l++;
//             r++;
//         }
        
//         while(height[r] < height[l]){
//             sum+=height[r];
//             console.log(height[r])
//             console.log(sum)
//             r++;
//         }
//         let min = Math.min(height[r],height[l]);
//         // let max = Math.max(height[r],height[l]);
//         console.log(min)
//         // console.log(max)
//         area = Math.abs(l-r) -1;
//         console.log(area)
//         area *= min;
//         console.log(area)
//         // sum-=height[r];
//         console.log(sum)
//         area-=sum;
//         console.log(sum)
//         console.log(area)
//         max = Math.max(area,max);
//         console.log(max)
        
//         l++;
//         r++;
        
        
//     }
//     console.log(max)
//     return max;
    
// };

// var trap = function(height) {
//     let l=0, r=1, len = height.length;
//     let res = 0;
//     // let max = -Infinity;
//     let fin = false;
    
//     while(r < len){
        
//         let sum =0;
//         let area = 0;
        
        
//         if(height[l+1] > height[l]){
//             l++;
//             r++;
//         }
        
//         while(height[r] < height[l]){
//             sum+=height[r];
//             console.log(height[r])
//             console.log(sum);
//             r++;
//         }
//         // fin = true;
//         if(r === len){           
//             r--;
//              console.log(height[r])
//              console.log(height[r-1])
//             //  r = height[r-1] > height[r] ? r-=1 : r;
//             if(height[r-1] > height[r]){
//                 console.log(0)
//                 sum-=height[r];
//                 r--;
//                 sum-=height[r];
                
//                 fin = true;
//             }
//         }
//         console.log(height[r])
//         console.log('l ' + l);
//         console.log('r ' + r)
//         let min = Math.min(height[r],height[l]);
//         // let max = Math.max(height[r],height[l]);
//         console.log(min)
//         // console.log(max)
//         area = Math.abs(l-r) -1;
//         console.log(area)
//         area *= min;
//         console.log(area)
//         // sum-=height[r];
//         console.log(sum)
//         area-=sum;
//         console.log(sum)
//         console.log(area)
//         // max = Math.max(area,max);
//         // console.log(max)
//         res+=area;
//         if(fin) break;
        
//         l = r;
//         r++;
        
        
//     }
//     console.log(res)
//     return res;
    
// };


// var trap = function(heights) {
//     let trapped = 0, low = 0, high = heights.length-1;
//     let leftMax = 0, rightMax = 0;
//     while (low < high) {
//         if (heights[low] <= heights[high]) { 
//             // we know that there is wall in the right that is either equal to
//             // or higher than our tallest wall in the left
//             // that's why our index has moved so far and we are in this conditional
//             // statement
//             if (leftMax > heights[low]) trapped += leftMax - heights[low];
//             else leftMax = heights[low];
//             low++;
//         } else {
//             // we know that there is wall in the left that is either equal to
//             // or higher than our tallest wall in the right
//             // that's why our index has moved so far and we are in this conditional
//             // statement
//             if (rightMax > heights[high]) trapped += rightMax - heights[high];
//             else rightMax = heights[high];
//             high--;
//         }
//     }
//     return trapped;
//     // Two Pointer
//     // Time Complexity: O(n)
//     // Space Complexity: O(1)
// }

// var trap = function(height) {
//     let water = 0, 
//         l = 0, 
//         r = height.length - 1, 
//         maxl = 0, 
//         maxr = 0, 
//         waitw = 0;
//     while(l < r){
      
//         if (waitw - height[l] > 0) water += waitw - height[l]
//         if (waitw - height[r] > 0) water += waitw - height[r]

//         maxl = Math.max(maxl, height[l]);
//         maxr = Math.max(maxr, height[r]);
//         waitw = Math.min(maxl,maxr);
        
//         while(height[l] < height[r]){
//             l++
//             maxl = Math.max(maxl, height[l]);
//             waitw = Math.min(maxl,maxr);
//             if (waitw - height[l] > 0) water += waitw - height[l]
            
//         }
//         r--
//     }
//     if (height.length % 2 > 0 && waitw - height[l] > 0) water += waitw - height[l]
//     return water
// };


// var trap = function(height) {
//     let volumn = 0;
//     let statStack = [];
//     let index = 0;
    
//     while (index < height.length) {
      
//       let currentHeight = height[index];
//       let peekIdx = statStack[statStack.length - 1]
      
//       if (!statStack.length || currentHeight <= height[peekIdx]) {
        
//         statStack.push(index++);
        
//       } else {
        
//         let lastGutterIdx = statStack.pop();
//         if (!statStack.length) {
//           continue;
//         }
        
//         let stackTopAsLeftWallIdx = statStack[statStack.length - 1]
        
//         let minWaterBoltHeight = Math.min(currentHeight, height[stackTopAsLeftWallIdx]);
        
//         // the width from current index to the new stack top 
//         // For each time this code exexutes, the stack pop a new layer, which makes current gutter wider.
//         // So we need consider multiply the height of the stack top to its distance from the current index/height.
//         let accumulatedWidth = index - stackTopAsLeftWallIdx - 1;
        
//         volumn += (minWaterBoltHeight - height[lastGutterIdx]) * accumulatedWidth;
        
//       }
      
//     }
//     return volumn;
//   };
//   0 1 2 3 4 5 6 7 8 9 10 11
//   0 1 0 2 1 0 1 3 2 1  2  1
//                 x     x 
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
// console.log(trap([2,1,0,1,3]));


// Approach 4: Using 2 pointers

// Intuition

// As in Approach 2, instead of computing the left and right parts seperately, we may think of some way to do it in one iteration. From the figure in dynamic programming approach, notice that as long as right_max[i]>left_max[i]\text{right\_max}[i]>\text{left\_max}[i]right_max[i]>left_max[i] (from element 0 to 6), the water trapped depends upon the left_max, and similar is the case when left_max[i]>right_max[i]\text{left\_max}[i]>\text{right\_max}[i]left_max[i]>right_max[i] (from element 8 to 11). So, we can say that if there is a larger bar at one end (say right), we are assured that the water trapped would be dependant on height of bar in current direction (from left to right). As soon as we find the bar at other end (right) is smaller, we start iterating in opposite direction (from right to left). We must maintain left_max\text{left\_max}left_max and right_max\text{right\_max}right_max during the iteration, but now we can do it in one iteration using 2 pointers, switching between the two.

// Algorithm

//     Initialize left\text{left}left pointer to 0 and right\text{right}right pointer to size-1
//     While left<right\text{left}< \text{right}left<right, do:
//         If height[left]\text{height[left]}height[left] is smaller than height[right]\text{height[right]}height[right]
//             If height[left]≥left_max\text{height[left]} \geq \text{left\_max}height[left]≥left_max, update left_max\text{left\_max}left_max
//             Else add left_max−height[left]\text{left\_max}-\text{height[left]}left_max−height[left] to ans\text{ans}ans
//             Add 1 to left\text{left}left.
//         Else
//             If height[right]≥right_max\text{height[right]} \geq \text{right\_max}height[right]≥right_max, update right_max\text{right\_max}right_max
//             Else add right_max−height[right]\text{right\_max}-\text{height[right]}right_max−height[right] to ans\text{ans}ans
//             Subtract 1 from right\text{right}right.

// int trap(vector<int>& height)
// {
//     int left = 0, right = height.size() - 1;
//     int ans = 0;
//     int left_max = 0, right_max = 0;
//     while (left < right) {
//         if (height[left] < height[right]) {
//             height[left] >= left_max ? (left_max = height[left]) : ans += (left_max - height[left]);
//             ++left;
//         }
//         else {
//             height[right] >= right_max ? (right_max = height[right]) : ans += (right_max - height[right]);
//             --right;
//         }
//     }
//     return ans;
// }

// function trap(height){
//     let l = 0, r = height.length - 1;
//     let water = 0;
//     let leftMax = 0, rightMax = 0;

//     while(l < r){
//         if(height[l] < height[r]){
//             if(height[l] >= leftMax){
//                 leftMax = height[l];
//             }else{
//                 water += leftMax - height[l];
//             }
//             l++;
//         }else{
//             if(height[r] >= rightMax){
//                 rightMax = height[r];
//             }else{
//                 water += rightMax - height[r];
//             }
//             r--;
//         }
//     }
//     return water;
// }



// Approach 3: Using stacks

// Intuition

// Instead of storing the largest bar upto an index as in Approach 2, we can use stack to keep track of the bars that are bounded by longer bars and hence, may store water. Using the stack, we can do the calculations in only one iteration.

// We keep a stack and iterate over the array. We add the index of the bar to the stack if bar is smaller than or equal to the bar at top of stack, which means that the current bar is bounded by the previous bar in the stack. If we found a bar longer than that at the top, we are sure that the bar at the top of the stack is bounded by the current bar and a previous bar in the stack, hence, we can pop it and add resulting trapped water to ans\text{ans}ans.

// Algorithm

//     Use stack to store the indices of the bars.
//     Iterate the array:
//         While stack is not empty and height[current]>height[st.top()]\text{height[current]}>\text{height[st.top()]}height[current]>height[st.top()]
//             It means that the stack element can be popped. Pop the top element as top\text{top}top.
//             Find the distance between the current element and the element at top of stack, which is to be filled. distance=current−st.top()−1\text{distance} = \text{current} - \text{st.top}() - 1distance=current−st.top()−1
//             Find the bounded height bounded_height=min⁡(height[current],height[st.top()])−height[top]\text{bounded\_height} = \min(\text{height[current]}, \text{height[st.top()]}) - \text{height[top]}bounded_height=min(height[current],height[st.top()])−height[top]
//             Add resulting trapped water to answer ans+=distance×bounded_height\text{ans} \mathrel{+}= \text{distance} \times \text{bounded\_height}ans+=distance×bounded_height
//         Push current index to top of the stack
//         Move current\text{current}current to the next position

// int trap(vector<int>& height)
// {
//     int ans = 0, current = 0;
//     stack<int> st;
//     while (current < height.size()) {
//         while (!st.empty() && height[current] > height[st.top()]) {
//             int top = st.top();
//             st.pop();
//             if (st.empty())
//                 break;
//             int distance = current - st.top() - 1;
//             int bounded_height = min(height[current], height[st.top()]) - height[top];
//             ans += distance * bounded_height;
//         }
//         st.push(current++);
//     }
//     return ans;
// }

// https://www.youtube.com/watch?v=qn-wuF24water


// const trap = (heights) => {
//   const stack = [];
//   let result = 0;
//   for (let i = 0; i < heights.length; i++) {
//       while (stack.length > 0 && heights[stack[stack.length - 1]] < heights[i]) {
//           let center = heights[stack.pop()];
//           if (stack.length > 0) {
//               let left = heights[stack[stack.length - 1]];
//               let right = heights[i];
//               result += Math.min(left - center, right - center) * (i - stack[stack.length - 1] - 1);
//           }
//       }
//       stack.push(i);
//   }
//   return result;
// };
// var trap = function(height) {
//   let volumn = 0;
//   let statStack = [];
//   let index = 0;
  
//   while (index < height.length) {
    
//     let currentHeight = height[index];
//     let peekIdx = statStack[statStack.length - 1]
    
//     if (!statStack.length || currentHeight <= height[peekIdx]) {
      
//       statStack.push(index++);
      
//     } else {
      
//       let lastGutterIdx = statStack.pop();
//       if (!statStack.length) {
//         continue;
//       }
      
//       let stackTopAsLeftWallIdx = statStack[statStack.length - 1]
      
//       let minWaterBoltHeight = Math.min(currentHeight, height[stackTopAsLeftWallIdx]);
      
//       // the width from current index to the new stack top 
//       // For each time this code exexutes, the stack pop a new layer, which makes current gutter wider.
//       // So we need consider multiply the height of the stack top to its distance from the current index/height.
//       let accumulatedWidth = index - stackTopAsLeftWallIdx - 1;
      
//       volumn += (minWaterBoltHeight - height[lastGutterIdx]) * accumulatedWidth;
      
//     }
    
//   }
//   return volumn;
// };

//preffered
function trap(height){
    let l = 0, r = height.length - 1;
    let water = 0;
    let leftMax = 0, rightMax = 0;

    while(l < r){
        if(height[l] < height[r]){
            if(height[l] >= leftMax){
                leftMax = height[l];
            }else{
                water += leftMax - height[l];
            }
            l++;
        }else{
            if(height[r] >= rightMax){
                rightMax = height[r];
            }else{
                water += rightMax - height[r];
            }
            r--;
        }
    }
    return water;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
// console.log(trap([2,1,0,1,3]));