//leetcode.cn/problems/minimum-cost-for-tickets/
// 在一个火车旅行很受欢迎的国度，你提前一年计划了一些火车旅行。
// 在接下来的一年里，你要旅行的日子将以一个名为 days 的数组给出。每一项是一个从 1 到 365 的整数。
// 火车票有 三种不同的销售方式 ：
// 一张 为期一天 的通行证售价为 costs[0] 美元；
// 一张 为期七天 的通行证售价为 costs[1] 美元；
// 一张 为期三十天 的通行证售价为 costs[2] 美元。
// 通行证允许数天无限制的旅行。 例如，如果我们在第 2 天获得一张 为期 7 天 的通行证，
// 那么我们可以连着旅行 7 天：第 2 天、第 3 天、第 4 天、第 5 天、第 6 天、第 7 天和第 8 天。
// 返回 你想要完成在给定的列表 days 中列出的每一天的旅行所需要的最低消费 。

export default function mincostTickets(
  days: number[],
  costs: number[]
): number {
  const len = days.length;
  const set = new Set();
  for (let i = 0; i < len; i++) {
    set.add(days[i]);
  }
  const dp = Array(days[len - 1] + 1)
    .fill(0)
    .map(() => [0, 0, 0]);
  for (let i = days[0]; i <= days[len - 1]; i++) {
    if (set.has(i)) {
      dp[i][0] = (i - 1 >= 0 ? Math.min(...dp[i - 1]) : 0) + costs[0];
      dp[i][1] = (i - 7 >= 0 ? Math.min(...dp[i - 7]) : 0) + costs[1];
      dp[i][2] = (i - 30 >= 0 ? Math.min(...dp[i - 30]) : 0) + costs[2];
    } else {
      dp[i][0] = dp[i - 1][0];
      dp[i][1] = dp[i - 1][1];
      dp[i][2] = dp[i - 1][2];
    }
  }
  // console.log(dp);
  return Math.min(...dp[dp.length - 1]);
}
