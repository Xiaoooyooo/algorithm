// 链接：https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof
// 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
// 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
// 给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

// 基础动态规划
export default function maxValue(grid: number[][]): number {
  const rows = grid.length,
    cols = grid[0].length;
  const dp = Array(rows)
    .fill(undefined)
    .map(() => Array(cols).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        const max = Math.max(dp[i - 1][j], dp[i][j - 1]);
        dp[i][j] = max + grid[i][j];
      }
    }
  }
  return dp[rows - 1][cols - 1];
}
