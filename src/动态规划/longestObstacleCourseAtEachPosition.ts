// https://leetcode.cn/problems/find-the-longest-valid-obstacle-course-at-each-position/
// 你打算构建一些障碍赛跑路线。
// 给你一个 下标从 0 开始 的整数数组 obstacles ，数组长度为 n ，其中 obstacles[i] 表示第 i 个障碍的高度。
// 对于每个介于 0 和 n - 1 之间（包含 0 和 n - 1）的下标  i ，
// 在满足下述条件的前提下，请你找出 obstacles 能构成的最长障碍路线的长度：
// 你可以选择下标介于 0 到 i 之间（包含 0 和 i）的任意个障碍。
// 在这条路线中，必须包含第 i 个障碍。
// 你必须按障碍在 obstacles 中的 出现顺序 布置这些障碍。
// 除第一个障碍外，路线中每个障碍的高度都必须和前一个障碍 相同 或者 更高 。
// 返回长度为 n 的答案数组 ans ，其中 ans[i] 是上面所述的下标 i 对应的最长障碍赛跑路线的长度。

// 动态规划 二分查找
export default function longestObstacleCourseAtEachPosition(
  obstacles: number[]
): number[] {
  const len = obstacles.length;
  const res = Array(len).fill(1);
  const arr = Array(len).fill(0);
  let n = 0;
  arr[n] = obstacles[0];
  for (let i = 1; i < len; i++) {
    if (obstacles[i] >= arr[n]) {
      arr[++n] = obstacles[i];
      res[i] = n + 1;
    } else {
      let l = 0,
        r = n;
      let p = 0;
      while (l <= r) {
        const mid = (l + r) >> 1;
        if (obstacles[i] >= arr[mid]) {
          l = mid + 1;
          p = l;
        } else {
          r = mid - 1;
        }
      }
      arr[p] = obstacles[i];
      res[i] = p + 1;
    }
  }
  // console.log(res);
  return res;
}

// 动态规划 O(n^2)
// export default function longestObstacleCourseAtEachPosition(
//   obstacles: number[]
// ): number[] {
//   const len = obstacles.length;
//   const dp = Array(len).fill(1);
//   for (let i = 1; i < len; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (obstacles[i] >= obstacles[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }
//   console.log(dp);
//   return dp;
// }
