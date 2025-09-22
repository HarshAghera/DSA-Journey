//You are given an array of prices where prices[i] is the price of a given stock on an ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const prices = [7, 1, 5, 3, 6, 4];
let maxProfit = 0;
let buyOnDay = 0,
  sellOnDay = 0;

let i = 0;
for (j = 0; j < prices.length; j++) {
  if (prices[j] > prices[i] && prices[j] - prices[i] > maxProfit) {
    maxProfit = prices[j] - prices[i];
    buyOnDay = i + 1;
    sellOnDay = j + 1;
  }
  if (j == prices.length - 1) {
    j = i;
    i++;
  }
}

if (maxProfit) {
  console.log(
    `buyOnDay = ${buyOnDay} `,
    `sellOnDay = ${sellOnDay} `,
    `to get profit= ${maxProfit}`,
  );
} else {
  console.log('No transaction happened');
}
