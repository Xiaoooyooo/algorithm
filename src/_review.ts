export default function fn(prices: number[], fee: number) {
  const len = prices.length;
  const dp = Array(len)
    .fill(0)
    .map(() => [0, 0]);
  dp[0][0] = -prices[0];
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
  }
  // console.log(dp);
  return dp[len - 1][1];
}
