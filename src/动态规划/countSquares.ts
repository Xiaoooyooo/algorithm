// https://leetcode.cn/problems/count-square-submatrices-with-all-ones/description/
// 给你一个 m * n 的矩阵，矩阵中的元素不是 0 就是 1，请你统计并返回其中完全由 1 组成的 正方形 子矩阵的个数。

// 动态规划
export default function countSquares(matrix: number[][]): number {
  const rows = matrix.length,
    cols = matrix[0].length;
  const dp = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0));
  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = matrix[i][j];
      } else if (matrix[i][j] === 1) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }
      count += dp[i][j];
    }
  }
  return count;
}
