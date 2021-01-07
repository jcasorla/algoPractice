// function buySellStocks(arr) {
//   let i = 0;
//   let buy = false;
//   const res = [];

//   while (i < arr.length) {
//     const curPrice = arr[i];
//     let j = i + 1;
//     while (j < arr.length) {
//       let futPrice = arr[j];
//       if (!buy) {
//         if (futPrice > curPrice) {
//           res.push(curPrice);
//           buy = true;
//           continue;
//         } else {
//           break;
//         }
//       } else if (futPrice < curPrice || !arr[j + 1]) {
//         res.push(arr[fut - 1]);
//         i = j - 1;
//         buy = false;
//         break;
//       }
//     }
//     i++;
//   }
//   return res;
// }

// console.log(buySellStocks([100, 180, 260, 310, 40, 535, 695]));

// var maxProfit = function (prices) {
//   let maxprofit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > prices[i - 1]) maxprofit += prices[i] - prices[i - 1];
//   }
//   return maxprofit;
// };

// console.log(maxProfit([100, 180, 260, 310, 40, 535, 695]));

function buySellStocks(arr) {
  const res = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      res.push(arr[i - 1]);
      let j = i + 1;
      let futPrice = arr[i];
      while (futPrice < arr[j]) {
        futprice = arr[j];
        j++;
      }
      res.push(arr[j - 1]);
      i = j;
    }
  }
  return res;
}

console.log(buySellStocks([100, 180, 260, 310, 40, 535, 695]));
console.log(buySellStocks([100, 90, 80, 70, 60]));
console.log(buySellStocks([40, 90, 80, 70, 60]));
