// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
// 一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
// 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
// 你能想出一个仅使用常量空间的解决方案吗？

// 方法1：时间复杂度 O(n^2)，空间复杂度 O(nm)
// export default function setZeroes(matrix: number[][]) {
//   const rows = matrix.length,
//     cols = matrix[0].length;
//   const temp = [];
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (matrix[i][j] === 0) {
//         temp.push([i, j]);
//       }
//     }
//   }
//   for (let k = 0, len = temp.length; k < len; k++) {
//     const [r, c] = temp[k];
//     let _r = 0,
//       _c = 0;
//     while (_r < rows) {
//       matrix[_r++][c] = 0;
//     }
//     while (_c < cols) {
//       matrix[r][_c++] = 0;
//     }
//   }
// }

// 方法2：时间复杂度 O(n^2)，空间复杂度 O(n + m)
// export default function setZeroes(matrix: number[][]) {
//   const rows = matrix.length,
//     cols = matrix[0].length;
//   const zeroRows: number[] = [];
//   const zeroCols: number[] = [];
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (matrix[i][j] === 0) {
//         zeroRows.push(i);
//         zeroCols.push(j);
//       }
//     }
//   }
//   for (let i = 0, len = zeroRows.length; i < len; i++) {
//     for (let j = 0; j < cols; j++) {
//       matrix[zeroRows[i]][j] = 0;
//     }
//   }
//   for (let i = 0, len = zeroCols.length; i < len; i++) {
//     for (let j = 0; j < rows; j++) {
//       matrix[j][zeroCols[i]] = 0;
//     }
//   }
// }

// 方法3：你能想出一个仅使用常量空间的解决方案吗？
export default function setZeroes(matrix: number[][]) {
  const rows = matrix.length,
    cols = matrix[0].length;
  let rowFlag = false,
    colFlag = false;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) {
          // 如果是第一行的数，并且其中有 0 的话
          rowFlag = true;
        }
        if (j === 0) {
          // 如果是第一列的数，并且其中有 0 的话
          colFlag = true;
        }
        // 将行首置为 0
        matrix[i][0] = 0;
        // 将列首置为 0
        matrix[0][j] = 0;
      }
    }
  }
  // 处理除首行之外的其他行
  for (let i = 1; i < rows; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 1; j < cols; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  // 处理除首列之外的其他列
  for (let i = 1; i < cols; i++) {
    if (matrix[0][i] === 0) {
      for (let j = 1; j < rows; j++) {
        matrix[j][i] = 0;
      }
    }
  }
  // 处理首行
  if (rowFlag) {
    for (let i = 0; i < cols; i++) {
      matrix[0][i] = 0;
    }
  }
  // 处理首列
  if (colFlag) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
}
