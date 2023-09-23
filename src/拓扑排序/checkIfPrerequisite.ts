// https://leetcode.cn/problems/course-schedule-iv/
// 你总共需要上 numCourses 门课，课程编号依次为 0 到 numCourses-1 。
// 你会得到一个数组 prerequisite ，其中 prerequisites[i] = [ai, bi] 表示如果你想选 bi 课程，你 必须 先选 ai 课程。
// 有的课会有直接的先修课程，比如如果想上课程 1 ，你必须先上课程 0 ，那么会以 [0,1] 数对的形式给出先修课程数对。
// 先决条件也可以是 间接 的。如果课程 a 是课程 b 的先决条件，课程 b 是课程 c 的先决条件，那么课程 a 就是课程 c 的先决条件。
// 你也得到一个数组 queries ，其中 queries[j] = [uj, vj]。对于第 j 个查询，您应该回答课程 uj 是否是课程 vj 的先决条件。
// 返回一个布尔数组 answer ，其中 answer[j] 是第 j 个查询的答案。

// 官方题解 广度优先搜索 + 拓扑排序
export default function checkIfPrerequisite(
  numCourses: number,
  prerequisites: number[][],
  queries: number[][]
): boolean[] {
  let g = new Array(numCourses).fill(0).map(() => new Array());
  let indgree = new Array(numCourses).fill(0);
  let isPre = new Array(numCourses)
    .fill(0)
    .map(() => new Array(numCourses).fill(false));
  for (let p of prerequisites) {
    ++indgree[p[1]];
    g[p[0]].push(p[1]);
  }
  let q = [];
  for (let i = 0; i < numCourses; ++i) {
    if (indgree[i] == 0) {
      q.push(i);
    }
  }

  while (q.length) {
    let cur = q.shift();
    for (let ne of g[cur]) {
      isPre[cur][ne] = true;
      for (let i = 0; i < numCourses; ++i) {
        isPre[i][ne] = isPre[i][ne] || isPre[i][cur];
      }
      --indgree[ne];
      if (indgree[ne] == 0) {
        q.push(ne);
      }
    }
  }
  const res = [];
  for (let query of queries) {
    res.push(isPre[query[0]][query[1]]);
  }
  return res;
}

// 官方题解 深度优先搜索 + 拓扑排序
// export default function checkIfPrerequisite(
//   numCourses: number,
//   prerequisites: number[][],
//   queries: number[][]
// ): boolean[] {
//   let g = new Array(numCourses).fill(0).map(() => new Array());
//   let vi = new Array(numCourses).fill(false);
//   let isPre = new Array(numCourses)
//     .fill(0)
//     .map(() => new Array(numCourses).fill(false));
//   for (let p of prerequisites) {
//     g[p[0]].push(p[1]);
//   }
//   function dfs(g: number[][], isPre: boolean[][], vi: boolean[], cur: number) {
//     if (vi[cur]) {
//       return;
//     }
//     vi[cur] = true;
//     for (let ne of g[cur]) {
//       dfs(g, isPre, vi, ne);
//       isPre[cur][ne] = true;
//       for (let i = 0; i < isPre.length; ++i) {
//         // @ts-ignore
//         isPre[cur][i] = isPre[cur][i] | isPre[ne][i];
//       }
//     }
//   }

//   for (let i = 0; i < numCourses; ++i) {
//     dfs(g, isPre, vi, i);
//   }
//   const res = [];
//   for (let query of queries) {
//     res.push(isPre[query[0]][query[1]]);
//   }
//   return res;
// }

// 深度优先搜索
// export default function checkIfPrerequisite(
//   numCourses: number,
//   prerequisites: number[][],
//   queries: number[][]
// ): boolean[] {
//   const graph = Array(numCourses)
//     .fill(0)
//     .map(() => Array(numCourses).fill(false));
//   for (let [a, b] of prerequisites) {
//     graph[a][b] = true;
//   }
//   const map = new Map();
//   for (let [a, b] of queries) {
//     map.set(a + "-" + b, false);
//   }
//   const visited = new Set();
//   function dfs(start: number, curr: number) {
//     const key = start + "-" + curr;
//     if (visited.has(key)) return;
//     visited.add(key);
//     if (map.has(key)) {
//       map.set(key, true);
//     }
//     for (let i = 0; i < numCourses; i++) {
//       if (graph[curr][i] === true) {
//         dfs(start, i);
//       }
//     }
//   }
//   for (let i = 0; i < numCourses; i++) {
//     for (let j = 0; j < numCourses; j++) {
//       if (graph[i][j] === true) {
//         dfs(i, j);
//       }
//     }
//   }
//   const len = queries.length;
//   const res = Array(len).fill(false);
//   for (let i = 0; i < len; i++) {
//     res[i] = map.get(queries[i][0] + "-" + queries[i][1]);
//   }
//   return res;
// }

// 内存超出 广度优先搜搜 + 拓扑排序
// 将 map 存储优化一下即为官方题解的同名方法
// export default function checkIfPrerequisite(
//   numCourses: number,
//   prerequisites: number[][],
//   queries: number[][]
// ): boolean[] {
//   const deps = Array(numCourses)
//     .fill(0)
//     .map(() => []);
//   const indegs = Array(numCourses).fill(0);
//   for (let [a, b] of prerequisites) {
//     indegs[b]++;
//     deps[a].push(b);
//   }
//   const queue = [];
//   const map = new Map();
//   const set = new Set();
//   for (let i = 0; i < numCourses; i++) {
//     if (indegs[i] === 0) {
//       queue.push(i);
//       map.set(i, [i]);
//     }
//   }
//   while (queue.length) {
//     const curr = queue.shift();
//     const l = deps[curr].length;
//     for (let i = 0; i < l; i++) {
//       indegs[deps[curr][i]]--;
//       if (indegs[deps[curr][i]] === 0) {
//         queue.push(deps[curr][i]);
//       }
//       const courses = map.get(curr).slice();
//       for (let c of courses) {
//         set.add(c + "-" + deps[curr][i]);
//       }
//       courses.push(deps[curr][i]);
//       map.set(deps[curr][i], (map.get(deps[curr][i]) || []).concat(courses));
//     }
//   }
//   const len = queries.length;
//   const res = Array(len).fill(false);
//   for (let i = 0; i < len; i++) {
//     if (set.has(queries[i][0] + "-" + queries[i][1])) res[i] = true;
//   }
//   return res;
// }
