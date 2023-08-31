// https://leetcode.cn/problems/minimum-degree-of-a-connected-trio-in-a-graph/
// 给你一个无向图，整数 n 表示图中节点的数目，edges 数组表示图中的边，
// 其中 edges[i] = [ui, vi] ，表示 ui 和 vi 之间有一条无向边。
// 一个 连通三元组 指的是 三个 节点组成的集合且这三个点之间 两两 有边。
// 连通三元组的度数 是所有满足此条件的边的数目：一个顶点在这个三元组内，而另一个顶点不在这个三元组内。
// 请你返回所有连通三元组中度数的 最小值 ，如果图中没有连通三元组，那么返回 -1 。

export default function minTrioDegree(n: number, edges: number[][]): number {
  const len = edges.length;
  const arr = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(false));
  const nodeEdges = Array(n + 1).fill(0);
  for (let i = 0; i < len; i++) {
    arr[edges[i][0]][edges[i][1]] = true;
    arr[edges[i][1]][edges[i][0]] = true;
    nodeEdges[edges[i][0]]++;
    nodeEdges[edges[i][1]]++;
  }

  let res = -1;
  // const nodes = [];
  for (let i = 1; i <= n; i++) {
    const nodes = [];
    for (let j = i + 1; j <= n; j++) {
      if (arr[i][j]) {
        nodes.push(j);
      }
    }
    const l = nodes.length;
    if (l > 1) {
      for (let m = 0; m < l; m++) {
        for (let n = m + 1; n < l; n++) {
          if (arr[nodes[m]][nodes[n]]) {
            // console.log(i, nodes[m], nodes[n]);
            const count =
              nodeEdges[i] + nodeEdges[nodes[m]] + nodeEdges[nodes[n]] - 6;
            if (res === -1) res = count;
            else res = Math.min(res, count);
          }
        }
      }
    }
  }
  return res;
}

// 官方题解
// export default function minTrioDegree(n: number, edges: number[][]): number {
//   const degree = Array(n).fill(0);
//   const g = Array(n)
//     .fill(0)
//     .map(() => new Array(n).fill(0));

//   for (const [x, y] of edges) {
//     g[x - 1][y - 1] = g[y - 1][x - 1] = 1;
//     degree[x - 1]++;
//     degree[y - 1]++;
//   }

//   let ans = Infinity;
//   for (let i = 0; i < n; ++i) {
//     for (let j = i + 1; j < n; ++j) {
//       if (g[i][j] == 1) {
//         for (let k = j + 1; k < n; ++k) {
//           if (g[i][k] == 1 && g[j][k] == 1) {
//             ans = Math.min(ans, degree[i] + degree[j] + degree[k] - 6);
//           }
//         }
//       }
//     }
//   }
//   return ans == Infinity ? -1 : ans;
// }

// 官方题解 邻接表 O(n + m * Math.sqrt(m))
// export default function minTrioDegree(n: number, edges: number[][]): number {
//   // 原图
//   const g = Array(n)
//     .fill(0)
//     .map(() => new Set());
//   // 定向后的图
//   const h = Array(n)
//     .fill(0)
//     .map(() => new Array());
//   const degree = Array(n).fill(0);

//   for (const [x, y] of edges) {
//     g[x - 1].add(y - 1);
//     g[y - 1].add(x - 1);
//     degree[x - 1]++;
//     degree[y - 1]++;
//   }
//   for (const [x, y] of edges) {
//     if (
//       degree[x - 1] < degree[y - 1] ||
//       (degree[x - 1] == degree[y - 1] && x < y)
//     ) {
//       h[x - 1].push(y - 1);
//     } else {
//       h[y - 1].push(x - 1);
//     }
//   }

//   let ans = Infinity;
//   for (let i = 0; i < n; ++i) {
//     for (const j of h[i]) {
//       for (const k of h[j]) {
//         if (g[i].has(k)) {
//           ans = Math.min(ans, degree[i] + degree[j] + degree[k] - 6);
//         }
//       }
//     }
//   }

//   return ans == Infinity ? -1 : ans;
// }
