function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const difference = Math.abs(prices[i] - prices[j]);
      if (prices[i] < prices[j]) {
        maxProfit = difference > maxProfit ? difference : maxProfit;
      } else {
        break;
      }
    }
  }

  return maxProfit;
};
