// https://leetcode.cn/problems/course-schedule-ii/
// 现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。
// 给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。
// 例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。
// 返回你为了学完所有课程所安排的学习顺序。
// 可能会有多个正确的顺序，你只要返回 任意一种 就可以了。
// 如果不可能完成所有课程，返回 一个空数组 。

// 广度优先搜索 拓扑排序
export default function findOrder(
  numCourses: number,
  prerequisites: number[][]
): number[] {
  const deps = Array(numCourses)
    .fill(0)
    .map(() => []);
  const indeg = Array(numCourses).fill(0);
  for (let [a, b] of prerequisites) {
    indeg[a]++;
    deps[b].push(a);
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indeg[i] === 0) {
      queue.push(i);
    }
  }
  const res = [];
  while (queue.length) {
    const curr = queue.shift();
    res.push(curr);
    for (let i = 0; i < deps[curr].length; i++) {
      indeg[deps[curr][i]]--;
      if (indeg[deps[curr][i]] === 0) {
        queue.push(deps[curr][i]);
      }
    }
  }
  // console.log(res);
  return res.length === numCourses ? res : [];
}

// 深度优先搜索
// export default function findOrder(
//   numCourses: number,
//   prerequisites: number[][]
// ): number[] {
//   // 存储有向图
//   const edges = Array(numCourses)
//     .fill(0)
//     .map(() => []);
//   // 标记每个节点的状态：0=未搜索，1=搜索中，2=已完成
//   const visited = Array(numCourses).fill(0);
//   // 用数组来模拟栈，下标 n-1 为栈底，0 为栈顶
//   const result = Array(numCourses).fill(0);
//   // 判断有向图中是否有环
//   let valid = true;
//   // 栈下标
//   let index = numCourses - 1;
//   for (let info of prerequisites) {
//     edges[info[1]].push(info[0]);
//   }
//   // 每次挑选一个「未搜索」的节点，开始进行深度优先搜索
//   for (let i = 0; i < numCourses && valid; ++i) {
//     if (visited[i] == 0) {
//       dfs(i);
//     }
//   }
//   if (!valid) {
//     return [];
//   }
//   function dfs(u: number) {
//     // 将节点标记为「搜索中」
//     visited[u] = 1;
//     // 搜索其相邻节点
//     // 只要发现有环，立刻停止搜索
//     for (let v of edges[u]) {
//       // 如果「未搜索」那么搜索相邻节点
//       if (visited[v] == 0) {
//         dfs(v);
//         if (!valid) {
//           return;
//         }
//       }
//       // 如果「搜索中」说明找到了环
//       else if (visited[v] == 1) {
//         valid = false;
//         return;
//       }
//     }
//     // 将节点标记为「已完成」
//     visited[u] = 2;
//     // 将节点入栈
//     result[index--] = u;
//   }
//   // 如果没有环，那么就有拓扑排序
//   return result;
// }
