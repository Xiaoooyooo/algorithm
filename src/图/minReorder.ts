// https://leetcode.cn/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
// n 座城市，从 0 到 n-1 编号，其间共有 n-1 条路线。因此，要想在两座不同城市之间旅行只有唯一一条路线可供选择（路线网形成一颗树）。
// 去年，交通运输部决定重新规划路线，以改变交通拥堵的状况。
// 路线用 connections 表示，其中 connections[i] = [a, b] 表示从城市 a 到 b 的一条有向路线。
// 今年，城市 0 将会举办一场大型比赛，很多游客都想前往城市 0 。
// 请你帮助重新规划路线方向，使每个城市都可以访问城市 0 。返回需要变更方向的最小路线数。
// 题目数据 保证 每个城市在重新规划路线方向后都能到达城市 0 。

export default function minReorder(n: number, connections: number[][]): number {
  const e = new Array(n).fill(0).map(() => []);
  for (const edge of connections) {
    e[edge[0]].push([edge[1], 1]);
    e[edge[1]].push([edge[0], 0]);
  }

  const dfs = function (x: number, parent: number) {
    let res = 0;
    for (const edge of e[x]) {
      if (edge[0] == parent) {
        continue;
      }
      res += edge[1] + dfs(edge[0], x);
    }
    return res;
  };
  return dfs(0, -1);
}
// 广度优先搜索
// export default function minReorder(n: number, connections: number[][]): number {
//   const grid = Array(n)
//     .fill(0)
//     .map(() => [[], []]); // [froms, tos]
//   for (const [a, b] of connections) {
//     grid[b][0].push(a);
//     grid[a][1].push(b);
//   }
//   let res = 0;
//   const queue = [0];
//   const visited = new Set();
//   while (queue.length) {
//     const curr = queue.shift();
//     if (visited.has(curr)) {
//       continue;
//     }
//     visited.add(curr);
//     const [froms, tos] = grid[curr];
//     froms.forEach((el) => {
//       if (!visited.has(el)) {
//         queue.push(el);
//       }
//     });
//     tos.forEach((el) => {
//       if (!visited.has(el)) {
//         res++;
//         queue.push(el);
//       }
//     });
//   }
//   return res;
// }
