// https://leetcode.cn/problems/pascals-triangle/
// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
export function generate(n: number) {
  const dp = [];
  for (let i = 0; i < n; i++) {
    const row = Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
    dp.push(row);
  }
  return dp;
}
export function getRow(rowIndex: number) {
  const dp = generate(rowIndex + 1);
  return dp[rowIndex];
}
