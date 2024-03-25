// https://leetcode.cn/problems/coin-change-ii/description/
// 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
// 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
// 假设每一种面额的硬币有无限个。
// 题目数据保证结果符合 32 位带符号整数。

export default function change(amount: number, coins: number[]): number {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let i = 0; i <= amount; i++) {
      if (i + coin <= amount) {
        dp[i + coin] += dp[i];
      }
    }
  }
  return dp[amount];
}

// export default function change(amount: number, coins: number[]): number {
//   const len = coins.length;
//   const dp = Array(len)
//     .fill(0)
//     .map(() => Array(amount + 1).fill(0));
//   // dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]]
//   for (let i = 0; i < len; i++) {
//     dp[i][0] = 1;
//   }
//   for (let i = 0; i < len; i++) {
//     const coin = coins[i];
//     for (let j = 1; j <= amount; j++) {
//       if (i !== 0) {
//         dp[i][j] = dp[i - 1][j];
//       }
//       if (j - coin >= 0) {
//         dp[i][j] += dp[i][j - coin];
//       }
//     }
//   }
//   return dp[len - 1][amount];
// }

// 动态规划
// export default function change(amount: number, coins: number[]): number {
//   const dp = Array(amount + 1).fill(0);
//   dp[0] = 1;
//   for (let i = 0; i <= amount; i++) {
//     for (const coin of coins) {
//       if (i + coin <= amount) {
//         // 存在重复组合
//         dp[i + coin] += dp[i];
//       }
//     }
//   }
//   return dp[amount];
// }

// dfs 超时
// export default function change(amount: number, coins: number[]): number {
//   let res = 0;
//   function dfs(total: number, coinIndex: number) {
//     if (total > amount) {
//       return;
//     }
//     if (total === amount) {
//       res += 1;
//       return;
//     }
//     if (coinIndex >= coins.length) {
//       return;
//     }
//     dfs(total + coins[coinIndex], coinIndex);
//     dfs(total, coinIndex + 1);
//   }
//   dfs(0, 0);
//   return res;
// }
