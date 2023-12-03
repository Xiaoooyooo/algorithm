// https://leetcode.cn/problems/first-completely-painted-row-or-column/
// 给你一个下标从 0 开始的整数数组 arr 和一个 m x n 的整数 矩阵 mat 。arr 和 mat 都包含范围 [1，m * n] 内的 所有 整数。
// 从下标 0 开始遍历 arr 中的每个下标 i ，并将包含整数 arr[i] 的 mat 单元格涂色。
// 请你找出 arr 中在 mat 的某一行或某一列上都被涂色且下标最小的元素，并返回其下标 i 。

export default function firstCompleteIndex(
  arr: number[],
  mat: number[][]
): number {
  const rows = mat.length,
    cols = mat[0].length;
  const rowSet = Array(rows)
    .fill(0)
    .map(() => new Set());
  const colSet = Array(cols)
    .fill(0)
    .map(() => new Set());
  const numPos = new Map();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      rowSet[i].add(mat[i][j]);
      colSet[j].add(mat[i][j]);
      numPos.set(mat[i][j], [i, j]);
    }
  }
  for (let i = 0; i < rows * cols; i++) {
    const [row, col] = numPos.get(arr[i]);
    rowSet[row].delete(arr[i]);
    if (rowSet[row].size === 0) {
      return i;
    }
    colSet[col].delete(arr[i]);
    if (colSet[col].size === 0) {
      return i;
    }
  }
}
