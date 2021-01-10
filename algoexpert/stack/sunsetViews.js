//https://www.algoexpert.io/questions/Sunset%20Views

//my solution
//0(N) | 0(N)
function sunsetViews(buildings, direction) {
  if (buildings.length === 0) return [];
  let res = [];
  if (direction === "WEST") {
    res.push(0);
    let tall = buildings[0];
    for (let i = 0; i < buildings.length; i++) {
      if (buildings[i + 1] > tall) {
        res.push(i + 1);
        tall = buildings[i + 1];
      }
    }
  }
  if (direction === "EAST") {
    const len = buildings.length;
    res.push(len - 1);
    let tall = buildings[len - 1];
    for (let i = len - 1; i >= 0; i--) {
      if (buildings[i - 1] > tall) {
        res.push(i - 1);
        tall = buildings[i - 1];
      }
    }

    res = res.reverse();
  }
  return res;
}

//algoexpert:
//0(N) | 0(N)
function sunsetViews(buildings, direction) {
  let res = [];
  const startIdx = direction === "WEST" ? 0 : buildings.length - 1;
  const step = direction === "WEST" ? 1 : -1;
  let idx = startIdx;
  let runningTall = 0;
  while (idx >= 0 && idx < buildings.length) {
    const tall = buildings[idx];
    if (tall > runningTall) res.push(idx);
    runningTall = Math.max(tall, runningTall);
    idx = idx + step;
  }
  if (direction === "EAST") res = res.reverse();

  return res;
}

//using stack
//0(N) | 0(N)
function sunsetViews(buildings, direction) {
  let stack = [];
  const startIdx = direction === "EAST" ? 0 : buildings.length - 1;
  const step = direction === "EAST" ? 1 : -1;
  let idx = startIdx;
  while (idx >= 0 && idx < buildings.length) {
    const tall = buildings[idx];

    while (stack.length > 0 && buildings[stack[stack.length - 1]] <= tall) {
      stack.pop();
    }

    stack.push(idx);
    idx = idx + step;
  }

  if (direction === "WEST") stack = stack.reverse();

  return stack;
}
