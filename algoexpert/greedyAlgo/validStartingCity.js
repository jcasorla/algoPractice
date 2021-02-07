//https://www.algoexpert.io/questions/Valid%20Starting%20City

//0(N^2) | 0(1)
function validStartingCity(distances, fuel, mpg) {
  const len = distances.length;
  for (let i = 0; i < len; i++) {
    let miles = 0;
    for (let j = i; j < i + len; j++) {
      if (miles < 0) continue;
      const curIdx = j % len;
      const curFuel = fuel[curIdx];
      const curDist = distances[curIdx];
      miles += curFuel * mpg - curDist;
    }
    if (miles >= 0) return i;
  }
  return -1;
}

//0(N) | 0(1)
function validStartingCity(distances, fuel, mpg) {
  const len = distances.length;
  let milesRemaining = 0;

  let indexCandidate = 0;
  let milesRemainingCandidate = 0;

  for (let i = 1; i < len; i++) {
    const prevFuel = fuel[i - 1];
    const prevDist = distances[i - 1];
    milesRemaining += prevFuel * mpg - prevDist;

    if (milesRemaining < milesRemainingCandidate) {
      milesRemainingCandidate = milesRemaining;
      indexCandidate = i;
    }
  }
  return indexCandidate;
}

//misc:

// const dist = distances[j] - distances[i];
// miles -= dist;
// if(miles < 0) break;
// miles += fuel[j] * mpg;
