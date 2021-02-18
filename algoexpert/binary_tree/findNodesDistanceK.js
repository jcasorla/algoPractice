class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//solution 1
// 0(n) | 0(n)
// function findNodesDistanceK(tree, target, k) {
//   const nodesToParents = {};
//   populateNodesToParents(tree, nodesToParents);
//   const targetNode = getNodeFromValue(target, tree, nodesToParents);
//   return breathFirstSearchForNodesDistanceK(targetNode, nodesToParents, k);
// }

// function breathFirstSearchForNodesDistanceK(targetNode, nodesToParents, k) {
//   const queue = [[targetNode, 0]];
//   const seen = new Set([targetNode.value]);

//   while (queue.length > 0) {
//     const [currentNode, distanceFromTarget] = queue.shift();
//     if (distanceFromTarget === k) {
//       const nodeDistanceK = queue.map((pair) => pair[0].value);
//       nodeDistanceK.push(currentNode.value);
//       return nodeDistanceK;
//     }
//     const connedtecNodes = [
//       currentNode.left,
//       currentNode.right,
//       nodesToParents[currentNode.value],
//     ];
//     for (const node of connedtecNodes) {
//       if (node == null) continue;
//       if (seen.has(node.value)) continue;

//       seen.add(node.value);
//       queue.push([node, distanceFromTarget + 1]);
//     }
//   }
//   return [];
// }

// function getNodeFromValue(value, tree, nodeToParents) {
//   if (tree.value === value) return true;

//   const nodeParent = nodeToParents[value];
//   if (nodeParent.left !== null && nodeParent.left.value === value)
//     return nodeParent.left;

//   return nodeParent.right;
// }

// function populateNodesToParents(node, nodesToParents, parent = null) {
//   if (node !== null) {
//     nodesToParents[node.value] = parent;
//     populateNodesToParents(node.left, nodesToParents, node);
//     populateNodesToParents(node.right, nodesToParents, node);
//   }
// }

// solution 2:
// 0(n) |0(n)

function findNodesDistanceK(tree, target, k) {
  const nodeDistanceK = [];
  findDistanceFromNodeToTarget(tree, target, k, nodeDistanceK);
  return nodeDistanceK;
}

function findDistanceFromNodeToTarget(node, target, k, nodeDistanceK) {
  if (!node) return -1;
  if (node.value === target) {
    addSubtreeNodeAtDistanceK(node, 0, k, nodeDistanceK);
    return 1;
  }
  const leftDistance = findDistanceFromNodeToTarget(
    node.left,
    target,
    k,
    nodeDistanceK
  );
  const rightDistance = findDistanceFromNodeToTarget(
    node.right,
    target,
    k,
    nodeDistanceK
  );

  if (leftDistance === k || rightDistance === k) nodeDistanceK.push(node.value);

  if (leftDistance !== -1) {
    addSubtreeNodeAtDistanceK(node.right, leftDistance + 1, k, nodeDistanceK);
    return leftDistance + 1;
  }
  if (rightDistance !== -1) {
    addSubtreeNodeAtDistanceK(node.left, rightDistance + 1, k, nodeDistanceK);

    return rightDistance + 1;
  }
  return -1;
}

function addSubtreeNodeAtDistanceK(node, distance, k, nodeDistanceK) {
  if (!node) return;

  if (distance === k) nodeDistanceK.push(node.value);
  else {
    addSubtreeNodeAtDistanceK(node.left, distance + 1, k, nodeDistanceK);
    addSubtreeNodeAtDistanceK(node.right, distance + 1, k, nodeDistanceK);
  }
}
