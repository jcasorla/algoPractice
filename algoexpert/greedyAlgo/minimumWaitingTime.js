//https://www.algoexpert.io/questions/Minimum%20Waiting%20Time

//0(Nlog(N)) | 0(1)
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let totalWaitTime = 0;

  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    const queriesLeft = queries.length - (i + 1);
    totalWaitTime += duration * queriesLeft;
  }

  return totalWaitTime;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
