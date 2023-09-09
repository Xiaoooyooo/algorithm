// https://leetcode.cn/problems/course-schedule/description/
// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，
// 其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

// 官方题解 深度优先搜素
// let edges: number[][], visited: number[], valid: boolean;
// export default function canFinish(
//   numCourses: number,
//   prerequisites: number[][]
// ): boolean {
//   edges = Array(numCourses)
//     .fill(0)
//     .map(() => []);
//   visited = Array(numCourses).fill(0);
//   valid = true;
//   for (let info of prerequisites) {
//     edges[info[1]].push(info[0]);
//   }
//   for (let i = 0; i < numCourses && valid; ++i) {
//     if (visited[i] == 0) {
//       dfs(i);
//     }
//   }
//   function dfs(u: number) {
//     visited[u] = 1;
//     for (let v of edges[u]) {
//       if (visited[v] == 0) {
//         dfs(v);
//         if (!valid) {
//           return;
//         }
//       } else if (visited[v] == 1) {
//         valid = false;
//         return;
//       }
//     }
//     visited[u] = 2;
//   }

//   return valid;
// }

// 官方题解 广度优先搜素 拓扑排序
export default function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const edges = Array(numCourses)
    .fill(0)
    .map(() => []);
  // 入度
  const indeg = Array(numCourses).fill(0);
  for (const info of prerequisites) {
    edges[info[1]].push(info[0]);
    ++indeg[info[0]];
  }

  const queue = [];
  for (let i = 0; i < numCourses; ++i) {
    // 入度为 0 时入队
    if (indeg[i] == 0) {
      queue.push(i);
    }
  }

  let visited = 0;
  while (queue.length) {
    ++visited;
    const u = queue.shift();
    for (let v of edges[u]) {
      --indeg[v];
      // 入度为 0 时入队
      if (indeg[v] == 0) {
        queue.push(v);
      }
    }
  }

  return visited == numCourses;
}

// export default function canFinish(
//   numCourses: number,
//   prerequisites: number[][]
// ): boolean {
//   const arr: boolean[] = Array(numCourses).fill(true);
//   for (let [a] of prerequisites) {
//     arr[a] = false;
//   }
//   // 找不到一门不需要先修课程的课程
//   // 即所有的课程都有一门先修课程，那么返回 false
//   if (!arr.find((el) => el === true)) return false;
//   let i = 0;
//   // 1 依赖 0，2 依赖 1，...，n 依赖 n - 1，这种情况最多需要循环 n - 1 次
//   while (++i < numCourses) {
//     const temp = Array(numCourses)
//       .fill(0)
//       .map(() => []);
//     for (let courses of prerequisites) {
//       if (arr[courses[0]] === false) {
//         temp[courses[0]].push(courses[1]);
//       }
//     }
//     for (let j = 0; j < numCourses; j++) {
//       if (
//         temp[j].length > 0 &&
//         temp[j].every((course) => arr[course] === true)
//       ) {
//         arr[j] = true;
//       }
//     }
//   }
//   return arr.every((el) => el === true);
// }
