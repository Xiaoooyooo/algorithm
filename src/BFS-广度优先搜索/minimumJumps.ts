// https://leetcode.cn/problems/minimum-jumps-to-reach-home/
// 有一只跳蚤的家在数轴上的位置 x 处。请你帮助它从位置 0 出发，到达它的家。
// 跳蚤跳跃的规则如下：
// 它可以 往前 跳恰好 a 个位置（即往右跳）。
// 它可以 往后 跳恰好 b 个位置（即往左跳）。
// 它不能 连续 往后跳 2 次。
// 它不能跳到任何 forbidden 数组中的位置。
// 跳蚤可以往前跳 超过 它的家的位置，但是它 不能跳到负整数 的位置。
// 给你一个整数数组 forbidden ，其中 forbidden[i] 是跳蚤不能跳到的位置，
// 同时给你整数 a， b 和 x ，请你返回跳蚤到家的最少跳跃次数。
// 如果没有恰好到达 x 的可行方案，请你返回 -1 。

// * 无限图 需要找到搜索上限

// 广度优先搜索
export default function minimumJumps(
  forbidden: number[],
  a: number,
  b: number,
  x: number
): number {
  const set = new Set(forbidden);
  // * 最远的位置
  const max = Math.max(Math.max(...forbidden) + a, x) + b;
  const queue = [0];
  const actions = [1]; // 1 往前跳  -1 往后跳
  const visited = new Set();
  let res = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const curr = queue.shift();
      const action = actions.shift();
      if (curr === x) return res;
      const forward = curr + a;
      if (
        forward >= 0 &&
        forward <= max &&
        !set.has(forward) &&
        !visited.has(forward)
      ) {
        visited.add(forward);
        queue.push(forward);
        actions.push(1);
      }
      const backward = curr - b;
      if (
        a !== b &&
        action === 1 &&
        backward >= 0 &&
        backward <= max &&
        !set.has(backward) &&
        !visited.has(-backward)
      ) {
        visited.add(-backward);
        queue.push(backward);
        actions.push(-1);
      }
    }
    res++;
  }
  return -1;
}

// 广度优先搜索 官方题解
// export default function minimumJumps(
//   forbidden: number[],
//   a: number,
//   b: number,
//   x: number
// ): number {
//   const lower = 0;
//   const upper = Math.max(Math.max(...forbidden) + a, x) + b;
//   let q = [[0, 1, 0]];
//   const visited = new Set([0]);
//   const forbiddenSet = new Set(forbidden);
//   while (q.length > 0) {
//     let position = q[0][0];
//     let direction = q[0][1];
//     let step = q[0][2];
//     q.shift();
//     if (position == x) {
//       return step;
//     }
//     let nextPosition = position + a;
//     let nextDirection = 1;
//     if (
//       lower <= nextPosition &&
//       nextPosition <= upper &&
//       !visited.has(nextPosition * nextDirection) &&
//       !forbiddenSet.has(nextPosition)
//     ) {
//       visited.add(nextPosition * nextDirection);
//       q.push([nextPosition, nextDirection, step + 1]);
//     }
//     if (direction == 1) {
//       nextPosition = position - b;
//       nextDirection = -1;
//       if (
//         lower <= nextPosition &&
//         nextPosition <= upper &&
//         !visited.has(nextPosition * nextDirection) &&
//         !forbiddenSet.has(nextPosition)
//       ) {
//         visited.add(nextPosition * nextDirection);
//         q.push([nextPosition, nextDirection, step + 1]);
//       }
//     }
//   }
//   return -1;
// }
