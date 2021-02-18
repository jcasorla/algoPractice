//https://www.algoexpert.io/questions/Staircase%20Traversal

// recursive solution 1
//0(k^n) | 0(n)
function staircaseTraversal(height, maxSteps) {
  return numOfWaysToTop(height, maxSteps);
}
function numOfWaysToTop(heigth, maxSteps) {
  if (heigth <= 1) return 1;

  let numOfWays = 0;

  for (let step = 1; step < Math.min(maxSteps, heigth) + 1; step++) {
    numOfWays += numOfWaysToTop(heigth - step, maxSteps);
  }
  return numOfWays;
}

// recursive with memoization solution 2
//0(n * k) | 0(n)
function staircaseTraversal(height, maxSteps) {
  return numOfWaysToTop(height, maxSteps, { 0: 1, 1: 1 });
}
function numOfWaysToTop(heigth, maxSteps, memoize) {
  if (heigth in memoize) return memoize[heigth];

  let numOfWays = 0;

  for (let step = 1; step < Math.min(maxSteps, heigth) + 1; step++) {
    numOfWays += numOfWaysToTop(heigth - step, maxSteps, memoize);
  }
  memoize[heigth] = numOfWays;
  return numOfWays;
}

//iterative solution 3
// 0(n * k) | 0(n)
function staircaseTraversal(height, maxSteps) {
  const waysToTop = new Array(height + 1).fill(0);
  waysToTop[0] = 1;
  waysToTop[1] = 1;
  for (let curHeight = 2; curHeight < height + 1; curHeight++) {
    let step = 1;
    while (step <= maxSteps && step <= curHeight) {
      waysToTop[curHeight] = waysToTop[curHeight] + waysToTop[curHeight - step];
      step++;
    }
  }
  return waysToTop[height];
}

// sliding window solution 4
//0(n) | 0(n)
function staircaseTraversal(height, maxSteps) {
  let currentNumOfWays = 0;
  const waysToTop = [1];
  for (let curHeight = 1; curHeight < height + 1; curHeight++) {
    const startofWindow = curHeight - maxSteps - 1;
    const endOfWindow = curHeight - 1;
    if (startofWindow >= 0) currentNumOfWays -= waysToTop[startofWindow];
    currentNumOfWays += waysToTop[endOfWindow];
    waysToTop.push(currentNumOfWays);
  }
  return waysToTop[height];
}
