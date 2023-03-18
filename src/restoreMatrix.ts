// 链接：https://leetcode.cn/problems/find-valid-matrix-given-row-and-column-sums
// 给你两个非负整数数组 rowSum 和 colSum ，
// 其中 rowSum[i] 是二维矩阵中第 i 行元素的和，
// colSum[j] 是第 j 列元素的和。
// 换言之你不知道矩阵里的每个元素，但是你知道每一行和每一列的和。
// 请找到大小为 rowSum.length x colSum.length 的任意 非负整数 矩阵，且该矩阵满足 rowSum 和 colSum 的要求。
// 请你返回任意一个满足题目要求的二维矩阵，题目保证存在 至少一个 可行矩阵。

export default function restoreMatrix(
  rowSum: number[],
  colSum: number[]
): number[][] {
  const rows = rowSum.length,
    cols = colSum.length;
  const arr = Array(rows)
    .fill(undefined)
    .map(() => Array(cols).fill(0));
  let i = 0,
    j = 0;
  while (i < rows && j < cols) {
    const min = Math.min(rowSum[i], colSum[j]);
    arr[i][j] = min;
    rowSum[i] -= min;
    colSum[j] -= min;
    if (rowSum[i] === 0) i++;
    if (colSum[j] === 0) j++;
  }
  return arr;
}
