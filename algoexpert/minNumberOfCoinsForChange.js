//https://www.algoexpert.io/questions/Min%20Number%20Of%20Coins%20For%20Change

//passes 12 of 15 cases

// function minNumberOfCoinsForChange(n, denoms) {
//   let count = 0;
//   denoms = denoms.sort((a, b) => a - b);
//   let len = denoms.length;

//   for (let i = len - 1; i >= 0; i--) {
//     while (n >= denoms[i]) {
//       n -= denoms[i];
//       count++;
//     }
//     console.log(count);
//   }
//   return n !== 0 && count != 0 ? -1 : count;
// }

function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;

  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(
          numOfCoins[amount],
          numOfCoins[amount - denom] + 1
        );
      }
    }
    console.log(numOfCoins);
  }

  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}

// console.log(minNumberOfCoinsForChange(7, [1, 5, 10])); //3
console.log(minNumberOfCoinsForChange(9, [3, 5])); //3
