// 给你一个整数数组 prices 和一个整数 k ，其中 prices[i] 是某支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。也就是说，你最多可以买 k 次，卖 k 次。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

export default function maxProfit4(k: number, prices: number[]): number {
  const len = prices.length;
  const buy = Array(k).fill(-prices[0]);
  const sell = Array(k).fill(0);
  for (let i = 1; i < len; i++) {
    buy[0] = Math.max(buy[0], -prices[i]);
    sell[0] = Math.max(sell[0], buy[0] + prices[i]);
    for (let j = 1; j < k; j++) {
      buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]);
      sell[j] = Math.max(sell[j], buy[j] + prices[i]);
    }
  }
  return sell[k - 1];
}

// export default function maxProfit4(k: number, prices: number[]): number {
//   const n = 2 * k + 1;
//   const dp = Array(n).fill(0);
//   for (let i = 1; i < n; i += 2) {
//     dp[i] = -prices[0];
//     dp[i + 1] = 0;
//   }
//   for (let i = 1; i < prices.length; i++) {
//     for (let j = 1; j < n; j += 2) {
//       dp[j] = Math.max(dp[j], dp[j - 1] - prices[i]);
//       dp[j + 1] = Math.max(dp[j + 1], dp[j] + prices[i]);
//     }
//   }
//   return dp[n - 1];
// }

//
// export default function maxProfit4(k: number, prices: number[]): number {
//   const len = prices.length;
//   const dp = Array(k)
//     .fill(0)
//     .map(() =>
//       Array(len)
//         .fill(0)
//         .map(() => [0, 0])
//     );
//   for (let i = 0; i < k; i++) {
//     dp[i][0][0] = -prices[0];
//   }
//   for (let i = 1; i < len; i++) {
//     dp[0][i][0] = Math.max(dp[0][i - 1][0], -prices[i]);
//     dp[0][i][1] = Math.max(dp[0][i - 1][1], dp[0][i - 1][0] + prices[i]);
//   }
//   for (let i = 1; i < len; i++) {
//     for (let j = 1; j < k; j++) {
//       dp[j][i][0] = Math.max(dp[j][i - 1][0], dp[j - 1][i - 1][1] - prices[i]);
//       dp[j][i][1] = Math.max(dp[j][i - 1][1], dp[j][i - 1][0] + prices[i]);
//     }
//   }
//   // console.log(dp);
//   return dp[k - 1][len - 1][1];
// }
