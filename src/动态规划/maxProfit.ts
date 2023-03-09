// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 动态规划
export default function maxProfit(prices: number[]) {
  const dp = [];
  // 第一项表示当天持有股票（当天买入或早已买入）时自身最多资金
  // 第二项表示当天未持有股票（已卖出或从未买入）时的最多资金
  // 第一天的情况：直接买入使得自身买入股票使持有资金最多，直接卖出使得自身未持有股票时资金最多（此时的最多最少只是相对于第一天而言）
  dp[0] = [-prices[0], 0]; 
  for (let i = 1, len = prices.length; i < len; i++) {
    const a = Math.max(dp[i - 1][0], -prices[i]);
    const b = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    dp.push([a, b]);
  }
  return dp[prices.length - 1][1];
}

// 贪心算法
// export default function maxProfit(prices: number[]) {
//   let res = 0, temp = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < prices.length; i++) {
//     temp = Math.min(temp, prices[i]); // 取最左最小价格
//     res = Math.max(res, prices[i] - temp); // 取最大区间利润
//   }
//   return res;
// }

// 超时
// export default function maxProfit(prices: number[]) {
//   const len = prices.length;
//   if (len === 1) return 0;
//   let res = 0;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       const profit = prices[j] - prices[i];
//       if (profit > res) {
//         res = profit;
//       }
//     }
//   }
//   return res;
// }
