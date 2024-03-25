// https://leetcode.cn/problems/maximum-number-of-moves-in-a-grid/description/
// 给你一个下标从 0 开始、大小为 m x n 的矩阵 grid ，矩阵由若干 正 整数组成。
// 你可以从矩阵第一列中的 任一 单元格出发，按以下方式遍历 grid ：
// 从单元格 (row, col) 可以移动到 (row - 1, col + 1)、(row, col + 1) 和 (row + 1, col + 1) 三个单元格中任一满足值 严格 大于当前单元格的单元格。
// 返回你在矩阵中能够 移动 的 最大 次数。

// 动态规划
export default function maxMoves(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(-1));
  for (let i = 0; i < rows; i++) {
    dp[i][0] = 0;
  }
  let max = 0;
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (dp[row][col] !== -1) {
        // (row - 1, col + 1)
        if (
          row - 1 >= 0 &&
          col + 1 < cols &&
          grid[row - 1][col + 1] > grid[row][col]
        ) {
          dp[row - 1][col + 1] = Math.max(
            dp[row - 1][col + 1],
            dp[row][col] + 1
          );
        }
        // (row, col + 1)
        if (col + 1 < cols && grid[row][col + 1] > grid[row][col]) {
          dp[row][col + 1] = Math.max(dp[row][col + 1], dp[row][col] + 1);
        }
        // (row + 1, col + 1)
        if (
          row + 1 < rows &&
          col + 1 < cols &&
          grid[row + 1][col + 1] > grid[row][col]
        ) {
          dp[row + 1][col + 1] = Math.max(
            dp[row + 1][col + 1],
            dp[row][col] + 1
          );
        }
        max = Math.max(max, dp[row][col]);
      }
    }
  }
  return max;
}

// dfs 超时
// export default function maxMoves(grid: number[][]): number {
//   const rows = grid.length;
//   const cols = grid[0].length;
//   let max = 0;
//   function dfs(row: number, col: number, count: number) {
//     max = Math.max(max, count);
//     // (row - 1, col + 1)
//     if (
//       row - 1 >= 0 &&
//       col + 1 < cols &&
//       grid[row - 1][col + 1] > grid[row][col]
//     ) {
//       dfs(row - 1, col + 1, count + 1);
//     }
//     // (row, col + 1)
//     if (col + 1 < cols && grid[row][col + 1] > grid[row][col]) {
//       dfs(row, col + 1, count + 1);
//     }
//     // (row + 1, col + 1)
//     if (
//       row + 1 < rows &&
//       col + 1 < cols &&
//       grid[row + 1][col + 1] > grid[row][col]
//     ) {
//       dfs(row + 1, col + 1, count + 1);
//     }
//   }

//   for (let i = 0; i < rows; i++) {
//     dfs(i, 0, 0);
//   }

//   return max;
// }
