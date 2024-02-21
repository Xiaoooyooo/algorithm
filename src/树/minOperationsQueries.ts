// https://leetcode.cn/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/description/
// 现有一棵由 n 个节点组成的无向树，节点按从 0 到 n - 1 编号。
// 给你一个整数 n 和一个长度为 n - 1 的二维整数数组 edges ，
// 其中 edges[i] = [ui, vi, wi] 表示树中存在一条位于节点 ui 和节点 vi 之间、权重为 wi 的边。
// 另给你一个长度为 m 的二维整数数组 queries ，其中 queries[i] = [ai, bi] 。
// 对于每条查询，请你找出使从 ai 到 bi 路径上每条边的权重相等所需的 最小操作次数 。
// 在一次操作中，你可以选择树上的任意一条边，并将其权重更改为任意值。
// 注意：
// 查询之间 相互独立 的，这意味着每条新的查询时，树都会回到 初始状态 。
// 从 ai 到 bi的路径是一个由 不同 节点组成的序列，从节点 ai 开始，到节点 bi 结束，且序列中相邻的两个节点在树中共享一条边。
// 返回一个长度为 m 的数组 answer ，其中 answer[i] 是第 i 条查询的答案。

// * 官方题解 最近公共祖先
export default function minOperationsQueries(
  n: number,
  edges: number[][],
  queries: number[][]
): number[] {
  const m = queries.length;
  const W = 26;
  const neighbors: Map<number, number>[] = new Array(n)
    .fill(null)
    .map(() => new Map());

  for (const edge of edges) {
    neighbors[edge[0]].set(edge[1], edge[2]);
    neighbors[edge[1]].set(edge[0], edge[2]);
  }

  const queryArr: [number, number][][] = new Array(n).fill(null).map(() => []);
  for (let i = 0; i < m; i++) {
    queryArr[queries[i][0]].push([queries[i][1], i]);
    queryArr[queries[i][1]].push([queries[i][0], i]);
  }

  const count: number[][] = new Array(n)
    .fill(null)
    .map(() => new Array(W + 1).fill(0));
  const visited: number[] = new Array(n).fill(0);
  const uf: number[] = new Array(n).fill(0);
  const lca: number[] = new Array(m).fill(0);

  const find = (uf: number[], i: number): number => {
    if (uf[i] === i) {
      return i;
    }
    uf[i] = find(uf, uf[i]);
    return uf[i];
  };

  const tarjan = (node: number, parent: number) => {
    if (parent !== -1) {
      count[node] = [...count[parent]];
      count[node][neighbors[node].get(parent)] += 1;
    }
    uf[node] = node;

    for (const [child] of neighbors[node]) {
      if (child == parent) {
        continue;
      }
      tarjan(child, node);
      uf[child] = node;
    }

    for (const [node1, index] of queryArr[node]) {
      if (node !== node1 && !visited[node1]) {
        continue;
      }
      lca[index] = find(uf, node1);
    }
    visited[node] = 1;
  };

  tarjan(0, -1);
  const res: number[] = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    let totalCount = 0;
    let maxCount = 0;
    for (let j = 1; j <= W; j++) {
      const t =
        count[queries[i][0]][j] +
        count[queries[i][1]][j] -
        2 * count[lca[i]][j];
      maxCount = Math.max(maxCount, t);
      totalCount += t;
    }
    res[i] = totalCount - maxCount;
  }

  return res;
}

// dfs
// export default function minOperationsQueries(
//   n: number,
//   edges: number[][],
//   queries: number[][]
// ): number[] {
//   const grid: number[][] = Array(n)
//     .fill(0)
//     .map(() => []);
//   const weight = new Map();
//   for (const [a, b, w] of edges) {
//     grid[a].push(b);
//     grid[b].push(a);
//     weight.set(`${a}-${b}`, w);
//     weight.set(`${b}-${a}`, w);
//   }

//   function find(
//     curr: number,
//     target: number,
//     path: number[],
//     weights: number[]
//   ): number[] | undefined {
//     const visited = new Set(path);
//     const next = grid[curr].filter((node) => !visited.has(node));
//     for (const node of next) {
//       const _path = path.concat(node);
//       const _weights = weights.concat(weight.get(`${curr}-${node}`));
//       if (node === target) {
//         return _weights;
//       }
//       const __weights = find(node, target, _path, _weights);
//       if (__weights) {
//         return __weights;
//       }
//     }
//   }

//   const len = queries.length;
//   const ans = Array(len).fill(0);
//   for (let i = 0; i < len; i++) {
//     const [start, end] = queries[i];
//     const weights = find(start, end, [start], []);
//     if (!weights) {
//       continue;
//     }
//     let max = 0;
//     const m = new Map();
//     for (let j = 0; j < weights.length; j++) {
//       m.set(weights[j], (m.get(weights[j]) || 0) + 1);
//       max = Math.max(max, m.get(weights[j]));
//     }
//     ans[i] = weights.length - max;
//   }
//   return ans;
// }
