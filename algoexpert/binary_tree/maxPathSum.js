//https://www.algoexpert.io/questions/Max%20Path%20Sum%20In%20Binary%20Tree

//0(N) | 0(log(N))
function maxPathSum(tree) {
  const [_, maxSum] = findMaxSum(tree);
  return maxSum;
}
function findMaxSum(tree) {
  if (!tree) return [0, -Infinity];

  const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
  const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
  const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);

  const { value } = tree;
  const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
  const maxSumTree = Math.max(
    leftMaxSumAsBranch + value + rightMaxSumAsBranch,
    maxSumAsBranch
  );
  const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumTree);

  return [maxSumAsBranch, maxPathSum];
}

//my attempt:
/*
function maxPathSum(tree) {
  let stack = [tree];
  let sum = 0;
  let count = 0;
  let node = stack.pop();
  console.log(node.value);
  sum += node.value;
  // if(node.left.left || node.left.right)
  stack.push(node.left);
  // node = stack.pop();
  // sum+=node.value;
  stack.push(node.right);
  // 	node = stack.pop();
  // sum+=node.value;
  while (stack.length > 0) {
    node = stack.pop();

    if (node === null) continue;
    console.log(node.value);
    sum += node.value;

    if (node.right) stack.push(node.right);
    else stack.push(node.left);
  }
  return sum;
}
**/
