// 链接：https://leetcode.cn/problems/reshape-the-matrix
// 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。
// 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。
// 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。
// 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

export default function matrixReshape(mat: number[][], r: number, c: number) {
  const rows = mat.length,
    cols = mat[0].length;
  if (rows * cols !== r * c) return mat;
  const total = rows * cols,
    res = [];
  let curr = 0;
  let i = 0,
    j = 0; // 原矩阵
  let _i = 0, // 新矩阵
    _j = 0;
  while (curr < total) {
    if (!res[_i]) res[_i] = [];
    res[_i][_j++] = mat[i][j++];
    if (_j === c) {
      _j = 0;
      _i++;
    }
    if (j === cols) {
      j = 0;
      i++;
    }
    curr++;
  }
  return res;
}
