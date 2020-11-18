//https://www.algoexpert.io/questions/Longest%20Balanced%20Substring

//my attempt
// function longestBalancedSubstring(string) {
//   let str = string;
//   let p1 = 0,
//     p2 = 1,
//     len = str.length,
//     max = 0;

//   while (p2 < len) {
//     let count = 0;

//     if (str[p1] === "(" && str[p2] === ")") {
//       const res = expand(str, p1, p2);
//       count = res[0];
//       p1 = res[1] + 1;
//       p2 = p1 + 1;
//     } else {
//       p1++, p2++;
//     }
//     max = count > max ? count : max;
//   }
//   return max;
// }

// function expand(str, p1, p2) {
//   let res = [0, p2 + 1],
//     len = str.length;

//   while (str[p1] === "(" && str[p2] === ")" && p1 >= 0 && p2 < len) {
//     res[0] += 2;
//     res[p2 + 1];
//     p1--, p2++;
//   }
//   return res;
// }

//O(n^3) time | O(N) space
// function longestBalancedSubstring(string) {
//   let max = 0;
//   let len = string.length;

//   for (let i = 0; i < len; i++) {
//     for (let j = i + 2; j < len + 1; j += 2) {
//       if (isBalanced(string.slice(i, j))) {
//         const cur = j - i;
//         max = Math.max(max, cur);
//       }
//     }
//   }
//   return max;
// }
// function isBalanced(string) {
//   const stack = [];

//   for (const ch of string) {
//     if (ch === "(") stack.push(ch);
//     else if (stack.length > 0) {
//       stack.pop();
//     } else {
//       return false;
//     }
//   }
//   return stack.length === 0;
// }

//O(n) time | O(n) space
// function longestBalancedSubstring(string) {
//   let max = 0;
//   const stack = [];
//   stack.push(-1);
//   let len = string.length;

//   for (let i = 0; i < len; i++) {
//     if (string[i] === "(") {
//       stack.push(i);
//     } else {
//       stack.pop();

//       if (stack.length === 0) {
//         stack.push(i);
//       } else {
//         const balancedSubStartIdx = stack[stack.length - 1];
//         const cur = i - balancedSubStartIdx;
//         max = Math.max(max, cur);
//       }
//     }
//   }
//   return max;
// }

//O(N) time | O(1) space
function longestBalancedSubstring(string) {
  let max = 0;

  let openCount = 0;
  let closeCount = 0;
  for (const ch of string) {
    if (ch === "(") openCount++;
    else closeCount++;

    if (openCount < closeCount) {
      openCount = 0;
      closeCount = 0;
    } else {
      max = Math.max(max, closeCount * 2);
    }
  }
  return max;
}

console.log(longestBalancedSubstring("(()))("));
console.log(longestBalancedSubstring("())()(()())"));
console.log(longestBalancedSubstring("()()()()()()()()()()"));
