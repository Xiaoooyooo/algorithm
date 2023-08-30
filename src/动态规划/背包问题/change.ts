// https://leetcode.cn/problems/coin-change-ii/description/
// 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
// 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
// 假设每一种面额的硬币有无限个。
// 题目数据保证结果符合 32 位带符号整数。

// *
export default function change(amount: number, coins: number[]): number {
  const len = coins.length;
  const dp = Array(len)
    .fill(0)
    .map(() => Array(amount + 1).fill(0));
  // dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]]
  for (let i = 0; i < len; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < len; i++) {
    const coin = coins[i];
    for (let j = 1; j <= amount; j++) {
      if (i !== 0) {
        dp[i][j] = dp[i - 1][j];
      }
      if (j - coin >= 0) {
        dp[i][j] += dp[i][j - coin];
      }
    }
  }
  return dp[len - 1][amount];
}

// 动态规划
// export default function change(amount: number, coins: number[]): number {
//   const n = coins.length;
//   const dp = Array(n + 1)
//     .fill(0)
//     .map(() => Array(amount + 1).fill(0));
//   for (let i = 0; i <= n; i++) dp[i][0] = 1; //凑0元，不用凑就成功了
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= amount; j++) {
//       // for(int k=0;j-k>=0;j+=coins[i-1])dp[i][j]+=dp[i-1][j-k];斜率优化
//       dp[i][j] =
//         dp[i - 1][j] + (j - coins[i - 1] >= 0 ? dp[i][j - coins[i - 1]] : 0);
//     }
//   }
//   return dp[n][amount];
// }

// 官方题解 动态规划 背包问题
// export default function change(amount: number, coins: number[]): number {
//   const dp = Array(amount + 1).fill(0);
//   dp[0] = 1;
//   for (let coin of coins) {
//     for (let i = coin; i <= amount; i++) {
//       dp[i] += dp[i - coin];
//     }
//   }
//   return dp[amount];
// }

// 广度优先搜索 超时
// export default function change(amount: number, coins: number[]): number {
//   if (amount === 0) return 1;
//   let res = 0;
//   const len = coins.length;
//   for (let i = 0; i < len; i++) {
//     const queue = [coins[i]];
//     const p = [i];
//     while (queue.length) {
//       const curr = queue.shift();
//       const _p = p.shift();
//       if (curr === amount) {
//         res++;
//         continue;
//       }
//       for (let k = _p; k < len; k++) {
//         const t = curr + coins[k];
//         if (t <= amount) {
//           queue.push(t);
//           p.push(k);
//         }
//       }
//     }
//   }
//   return res;
// }
