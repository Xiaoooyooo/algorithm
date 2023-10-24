// https://leetcode.cn/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/
// 给你一个整数 n ，表示一张 无向图 中有 n 个节点，编号为 0 到 n - 1 。
// 同时给你一个二维整数数组 edges ，其中 edges[i] = [ai, bi] 表示节点 ai 和 bi 之间有一条 无向 边。
// 请你返回 无法互相到达 的不同 点对数目 。

// 官方题解 并查集
class UnionFind {
  sizes: number[];
  parents: number[];
  constructor(n: number) {
    this.sizes = new Array(n).fill(1);
    this.parents = new Array(n).fill(0).map((ele, index) => index);
  }

  find(x: number) {
    if (this.parents[x] == x) {
      return x;
    } else {
      this.parents[x] = this.find(this.parents[x]);
      return this.parents[x];
    }
  }

  union(x: number, y: number) {
    const rx = this.find(x);
    const ry = this.find(y);
    if (rx != ry) {
      if (this.sizes[rx] > this.sizes[ry]) {
        this.parents[ry] = rx;
        this.sizes[rx] += this.sizes[ry];
      } else {
        this.parents[rx] = ry;
        this.sizes[ry] += this.sizes[rx];
      }
    }
  }

  getSize(x: number) {
    return this.sizes[x];
  }
}

export default function countPairs1(n: number, edges: number[][]): number {
  const uf = new UnionFind(n);
  for (const [x, y] of edges) {
    uf.union(x, y);
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += n - uf.getSize(uf.find(i));
  }
  return res / 2;
}

// 深度优先搜索
// export default function countPairs1(n: number, edges: number[][]): number {
//   const grid = Array(n)
//     .fill(0)
//     .map(() => []);
//   for (let [a, b] of edges) {
//     grid[a].push(b);
//     grid[b].push(a);
//   }
//   const visited = new Set();
//   function dfs(index = 0) {
//     visited.add(index);
//     let count = 1;
//     for (const b of grid[index]) {
//       if (!visited.has(b)) {
//         count += dfs(b);
//       }
//     }
//     return count;
//   }
//   let res = 0;

//   for (let i = 0; i < n; i++) {
//     if (!visited.has(i)) {
//       let c = dfs(i);
//       res += c * (n - c);
//     }
//   }
//   return res / 2;
// }
