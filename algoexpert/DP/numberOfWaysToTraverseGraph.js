//https://www.algoexpert.io/questions/Number%20Of%20Ways%20To%20Traverse%20

// solution 1 - recursive
// 0(2 ^ (n + m)) | 0(n + m)
function numberOfWaysToTraverseGraph(width, height) {
  if (width === 1 || height === 1) return 1;

  return (
    numberOfWaysToTraverseGraph(width - 1, height) +
    numberOfWaysToTraverseGraph(width, height - 1)
  );
}

// solution 2
// 0(n * m) | 0(n * m)

function numberOfWaysToTraverseGraph(width, height) {
  const numberOfWays = [];

  for (let i = 0; i < height + 1; i++) {
    numberOfWays.push([]);
    for (let j = 0; j < width + 1; j++) {
      numberOfWays[i].push(0);
    }
  }

  for (let widthIdx = 1; widthIdx < width + 1; widthIdx++) {
    for (let heightIdx = 1; heightIdx < height + 1; heightIdx++) {
      if ((widthIdx === 1) | (heightIdx === 1)) {
        numberOfWays[heightIdx][widthIdx] = 1;
      } else {
        const waysLeft = numberOfWays[heightIdx][widthIdx - 1];
        const waysUp = numberOfWays[heightIdx - 1][widthIdx];
        numberOfWays[heightIdx][widthIdx] = waysLeft + waysUp;
      }
    }
  }

  return numberOfWays[height][width];
}
