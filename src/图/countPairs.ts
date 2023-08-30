// https://leetcode.cn/problems/count-pairs-of-nodes/
// 给你一个无向图，无向图由整数 n  ，表示图中节点的数目，和 edges 组成，
// 其中 edges[i] = [ui, vi] 表示 ui 和 vi 之间有一条无向边。
// 同时给你一个代表查询的整数数组 queries 。
// 第 j 个查询的答案是满足如下条件的点对 (a, b) 的数目：
// a < b
// cnt 是与 a 或者 b 相连的边的数目，且 cnt 严格大于 queries[j] 。
// 请你返回一个数组 answers ，其中 answers.length == queries.length 且 answers[j] 是第 j 个查询的答案。
// 请注意，图中可能会有 重复边 。
// * 题目的意思有点不好理解，可以查看原文的英文版本

// *
export default function countPairs(
  n: number,
  edges: number[][],
  queries: number[]
): number[] {
  // deg[i] 表示与点 i 相连的边的数目
  const deg = new Array(n + 1).fill(0); // 节点编号从 1 到 n
  const cntE = new Map();
  for (let [x, y] of edges) {
    if (x > y) [x, y] = [y, x]; // 注意 1-2 和 2-1 算同一条边
    deg[x]++;
    deg[y]++;
    // 统计每条边的出现次数
    cntE.set((x << 16) | y, (cntE.get((x << 16) | y) ?? 0) + 1);
  }

  const ans = new Array(queries.length).fill(0);
  const sortedDeg = deg.slice().sort((a, b) => a - b); // 排序，为了双指针
  for (let j = 0; j < queries.length; j++) {
    const q = queries[j];
    let left = 1,
      right = n; // 相向双指针
    while (left < right) {
      if (sortedDeg[left] + sortedDeg[right] <= q) {
        left++;
      } else {
        ans[j] += right - left;
        right--;
      }
    }
    for (const [k, c] of cntE.entries()) {
      const s = deg[k >> 16] + deg[k & 0xffff]; // 取出 k 的高 16 位和低 16 位
      if (s > q && s - c <= q) {
        ans[j]--;
      }
    }
  }
  return ans;
}

//* 二分查找 官方题解
// export default function countPairs(
//   n: number,
//   edges: number[][],
//   queries: number[]
// ): number[] {
//   function binarySearch(
//     arr: number[],
//     low: number,
//     high: number,
//     target: number
//   ) {
//     let ans = high + 1;
//     while (low <= high) {
//       const mid = Math.floor((high - low + 1) / 2) + low;
//       if (arr[mid] <= target) {
//         low = mid + 1;
//       } else {
//         high = mid - 1;
//         ans = mid;
//       }
//     }
//     return ans;
//   }
//   const degree = new Array(n).fill(0);
//   const cnt = new Map();
//   for (var edge of edges) {
//     let x = edge[0] - 1;
//     let y = edge[1] - 1;
//     if (x > y) {
//       let tmp = x;
//       x = y;
//       y = tmp;
//     }
//     degree[x]++;
//     degree[y]++;
//     const key = x * n + y;
//     cnt.set(key, cnt.has(key) ? cnt.get(key) + 1 : 1);
//   }
//   const arr = Array.from(degree);
//   const ans = new Array(queries.length);
//   arr.sort((a, b) => a - b);
//   for (let k = 0; k < queries.length; k++) {
//     const bound = queries[k];
//     let total = 0;
//     for (let i = 0; i < n; i++) {
//       let j = binarySearch(arr, i + 1, n - 1, bound - arr[i]);
//       total += n - j;
//     }
//     for (var [val, freq] of cnt.entries()) {
//       let x = Math.floor(val / n);
//       let y = val % n;
//       if (
//         degree[x] + degree[y] > bound &&
//         degree[x] + degree[y] - freq <= bound
//       ) {
//         total--;
//       }
//     }
//     ans[k] = total;
//   }
//   return ans;
// }

// 暴力枚举 O(n^2)
// export default function countPairs(
//   n: number,
//   edges: number[][],
//   queries: number[]
// ): number[] {
//   const nodeEdges = Array(n).fill(0);
//   const edgeSet = new Map();
//   for (let i = 0; i < edges.length; i++) {
//     const [a, b] = edges[i];
//     nodeEdges[a - 1] += 1;
//     nodeEdges[b - 1] += 1;
//     const key = a + "," + b;
//     edgeSet.set(key, (edgeSet.get(key) || 0) + 1);
//   }
//   const edgesCount = [];
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//       let v = nodeEdges[i] + nodeEdges[j];
//       const key1 = i + 1 + "," + (j + 1),
//         key2 = j + 1 + "," + (i + 1);
//       if (edgeSet.has(key1)) {
//         v -= edgeSet.get(key1);
//       }
//       if (edgeSet.has(key2)) {
//         v -= edgeSet.get(key2);
//       }
//       edgesCount.push(v);
//     }
//   }
//   const res = Array(queries.length).fill(0);
//   for (let i = 0; i < queries.length; i++) {
//     for (let j = 0; j < edgesCount.length; j++) {
//       if (edgesCount[j] > queries[i]) {
//         res[i]++;
//       }
//     }
//   }
//   return res;
// }
