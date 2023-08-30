// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
// 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​
// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

export default function maxProfit1(prices: number[]): number {
  const len = prices.length;
  const dp = Array(len + 1)
    .fill(0)
    .map(() => [0, 0]);
  // dp[i][0] 已经买入股票时，第 i 天持有的最多资金
  // dp[i][1] 第 i 天卖出股票时持有的最多资金
  dp[1][0] = -prices[0];
  for (let i = 2; i < len + 1; i++) {
    // 买入股票持有最多资金 = max(昨天买入股票持有的资金，在前天卖出股票持有的资金基础上买入今天的股票)
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 2][1] - prices[i - 1]);
    // 卖出股票持有的最多资金 = max(昨天卖出股票持有的最多资金，在昨天买入股票持有资金的基础上卖出股票)
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i - 1]);
  }
  // console.log(dp);
  return dp[len][1];
}
