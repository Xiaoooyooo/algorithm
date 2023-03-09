// 链接：https://leetcode.cn/problems/largest-local-values-in-a-matrix
// 给你一个大小为 n x n 的整数矩阵 grid 。
// 生成一个大小为 (n - 2) x (n - 2) 的整数矩阵  maxLocal ，并满足：
// maxLocal[i][j] 等于 grid 中以 i + 1 行和 j + 1 列为中心的 3 x 3 矩阵中的 最大值 。
// 换句话说，我们希望找出 grid 中每个 3 x 3 矩阵中的最大值。
// 返回生成的矩阵。

export default function largestLocal(grid: number[][]): number[][] {
  const rows = grid.length,
    cols = grid[0].length;
  const maxLocal: number[][] = Array(rows - 2)
    .fill(undefined)
    .map(() => Array(cols - 2).fill(undefined));
  const total = (rows - 2) * (cols - 2);
  for (let i = 0; i < total; i++) {
    const row = Math.floor(i / (cols - 2)),
      col = i % (cols - 2);
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = row; j < row + 3; j++) {
      for (let k = col; k < col + 3; k++) {
        max = Math.max(max, grid[j][k]);
      }
    }
    maxLocal[row][col] = max;
  }
  return maxLocal;
}

// export default function largestLocal(grid: number[][]): number[][] {
//   const rows = grid.length,
//     cols = grid[0].length;
//   const maxLocal: number[][] = Array(rows - 2)
//     .fill(undefined)
//     .map(() => Array(cols - 2));
//   for (let i = 0; i < rows - 2; i++) {
//     for (let j = 0; j < cols - 2; j++) {
//       let max = Number.MIN_SAFE_INTEGER;
//       for (let _i = i; _i < i + 3; _i++) {
//         for (let _j = j; _j < j + 3; _j++) {
//           max = Math.max(max, grid[_i][_j]);
//         }
//       }
//       maxLocal[i][j] = max;
//     }
//   }
//   return maxLocal;
// }
