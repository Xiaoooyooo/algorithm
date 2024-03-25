// https://leetcode.cn/problems/minimum-number-of-visited-cells-in-a-grid/
// 给你一个下标从 0 开始的 m x n 整数矩阵 grid 。你一开始的位置在 左上角 格子 (0, 0) 。
// 当你在格子 (i, j) 的时候，你可以移动到以下格子之一：
// 满足 j < k <= grid[i][j] + j 的格子 (i, k) （向右移动），或者
// 满足 i < k <= grid[i][j] + i 的格子 (k, j) （向下移动）。
// 请你返回到达 右下角 格子 (m - 1, n - 1) 需要经过的最少移动格子数，如果无法到达右下角格子，请你返回 -1 。

// 广度优先搜索 + 记忆化搜索 超时
export default function minimumVisitedCells(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [[0, 0]];
  const visited = new Set();
  let times = 0;
  while (queue.length) {
    times++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [i, j] = queue.shift();
      if (i === rows - 1 && j === cols - 1) {
        return times;
      }
      // 优化点
      for (let row = i + 1; row < rows; row++) {
        if (row <= grid[i][j] + i && !visited.has(`${row},${j}`)) {
          visited.add(`${row},${j}`);
          queue.push([row, j]);
        }
      }
      for (let col = j + 1; col < cols; col++) {
        if (col <= grid[i][j] + j && !visited.has(`${i},${col}`)) {
          visited.add(`${i},${col}`);
          queue.push([i, col]);
        }
      }
    }
  }
  return -1;
}
