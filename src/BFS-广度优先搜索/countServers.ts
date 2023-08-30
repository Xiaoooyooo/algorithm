// 这里有一幅服务器分布图，服务器的位置标识在 m * n 的整数矩阵网格 grid 中，
// 1 表示单元格上有服务器，0 表示没有。
// 如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信。
// 请你统计并返回能够与至少一台其他服务器进行通信的服务器的数量。

// 广度优先搜索
export default function countServers(grid: number[][]): number {
  const rows = grid.length,
    cols = grid[0].length;
  const visited = new Set();
  function bfs(row: number, col: number) {
    if (visited.has(row + "," + col)) return;
    visited.add(row + "," + col);
    const queue: [number, number][] = [];
    queue.push([row, col]);
    let count = 0;
    while (queue.length) {
      const [_row, _col] = queue.shift();
      count++;
      for (let i = 0; i < rows; i++) {
        if (grid[i][_col] === 1 && !visited.has(i + "," + _col)) {
          visited.add(i + "," + _col);
          queue.push([i, _col]);
        }
      }
      for (let i = 0; i < cols; i++) {
        if (grid[_row][i] === 1 && !visited.has(_row + "," + i)) {
          visited.add(_row + "," + i);
          queue.push([_row, i]);
        }
      }
    }
    if (count !== 1) res += count;
  }
  let res = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) bfs(i, j);
    }
  }
  return res;
}

// 计数 + 哈希表
// export default function countServers(grid: number[][]): number {
//   const m = grid.length,
//     n = grid[0].length;
//   const rows = new Map();
//   const cols = new Map();
//   for (let i = 0; i < m; ++i) {
//     for (let j = 0; j < n; ++j) {
//       if (grid[i][j] == 1) {
//         rows.set(i, (rows.get(i) || 0) + 1);
//         cols.set(j, (cols.get(j) || 0) + 1);
//       }
//     }
//   }
//   let ans = 0;
//   for (let i = 0; i < m; ++i) {
//     for (let j = 0; j < n; ++j) {
//       if (
//         grid[i][j] == 1 &&
//         ((rows.get(i) || 0) > 1 || (cols.get(j) || 0) > 1)
//       ) {
//         ++ans;
//       }
//     }
//   }
//   return ans;
// }
