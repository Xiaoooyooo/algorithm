// https://leetcode.cn/problems/minimum-path-sum/
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。

export default function minPathSum(grid: number[][]): number {
  const rows = grid.length,
    cols = grid[0].length;
  const dp = Array(rows)
    .fill(undefined)
    .map(() => Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
        continue;
      }
      if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
        continue;
      }
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
        continue;
      }
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[rows - 1][cols - 1];
}
