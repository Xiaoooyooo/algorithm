// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/
// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 动态规划 官方题解
// export default function maxProfit3(prices: number[]): number {
//   const n = prices.length;
//   let buy1 = -prices[0],
//     buy2 = -prices[0];
//   let sell1 = 0,
//     sell2 = 0;
//   for (let i = 1; i < n; i++) {
//     buy1 = Math.max(buy1, -prices[i]);
//     sell1 = Math.max(sell1, buy1 + prices[i]);
//     buy2 = Math.max(buy2, sell1 - prices[i]);
//     sell2 = Math.max(sell2, buy2 + prices[i]);
//   }
//   return sell2;
// }

// 动态规划 - dp 数组版
export default function maxProfit3(prices: number[]): number {
  const len = prices.length;
  const dp1 = Array(len)
    .fill(0)
    .map(() => [0, 0]);
  const dp2 = Array(len)
    .fill(0)
    .map(() => [0, 0]);
  dp1[0][0] = -prices[0];
  dp2[0][0] = -prices[0]; // ?
  for (let i = 1; i < len; i++) {
    dp1[i][0] = Math.max(dp1[i - 1][0], -prices[i]);
    dp1[i][1] = Math.max(dp1[i - 1][1], dp1[i - 1][0] + prices[i]);
    dp2[i][0] = Math.max(dp2[i - 1][0], dp1[i - 1][1] - prices[i]);
    dp2[i][1] = Math.max(dp2[i - 1][1], dp2[i - 1][0] + prices[i]);
  }
  // console.log(dp1, dp2);
  return dp2[len - 1][1];
}

// 动态规划 + 贪心
// export default function maxProfit3(prices: number[]): number {
//   const len = prices.length;
//   const dp = Array(len)
//     .fill(0)
//     .map(() => [0, 0]);
//   dp[0][0] = -prices[0];
//   for (let i = 1; i < len; i++) {
//     dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
//     dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
//   }
//   // console.log(dp);
//   let max = prices[len - 1],
//     res = dp[len - 1][1];
//   for (let i = len - 2; i > 0; i--) {
//     res = Math.max(res, max - prices[i] + dp[i - 1][1]);
//     if (prices[i] > max) {
//       max = prices[i];
//     }
//   }
//   return res;
// }
