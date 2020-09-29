// /**
//  * @param {number[]} prices
//  * @return {number}
//  [7,1,5,3,6,4]=> buy 1 sell at 5; buy at 3 and sell at 6
//  [1,2,3,4,5]=>
//  */
// var maxProfit = function(prices) {
//     let buy = false;
//     let bargain = 0;
//     let profit = 0;
//     let total = 0;
//     for(let i = 0; i < prices.length-1; i++){
//         if(prices[i+1] > prices[i]){
//             //buy
//             if(!buy){
//                 bargain = prices[i];
//                 buy= true;
//             }
//         }else{
//             if(buy){                  
//                 profit = prices[i] - bargain;
//                 console.log(prices[i] + ' ' + bargain)
//                 total+=profit;
//                 buy = false;
//             }
          
//         }
//         // total+=profit;
//     }
//     if(buy){
//         return prices[prices.length-1] - bargain;
//     }
//     return total;
    
// };


/**
 * @param {number[]} prices
 * @return {number}
 [7,1,5,3,6,4]=> buy 1 sell at 5; buy at 3 and sell at 6
 [1,2,3,4,5]=>
 */
var maxProfit = function(prices) {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1])
            maxprofit += prices[i] - prices[i - 1];
    }
    return maxprofit;
    
};