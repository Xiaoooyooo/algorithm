// https://leetcode.cn/problems/maximal-square/?envType=study-plan-v2&envId=dynamic-programming
// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

export default function maximalSquare(matrix: string[][]): number {
  const rows = matrix.length,
    cols = matrix[0].length;
  const dp = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0));
  let len = 0;
  for (let i = 0; i < rows; i++) {
    dp[i][0] = Number(matrix[i][0]);
    if (dp[i][0] === 1) len = 1;
  }
  for (let i = 0; i < cols; i++) {
    dp[0][i] = Number(matrix[0][i]);
    if (dp[0][i] === 1) len = 1;
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === "0") continue;
      dp[i][j] =
        Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;
      len = Math.max(len, dp[i][j]);
    }
  }
  return len * len;
}

// export default function maximalSquare(matrix: string[][]): number {
//   const rows = matrix.length,
//     cols = matrix[0].length;
//   const dp = Array(rows)
//     .fill(null)
//     .map(() => Array(cols).fill(0));
//   let len = 0;
//   for (let i = 0; i < rows; i++) {
//     dp[i][0] = Number(matrix[i][0]);
//     if (dp[i][0] === 1) len = 1;
//   }
//   for (let i = 0; i < cols; i++) {
//     dp[0][i] = Number(matrix[0][i]);
//     if (dp[0][i] === 1) len = 1;
//   }
//   for (let i = 1; i < rows; i++) {
//     for (let j = 1; j < cols; j++) {
//       let p = dp[i - 1][j - 1];
//       if (p === 0 || matrix[i][j] === "0") {
//         dp[i][j] = Number(matrix[i][j]);
//       } else {
//         while (p > 0) {
//           let bot = 0,
//             right = 0;
//           for (let k = 1; k <= p; k++) {
//             bot += Number(matrix[i][j - k]);
//             right += Number(matrix[i - k][j]);
//           }
//           if (bot === p && right === p) {
//             dp[i][j] = p + 1;
//             break;
//           }
//           p--;
//         }
//         dp[i][j] = Math.max(dp[i][j], Number(matrix[i][j]));
//       }
//       len = Math.max(len, dp[i][j]);
//     }
//   }
//   return len * len;
// }
