// https://leetcode.cn/problems/unique-paths-iii/
// 在二维网格 grid 上，有 4 种类型的方格：
// 1 表示起始方格。且只有一个起始方格。
// 2 表示结束方格，且只有一个结束方格。
// 0 表示我们可以走过的空方格。
// -1 表示我们无法跨越的障碍。
// 返回在四个方向（上、下、左、右）上行走时，从起始方格到结束方格的不同路径的数目。
// 每一个无障碍方格都要通过一次，但是一条路径中不能重复通过同一个方格。

// 记忆化搜索 + 状态压缩
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];
const memo = new Map();
export default function uniquePathsIII(grid: number[][]) {
  memo.clear();
  const r = grid.length,
    c = grid[0].length;
  let si = 0,
    sj = 0,
    st = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === 0 || grid[i][j] === 2) {
        st |= 1 << (i * c + j);
      } else if (grid[i][j] === 1) {
        si = i;
        sj = j;
      }
    }
  }
  return dp(grid, si, sj, st);
}

function dp(grid: number[][], i: number, j: number, st: number) {
  if (grid[i][j] === 2) {
    return st === 0 ? 1 : 0;
  }
  const r = grid.length,
    c = grid[0].length;
  const key = ((i * c + j) << (r * c)) + st;
  if (!memo.has(key)) {
    let res = 0;
    for (const dir of dirs) {
      const ni = i + dir[0],
        nj = j + dir[1];
      if (
        ni >= 0 &&
        ni < r &&
        nj >= 0 &&
        nj < c &&
        (st & (1 << (ni * c + nj))) > 0
      ) {
        res += dp(grid, ni, nj, st ^ (1 << (ni * c + nj)));
      }
    }
    memo.set(key, res);
  }
  return memo.get(key);
}

// 深度优先搜索
// export default function uniquePathsIII(grid: number[][]): number {
//   const rows = grid.length,
//     cols = grid[0].length;
//   let total = 0;
//   let sx = 0,
//     sy = 0;
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (grid[i][j] !== -1) {
//         total += 1;
//       }
//       if (grid[i][j] === 1) {
//         sx = i;
//         sy = j;
//       }
//     }
//   }
//   let res = 0;
//   function bfs(index: number, curr: [number, number], paths: string) {
//     const [x, y] = curr;
//     if (grid[x][y] === -1) return;
//     if (grid[x][y] === 2 && index === total) {
//       res += 1;
//       return;
//     }
//     const pathsSet = new Set(paths.split(" "));
//     if (x > 0 && !pathsSet.has(x - 1 + "," + y)) {
//       bfs(index + 1, [x - 1, y], paths + " " + (x - 1) + "," + y);
//     }
//     if (x < rows - 1 && !pathsSet.has(x + 1 + "," + y)) {
//       bfs(index + 1, [x + 1, y], paths + " " + (x + 1) + "," + y);
//     }
//     if (y > 0 && !pathsSet.has(x + "," + (y - 1))) {
//       bfs(index + 1, [x, y - 1], paths + " " + x + "," + (y - 1));
//     }
//     if (y < cols - 1 && !pathsSet.has(x + "," + (y + 1))) {
//       bfs(index + 1, [x, y + 1], paths + " " + x + "," + (y + 1));
//     }
//   }
//   bfs(1, [sx, sy], sx + "," + sy);
//   return res;
// }
