function numberOfWaysToMakeChange(n, denoms) {
  const ways = new Array(n + 1).fill(0);

  ways[0] = 1;

  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom];
      }
    }
    // console.log(ways);
  }
  return ways[n];
}

// console.log(numberOfWaysToMakeChange(6, [1, 5])); //2
// console.log(numberOfWaysToMakeChange(0, [2, 3, 4, 7])); //1
// console.log(numberOfWaysToMakeChange(5, [9])); //0
// console.log(numberOfWaysToMakeChange(25, [1, 5, 10, 25])); //13
console.log(numberOfWaysToMakeChange(12, [2, 3, 7])); //4
