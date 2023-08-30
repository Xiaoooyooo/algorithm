// 链接：https://leetcode.cn/leetbook/read/queue-stack/g7pyt/
// 给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，
// 其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。
// 两个相邻元素间的距离为 1 。
export default function updateMatrix(mat: number[][]): number[][] {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  const rows = mat.length,
    cols = mat[0].length;
  const dist = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0));
  const visited = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false));
  const queue = [];
  // 将所有的 0 添加进初始队列中
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (mat[i][j] == 0) {
        queue.push([i, j]);
        visited[i][j] = true;
      }
    }
  }

  // 广度优先搜索
  while (queue.length) {
    const curr = queue.shift();
    const x = curr[0],
      y = curr[1];
    for (let d = 0; d < 4; d++) {
      let _x = x + dirs[d][0];
      let _y = y + dirs[d][1];
      if (_x >= 0 && _x < rows && _y >= 0 && _y < cols && !visited[_x][_y]) {
        dist[_x][_y] = dist[x][y] + 1;
        queue.push([_x, _y]);
        visited[_x][_y] = true;
      }
    }
  }

  return dist;
}

// 遍历 500ms
// export default function updateMatrix(mat: number[][]): number[][] {
//   const rows = mat.length,
//     cols = mat[0].length;
//   const res = Array(rows)
//     .fill(null)
//     .map(() => Array(cols).fill(0));
//   let d = 1;
//   let flag = false;
//   while (!flag) {
//     flag = true;
//     const arr = [];
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         if (mat[i][j] === 1) {
//           flag = false;
//           if (
//             (i > 0 && mat[i - 1][j] === 0) ||
//             (i < rows - 1 && mat[i + 1][j] === 0) ||
//             (j > 0 && mat[i][j - 1] === 0) ||
//             (j < cols - 1 && mat[i][j + 1] === 0)
//           ) {
//             res[i][j] = d;
//             arr.push([i, j]);
//           }
//         }
//       }
//     }
//     for (let [x, y] of arr) {
//       mat[x][y] = 0;
//     }
//     d++;
//   }
//   return res;
// }

// 广度优先搜索 - 超时
// export default function updateMatrix(mat: number[][]): number[][] {
//   const rows = mat.length,
//     cols = mat[0].length;
//   const res = Array(rows)
//     .fill(null)
//     .map(() => Array(cols).fill(0));
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (mat[i][j] === 1) {
//         const queue = [];
//         const visited = new Set();
//         queue.push([i, j]);
//         let d = 1,
//           flag = true;
//         while (queue.length && flag) {
//           const len = queue.length;
//           for (let k = 0; k < len; k++) {
//             const [x, y] = queue.shift();
//             if (
//               (x > 0 && mat[x - 1][y] === 0) ||
//               (x < rows - 1 && mat[x + 1][y] === 0) ||
//               (y > 0 && mat[x][y - 1] === 0) ||
//               (y < cols - 1 && mat[x][y + 1] === 0)
//             ) {
//               res[i][j] = d;
//               flag = false;
//               break;
//             }
//             if (x > 0 && !visited.has(x - 1 + "," + y)) {
//               queue.push([x - 1, y]);
//               visited.add(x - 1 + "," + y);
//             }
//             if (x < rows - 1 && !visited.has(x + 1 + "," + y)) {
//               queue.push([x + 1, y]);
//               visited.add(x + 1 + "," + y);
//             }
//             if (y > 0 && !visited.has(x + "," + (y - 1))) {
//               queue.push([x, y - 1]);
//               visited.add(x + "," + (y - 1));
//             }
//             if (y < cols - 1 && !visited.has(x + "," + (y + 1))) {
//               queue.push([x, y + 1]);
//               visited.add(x + "," + (y + 1));
//             }
//           }
//           d++;
//         }
//       }
//     }
//   }
//   return res;
// }
