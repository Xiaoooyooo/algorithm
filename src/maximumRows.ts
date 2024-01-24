// https://leetcode.cn/problems/maximum-rows-covered-by-columns/
// 给你一个下标从 0 开始、大小为 m x n 的二进制矩阵 matrix ；另给你一个整数 numSelect，表示你必须从 matrix 中选择的 不同 列的数量。
// 如果一行中所有的 1 都被你选中的列所覆盖，则认为这一行被 覆盖 了。
// 形式上，假设 s = {c1, c2, ...., cnumSelect} 是你选择的列的集合。对于矩阵中的某一行 row ，如果满足下述条件，则认为这一行被集合 s 覆盖：
//   对于满足 matrix[row][col] == 1 的每个单元格 matrix[row][col]（0 <= col <= n - 1），col 均存在于 s 中，或者
//   row 中 不存在 值为 1 的单元格。
// 你需要从矩阵中选出 numSelect 个列，使集合覆盖的行数最大化。
// 返回一个整数，表示可以由 numSelect 列构成的集合 覆盖 的 最大行数 。

// 官方题解 二进制枚举
export default function maximumRows(
  matrix: number[][],
  numSelect: number
): number {
  function countOne(n: number) {
    let res = 0;
    while (n) {
      n &= n - 1;
      res++;
    }
    return res;
  }

  const m = matrix.length,
    n = matrix[0].length;
  const mask = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      mask[i] += matrix[i][j] << (n - 1 - j);
    }
  }
  let res = 0,
    cur = 0;
  const limit = 1 << n;
  while (++cur < limit) {
    if (countOne(cur) != numSelect) {
      continue;
    }
    let t = 0;
    for (let j = 0; j < m; j++) {
      if ((mask[j] & cur) == mask[j]) {
        ++t;
      }
    }
    res = Math.max(res, t);
  }
  return res;
}

// 深度优先搜索
// export default function maximumRows(
//   matrix: number[][],
//   numSelect: number
// ): number {
//   const rows = matrix.length;
//   const cols = matrix[0].length;
//   const rowOnes = Array(rows).fill(0);
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (matrix[i][j] === 1) {
//         rowOnes[i]++;
//       }
//     }
//   }
//   let ans = 0;
//   function dfs(select: number[], col: number) {
//     if (select.length === numSelect) {
//       let cover = 0;
//       for (let i = 0; i < rows; i++) {
//         let ones = 0;
//         for (let j = 0; j < select.length; j++) {
//           if (matrix[i][select[j]] === 1) {
//             ones++;
//           }
//         }
//         if (ones === rowOnes[i]) {
//           cover++;
//         }
//       }
//       ans = Math.max(ans, cover);
//       return;
//     }
//     if (col >= cols || select.length + cols - col < numSelect) {
//       return;
//     }
//     dfs(select.slice(), col + 1);
//     dfs(select.slice().concat(col), col + 1);
//   }
//   dfs([], 0);
//   return ans;
// }
