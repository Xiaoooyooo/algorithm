// https://leetcode.cn/problems/stone-game-vii/
// 石子游戏中，爱丽丝和鲍勃轮流进行自己的回合，爱丽丝先开始 。
// 有 n 块石子排成一排。每个玩家的回合中，可以从行中 移除 最左边的石头或最右边的石头，并获得与该行中剩余石头值之 和 相等的得分。当没有石头可移除时，得分较高者获胜。
// 鲍勃发现他总是输掉游戏（可怜的鲍勃，他总是输），所以他决定尽力 减小得分的差值 。爱丽丝的目标是最大限度地 扩大得分的差值 。
// 给你一个整数数组 stones ，其中 stones[i] 表示 从左边开始 的第 i 个石头的值，如果爱丽丝和鲍勃都 发挥出最佳水平 ，请返回他们 得分的差值 。

// 记忆化搜索
export default function stoneGameVII(stones: number[]): number {
  const n = stones.length;
  const sum = Array(n + 1).fill(0);
  const memo = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + stones[i];
  }
  const dfs = (i: number, j: number): number => {
    if (i >= j) {
      return 0;
    }
    if (memo[i][j] !== 0) {
      return memo[i][j];
    }
    const res: number = Math.max(
      sum[j + 1] - sum[i + 1] - dfs(i + 1, j),
      sum[j] - sum[i] - dfs(i, j - 1)
    );
    memo[i][j] = res;
    return res;
  };

  return dfs(0, n - 1);
}

// 动态规划
// export default function stoneGameVII(stones: number[]): number {
//   const len = stones.length;
//   const dp = Array(len)
//     .fill(0)
//     .map(() => Array(len).fill(0));
//   const sum = Array(len + 1).fill(0);
//   for (let i = 1; i <= len; i++) {
//     sum[i] = stones[i - 1] + sum[i - 1];
//   }
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j + i < len; j++) {
//       const a = sum[j + i] - sum[j] - dp[j][j + i - 1];
//       const b = sum[j + i + 1] - sum[j + 1] - dp[j + 1][j + i];
//       dp[j][j + i] = Math.max(a, b);
//     }
//   }
//   return dp[0][len - 1];
// }
