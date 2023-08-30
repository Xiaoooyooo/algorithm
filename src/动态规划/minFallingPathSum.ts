// https://leetcode.cn/problems/minimum-falling-path-sum-ii/description/
// 给你一个 n x n 整数矩阵 grid ，请你返回 非零偏移下降路径 数字和的最小值。
// 非零偏移下降路径 定义为：从 grid 数组中的每一行选择一个数字，
// 且按顺序选出来的数字中，相邻数字不在原数组的同一列。

// 动态规划
export default function minFallingPathSum(grid: number[][]): number {
  const n = grid.length;
  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[0][i] = grid[0][i];
  }
  let min = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  for (let i = 0; i < n; i++) {
    if (grid[0][i] <= min[0]) {
      min[1] = min[0];
      min[0] = grid[0][i];
    } else if (grid[0][i] < min[1]) {
      min[1] = grid[0][i];
    }
  }
  for (let i = 1; i < n; i++) {
    let _min1 = Number.MAX_SAFE_INTEGER,
      _min2 = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < n; j++) {
      if (dp[i - 1][j] !== min[0]) {
        dp[i][j] = min[0] + grid[i][j];
      } else {
        dp[i][j] = min[1] + grid[i][j];
      }
      if (dp[i][j] <= _min1) {
        _min2 = _min1;
        _min1 = dp[i][j];
      } else if (dp[i][j] < _min2) {
        _min2 = dp[i][j];
      }
    }
    min = [_min1, _min2];
  }
  // console.log(dp);
  return min[0];
}
