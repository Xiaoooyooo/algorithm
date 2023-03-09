// 链接：https://leetcode.cn/problems/min-cost-climbing-stairs
// 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。
// 一旦你支付此费用，即可选择向上爬一个或者两个台阶。
// 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
// 请你计算并返回达到楼梯顶部的最低花费。

export default function minCostClimbingStairs(cost: number[]) {
  const dp = [0, 0]; // i 表示到达目标楼层时已经花费的最少费用
  for (let i = 2, len = cost.length + 1; i < len; i++) {
    const a = dp[i - 1] + cost[i - 1];
    const b = dp[i - 2] + cost[i - 2];
    dp[i] = Math.min(a, b);
  }
  return dp[cost.length];
}
