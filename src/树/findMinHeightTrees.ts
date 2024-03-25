// https://leetcode.cn/problems/minimum-height-trees/description/
// 树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，一个任何没有简单环路的连通图都是一棵树。
// 给你一棵包含 n 个节点的树，标记为 0 到 n - 1 。
// 给定数字 n 和一个有 n - 1 条无向边的 edges 列表（每一个边都是一对标签），其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条无向边。
// 可选择树中任何一个节点作为根。当选择节点 x 作为根节点时，设结果树的高度为 h 。在所有可能的树中，具有最小高度的树（即，min(h)）被称为 最小高度树 。
// 请你找到所有的 最小高度树 并按 任意顺序 返回它们的根节点标签列表。
// 树的 高度 是指根节点和叶子节点之间最长向下路径上边的数量。

// 官方题解 深度优先搜索
export default function findMinHeightTrees(
  n: number,
  edges: number[][]
): number[] {
  const ans = [];
  if (n === 1) {
    ans.push(0);
    return ans;
  }
  const adj = new Array(n).fill(0).map(() => []);
  for (const edge of edges) {
    adj[edge[0]].push(edge[1]);
    adj[edge[1]].push(edge[0]);
  }
  const findLongestNode = (u: number, parent: number[], adj: number[][]) => {
    const n = adj.length;
    const dist = new Array(n).fill(-1);
    dist[u] = 0;

    const dfs = (
      u: number,
      dist: number[],
      parent: number[],
      adj: number[][]
    ) => {
      for (const v of adj[u]) {
        if (dist[v] < 0) {
          dist[v] = dist[u] + 1;
          parent[v] = u;
          dfs(v, dist, parent, adj);
        }
      }
    };

    dfs(u, dist, parent, adj);
    let maxdist = 0;
    let node = -1;
    for (let i = 0; i < n; i++) {
      if (dist[i] > maxdist) {
        maxdist = dist[i];
        node = i;
      }
    }
    return node;
  };

  const parent = new Array(n).fill(-1);
  /* 找到与节点 0 最远的节点 x */
  const x = findLongestNode(0, parent, adj);
  /* 找到与节点 x 最远的节点 y */
  let y = findLongestNode(x, parent, adj);
  /* 求出节点 x 到节点 y 的路径 */
  const path = [];
  parent[x] = -1;
  while (y !== -1) {
    path.push(y);
    y = parent[y];
  }
  const m = path.length;
  if (m % 2 === 0) {
    ans.push(path[Math.floor(m / 2) - 1]);
  }
  ans.push(path[Math.floor(m / 2)]);
  return ans;
}

// 深度优先 + 记忆化搜索 超时
// export default function findMinHeightTrees(
//   n: number,
//   edges: number[][]
// ): number[] {
//   const grid = Array(n + 1)
//     .fill(0)
//     .map(() => []);
//   for (const [a, b] of edges) {
//     grid[a].push(b);
//     grid[b].push(a);
//   }
//   const map = new Map();
//   function dfs(from: number, to: number) {
//     const k = `${from}-${to}`;
//     if (map.has(k)) {
//       return map.get(k);
//     }
//     if (grid[to].length === 0) {
//       return 0;
//     }
//     let max = 0;
//     for (const node of grid[to]) {
//       if (node !== from) {
//         max = Math.max(max, 1 + dfs(to, node));
//       }
//     }
//     map.set(k, max);
//     return max;
//   }
//   const heights = new Map();
//   let min = n;
//   for (let i = 0; i < n; i++) {
//     let max = 0;
//     for (const node of grid[i]) {
//       if (node !== i) {
//         const h = 1 + dfs(i, node);
//         if (!heights.has(h)) {
//           heights.set(h, new Set());
//         }
//         heights.set(h, heights.get(h).add(i));
//         max = Math.max(max, h);
//       }
//     }
//     min = Math.min(min, max);
//   }
//   return heights.has(min) ? Array.from(heights.get(min).values()) : [0];
// }
