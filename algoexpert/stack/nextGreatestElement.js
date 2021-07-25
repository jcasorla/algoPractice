/**
 * 
 * @param {*} array 
 * @returns 
 * 
   https://www.algoexpert.io/questions/Next%20Greater%20Element

   0(n) | 0(n)
 */

function nextGreaterElement(array) {
  const len = array.length;
  const result = new Array(len).fill(-1);
  const stack = [];

  for (let i = 0; i < len * 2; i++) {
    const cirIdx = i % len;

    while (stack.length > 0 && array[stack[stack.length - 1]] < array[cirIdx]) {
      const top = stack.pop();
      result[top] = array[cirIdx];
    }
    stack.push(cirIdx);
  }
  return result;
}
