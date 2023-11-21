// https://leetcode.cn/problems/smallest-missing-genetic-value-in-each-subtree/
// 有一棵根节点为 0 的 家族树 ，总共包含 n 个节点，节点编号为 0 到 n - 1 。
// 给你一个下标从 0 开始的整数数组 parents ，其中 parents[i] 是节点 i 的父节点。
// 由于节点 0 是 根 ，所以 parents[0] == -1 。
// 总共有 10^5 个基因值，每个基因值都用 闭区间 [1, 10^5] 中的一个整数表示。
// 给你一个下标从 0 开始的整数数组 nums ，其中 nums[i] 是节点 i 的基因值，且基因值 互不相同 。
// 请你返回一个数组 ans ，长度为 n ，其中 ans[i] 是以节点 i 为根的子树内 缺失 的 最小 基因值。
// 节点 x 为根的 子树 包含节点 x 和它所有的 后代 节点。

export default function smallestMissingValueSubtree(
  parents: number[],
  nums: number[]
): number[] {
  const n = parents.length;
  const children = new Array(n).fill(0).map(() => new Array());
  for (let i = 1; i < n; i++) {
    children[parents[i]].push(i);
  }

  const geneSet = new Set();
  const visited = new Array(n).fill(0);
  const dfs = function (node) {
    if (visited[node]) {
      return;
    }
    visited[node] = 1;
    geneSet.add(nums[node]);
    for (const child of children[node]) {
      dfs(child);
    }
  };

  const res = new Array(n).fill(1);
  let iNode = 1,
    node = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] == 1) {
      node = i;
      break;
    }
  }
  while (node != -1) {
    dfs(node);
    while (geneSet.has(iNode)) {
      iNode++;
    }
    res[node] = iNode;
    node = parents[node];
  }
  return res;
}

// export default function smallestMissingValueSubtree(
//   parents: number[],
//   nums: number[]
// ): number[] {
//   const n = parents.length;
//   const children = new Array(n).fill(0).map(() => new Array());
//   for (let i = 1; i < n; i++) {
//     children[parents[i]].push(i);
//   }

//   const res = new Array(n).fill(1);
//   const geneSet = new Array(n).fill(0).map(() => new Set());
//   var dfs = function (node) {
//     geneSet[node].add(nums[node]);
//     for (const child of children[node]) {
//       res[node] = Math.max(res[node], dfs(child));
//       if (geneSet[node].size < geneSet[child].size) {
//         const tmp = geneSet[node];
//         geneSet[node] = geneSet[child];
//         geneSet[child] = tmp;
//       }
//       for (const x of geneSet[child]) {
//         geneSet[node].add(x);
//       }
//     }
//     while (geneSet[node].has(res[node])) {
//       res[node]++;
//     }
//     return res[node];
//   };
//   dfs(0);
//   return res;
// }

// export default function smallestMissingValueSubtree(
//   parents: number[],
//   nums: number[]
// ): number[] {
//   const n = parents.length;
//   const ans = Array(n).fill(-1);
//   const children = new Map();
//   for (let i = 1; i < n; i++) {
//     const p = parents[i];
//     if (!children.has(p)) {
//       children.set(p, []);
//     }
//     children.set(p, [...children.get(p), i]);
//   }
//   function dfs(node: number) {
//     const [a, b] = children.get(node) || [];
//     let l: number, r: number;
//     if (a) {
//       l = dfs(a);
//     }
//     if (b) {
//       r = dfs(b);
//     }
//     if (!a && !b) {
//       ans[node] = node === 1 ? 2 : node - 1;
//       return node;
//     }
//     let res: number;
//     if (r && l) {
//       res = Math.min(r, l);
//     } else if (r) {
//       res = r;
//     } else if (l) {
//       res = l;
//     }
//     if (res) {
//       ans[node] = res;
//       return res;
//     }
//   }
//   dfs(0);
//   return ans;
// }
