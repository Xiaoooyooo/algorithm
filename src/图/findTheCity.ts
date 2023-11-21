// https://leetcode.cn/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/
// 有 n 个城市，按从 0 到 n-1 编号。给你一个边数组 edges，
// 其中 edges[i] = [fromi, toi, weighti] 代表 fromi 和 toi 两个城市之间的双向加权边，
// 距离阈值是一个整数 distanceThreshold。
// 返回能通过某些路径到达其他城市数目最少、且路径距离 最大 为 distanceThreshold 的城市。
// 如果有多个这样的城市，则返回编号最大的城市。
// 注意，连接城市 i 和 j 的路径的距离等于沿该路径的所有边的权重之和。

// 官方题解 Floyd 算法
export default function findTheCity(
  n: number,
  edges: number[][],
  distanceThreshold: number
): number {
  let ans = [Infinity, -1];
  const mp = new Array(n).fill(0).map(() => new Array(n).fill(Infinity));

  for (const [from, to, weight] of edges) {
    mp[from][to] = mp[to][from] = weight;
  }
  // 寻找 i j 两节点之间的最短路径
  for (let k = 0; k < n; k++) {
    mp[k][k] = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        mp[i][j] = Math.min(mp[i][j], mp[i][k] + mp[k][j]);
      }
    }
  }
  // 统计个节点之间最短路径小于 distanceThreshold 数目
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (mp[i][j] <= distanceThreshold) {
        cnt++;
      }
    }
    if (cnt <= ans[0]) {
      ans = [cnt, i];
    }
  }
  return ans[1];
}

// 超时
// export default function findTheCity(
//   n: number,
//   edges: number[][],
//   distanceThreshold: number
// ): number {
//   const graph = Array(n)
//     .fill(0)
//     .map(() => Array(n).fill(0));
//   for (const [from, to, weight] of edges) {
//     graph[to][from] = weight;
//     graph[from][to] = weight;
//   }
//   const ans = Array(n)
//     .fill(0)
//     .map(() => new Set());
//   function dfs(
//     from: number, // 起点
//     current: number, // 当前位置
//     citeis: number[], // 路过点
//     weight: number // 路径权重
//   ) {
//     const visited = new Set(citeis);
//     for (let to = 0; to < n; to++) {
//       if (to !== from && graph[current][to] !== 0 && !visited.has(to)) {
//         const _weight = weight + graph[current][to];
//         if (_weight <= distanceThreshold) {
//           ans[from].add(to);
//           dfs(from, to, [...citeis, to], _weight);
//         }
//       }
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     dfs(i, i, [i], 0);
//   }
//   console.log(ans);
//   let minCities = n,
//     res = -1;
//   for (let i = 0; i < n; i++) {
//     if (ans[i].size <= minCities) {
//       minCities = ans[i].size;
//       res = Math.max(res, i);
//     }
//   }
//   return res;
// }
