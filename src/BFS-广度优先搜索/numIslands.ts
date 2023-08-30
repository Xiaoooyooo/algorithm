// 链接：https://leetcode.cn/leetbook/read/queue-stack/kbcqv/
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

// 广度优先搜索 - 优化
export default function numIslands(grid: string[][]): number {
  const rows = grid.length,
    cols = grid[0].length;
  function bfs(i: number, j: number) {
    if (grid[i][j] === "0") return;
    const queue: string[] = [];
    queue.push(i + "," + j);
    while (queue.length !== 0) {
      const curr = queue.shift();
      const [_i, _j] = curr.split(",").map((e) => parseInt(e));
      if (grid[_i][_j] === "0") continue;
      grid[_i][_j] = "0";
      if (_i > 0 && grid[_i - 1][_j] === "1") {
        queue.push(_i - 1 + "," + _j);
      }
      if (_j > 0 && grid[_i][_j - 1] === "1") {
        queue.push(_i + "," + (_j - 1));
      }
      if (_i + 1 < rows && grid[_i + 1][_j] === "1") {
        queue.push(_i + 1 + "," + _j);
      }
      if (_j + 1 < cols && grid[_i][_j + 1] === "1") {
        queue.push(_i + "," + (_j + 1));
      }
    }
  }
  let res = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "0") continue;
      res += 1;
      bfs(i, j);
    }
  }
  return res;
}

// 广度优先搜索
// export default function numIslands(grid: string[][]): number {
//   const rows = grid.length,
//     cols = grid[0].length;
//   const visited = new Set();
//   function bfs(i: number, j: number) {
//     if (grid[i][j] === "0") return;
//     const queue: string[] = [];
//     queue.push(i + "," + j);
//     visited.add(i + "," + j);
//     while (queue.length !== 0) {
//       const curr = queue.shift();
//       const [_i, _j] = curr.split(",").map((e) => parseInt(e));
//       if (grid[_i][_j] === "0") continue;
//       grid[_i][_j] = "0";
//       if (_i - 1 >= 0 && !visited.has(_i - 1 + "," + _j)) {
//         queue.push(_i - 1 + "," + _j);
//         visited.add(_i - 1 + "," + _j);
//       }
//       if (_j - 1 >= 0 && !visited.has(_i + "," + (_j - 1))) {
//         queue.push(_i + "," + (_j - 1));
//         visited.add(_i + "," + (_j - 1));
//       }
//       if (_i + 1 < rows && !visited.has(_i + 1 + "," + _j)) {
//         queue.push(_i + 1 + "," + _j);
//         visited.add(_i + 1 + "," + _j);
//       }
//       if (_j + 1 < cols && !visited.has(_i + "," + (_j + 1))) {
//         queue.push(_i + "," + (_j + 1));
//         visited.add(_i + "," + (_j + 1));
//       }
//     }
//   }
//   let res = 0;
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (grid[i][j] === "0") continue;
//       res += 1;
//       bfs(i, j);
//     }
//   }
//   return res;
// }

// 深度优先搜索
// export default function numIslands(grid: string[][]): number {
//   const rows = grid.length,
//     cols = grid[0].length;
//   function dfs(i: number, j: number) {
//     if (i < 0 || j < 0 || i >= rows || j >= cols) return;
//     if (grid[i][j] === "0") return;
//     grid[i][j] = "0";
//     dfs(i - 1, j);
//     dfs(i + 1, j);
//     dfs(i, j - 1);
//     dfs(i, j + 1);
//   }
//   let res = 0;
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (grid[i][j] === "0") continue;
//       res += 1;
//       dfs(i, j);
//     }
//   }
//   return res;
// }

// 哈希表
// export default function numIslands(grid: string[][]): number {
//   const set = new Set<string>();
//   const rows = grid.length, cols = grid[0].length;
//   function check(i: number, j: number) {
//     if (i < 0 || j < 0 || i >= rows || j >= cols) return;
//     if (set.has(i + "," + j)) return;
//     if (grid[i][j] === "0") return;
//     set.add(i + "," + j);
//     check(i - 1, j);
//     check(i + 1, j);
//     check(i, j - 1);
//     check(i, j + 1);
//   }
//   let res = 0;
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (set.has(i + "," + j)) continue;
//       if (grid[i][j] === "0") continue;
//       res += 1;
//       check(i, j);
//     }
//   }
//   return res;
// };
