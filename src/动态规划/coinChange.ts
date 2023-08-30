// https://leetcode.cn/problems/coin-change/
// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的。

export default function coinChange(coins: number[], amount: number): number {
  const dp = Array(amount + 1).fill(undefined);
  dp[0] = 0;
  const clen = coins.length;
  for (let i = 0; i < clen; i++) {
    dp[coins[i]] = 1;
  }
  for (let i = 1; i <= amount; i++) {
    if (dp[i]) {
      for (let j = 0; j < clen; j++) {
        if (dp[i + coins[j]] === undefined) {
          dp[i + coins[j]] = dp[i] + 1;
        } else {
          dp[i + coins[j]] = Math.min(dp[i + coins[j]], dp[i] + 1);
        }
      }
    }
  }
  // console.log(dp);
  return dp[amount] ?? -1;
}
