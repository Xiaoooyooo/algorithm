// https://leetcode.cn/problems/number-of-dice-rolls-with-target-sum/
// 这里有 n 个一样的骰子，每个骰子上都有 k 个面，分别标号为 1 到 k 。
// 给定三个整数 n ,  k 和 target ，返回可能的方式(从总共 k^n 种方式中)滚动骰子的数量，使正面朝上的数字之和等于 target 。
// 答案可能很大，你需要对 10^9 + 7 取模 。

// 动态规划
export default function numRollsToTarget(
  n: number,
  k: number,
  target: number
): number {
  const mod = 1e9 + 7;
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(target + 1).fill(0));
  for (let i = 1; i <= k && i <= target; i++) {
    dp[1][i] = 1;
  }
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      for (let l = 1; l <= k; l++) {
        if (j - l >= 1) {
          dp[i][j] += dp[i - 1][j - l];
          dp[i][j] %= mod;
        }
      }
    }
  }
  return dp[n][target];
}

// 深度优先搜索
// export default function numRollsToTarget(
//   n: number,
//   k: number,
//   target: number
// ): number {
//   const mod = 1e9 + 7;
//   let res = 0;
//   function dfs(sum = 0, index = 1) {
//     if (sum === target) {
//       res += 1;
//       res %= mod;
//       return res;
//     }
//     if (sum > target || index > n) return res;
//     for (let i = 1; i <= k; i++) {
//       dfs(sum + i, index + 1);
//     }
//     return res;
//   }
//   return dfs();
// }
