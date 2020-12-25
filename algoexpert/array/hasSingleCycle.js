//https://www.algoexpert.io/questions/Single%20Cycle%20Check
// 0(N) | 0(1)
function hasSingleCycle(array) {
  let visited = 0;
  let curIdx = 0;
  while (visited < array.length) {
    if (visited > 0 && curIdx === 0) return false;
    visited++;
    curIdx = getNextIdx(curIdx, array);
  }
  return curIdx === 0;
}

function getNextIdx(curIdx, array) {
  const jump = array[curIdx];
  const nextIdx = (curIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

// 0(N) | 0(N)
// function hasSingleCycle(array) {
//   let visited = new Array(array.length).fill(0);
//   let curIdx = 0;

//   for (let i = 0; i < array.length; i++) {
//     curIdx = getNextIdx(curIdx, array);
//     visited[curIdx]++;
//   }

//   for (const num of visited) {
//     if (num > 1) {
//       return false;
//     }
//   }

//   return true;
// }

// function getNextIdx(curIdx, array) {
//   const jump = array[curIdx];
//   const nextIdx = (curIdx + jump) % array.length;
//   return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
// }
