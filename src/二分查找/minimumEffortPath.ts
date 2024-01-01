// https://leetcode.cn/problems/path-with-minimum-effort/
// 你准备参加一场远足活动。给你一个二维 rows x columns 的地图 heights ，其中 heights[row][col] 表示格子 (row, col) 的高度。
// 一开始你在最左上角的格子 (0, 0) ，且你希望去最右下角的格子 (rows-1, columns-1) （注意下标从 0 开始编号）。
// 你每次可以往 上，下，左，右 四个方向之一移动，你想要找到耗费 体力 最小的一条路径。
// 一条路径耗费的 体力值 是路径上相邻格子之间 高度差绝对值 的 最大值 决定的。
// 请你返回从左上角走到右下角的最小 体力消耗值 。

// 官方题解 二分查找
export default function minimumEffortPath(heights: number[][]): number {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  const m = heights.length,
    n = heights[0].length;
  let left = 0,
    right = 999999,
    ans = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const queue = [[0, 0]];
    const seen = new Array(m * n).fill(0);
    seen[0] = 1;
    while (queue.length) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dirs[i][0];
        const ny = y + dirs[i][1];
        if (
          nx >= 0 &&
          nx < m &&
          ny >= 0 &&
          ny < n &&
          !seen[nx * n + ny] &&
          Math.abs(heights[x][y] - heights[nx][ny]) <= mid
        ) {
          queue.push([nx, ny]);
          seen[nx * n + ny] = 1;
        }
      }
    }
    if (seen[m * n - 1]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

// dfs 超时
// export default function minimumEffortPath(heights: number[][]): number {
//   const rows = heights.length,
//     cols = heights[0].length;
//   const dirs = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1]
//   ];
//   let res = 1e6;
//   function dfs(
//     path: [number, number][],
//     current: [number, number],
//     effort: number
//   ) {
//     if (current[0] === rows - 1 && current[1] === cols - 1) {
//       res = Math.min(res, effort);
//       return;
//     }
//     for (const [dx, dy] of dirs) {
//       const _x = current[0] + dx,
//         _y = current[1] + dy;
//       if (_x >= 0 && _x < rows && _y >= 0 && _y < cols) {
//         if (!path.find(([x, y]) => x === _x && y === _y)) {
//           const _effort = Math.abs(heights[_x][_y] - heights[current[0]][current[1]]);
//           dfs(path.concat([current]), [_x, _y], Math.max(effort, _effort));
//         }
//       }
//     }
//   }
//   dfs([], [0, 0], 0);
//   return res;
// }
