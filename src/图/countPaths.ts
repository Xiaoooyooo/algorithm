// https://leetcode.cn/problems/count-valid-paths-in-a-tree/description/
// 给你一棵 n 个节点的无向树，节点编号为 1 到 n 。给你一个整数 n 和一个长度为 n - 1 的二维整数数组 edges ，其中 edges[i] = [ui, vi] 表示节点 ui 和 vi 在树中有一条边。
// 请你返回树中的 合法路径数目 。
// 如果在节点 a 到节点 b 之间 恰好有一个 节点的编号是质数，那么我们称路径 (a, b) 是 合法的 。
// 注意：
// 路径 (a, b) 指的是一条从节点 a 开始到节点 b 结束的一个节点序列，序列中的节点 互不相同 ，且相邻节点之间在树上有一条边。
// 路径 (a, b) 和路径 (b, a) 视为 同一条 路径，且只计入答案 一次 。

// 埃氏筛
const N = 100001;
const isPrime = new Array(N).fill(true);
isPrime[1] = false;
for (let i = 2; i * i < N; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j < N; j += i) {
      isPrime[j] = false;
    }
  }
}

export default function countPaths(n: number, edges: number[][]): number {
  const G = new Array(n + 1).fill(null).map(() => []);
  for (const [i, j] of edges) {
    G[i].push(j);
    G[j].push(i);
  }

  function dfs(i: number, pre: number) {
    seen.push(i);
    for (const j of G[i]) {
      if (j !== pre && !isPrime[j]) {
        dfs(j, i);
      }
    }
  }

  let seen = [];
  let res = 0;
  const count = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    if (!isPrime[i]) {
      continue;
    }
    let cur = 0;
    for (const j of G[i]) {
      if (isPrime[j]) {
        continue;
      }
      if (count[j] === 0) {
        seen = [];
        dfs(j, 0);
        const cnt = seen.length;
        for (const k of seen) {
          count[k] = cnt;
        }
      }
      res += count[j] * cur;
      cur += count[j];
    }
    res += cur;
  }
  return res;
}

// 超时
// export default function countPaths(n: number, edges: number[][]): number {
//   const grid: number[][] = Array(n + 1)
//     .fill(0)
//     .map(() => []);
//   for (const [a, b] of edges) {
//     grid[a].push(b);
//     grid[b].push(a);
//   }

//   let res = 0;
//   function find(path: number[], curr: number, hasPrime: boolean) {
//     const _isPrime = isPrime[curr];
//     if (_isPrime && hasPrime) {
//       return;
//     }

//     if (path.length !== 0 && (hasPrime || _isPrime)) {
//       res++;
//     }
//     // console.log(curr, _isPrime, res);

//     const pathSet = new Set(path);
//     for (const node of grid[curr]) {
//       if (!pathSet.has(node)) {
//         find(path.concat(curr), node, _isPrime || hasPrime);
//       }
//     }
//   }

//   for (let i = 1; i <= n; i++) {
//     find([], i, false);
//   }

//   return res / 2;
// }
