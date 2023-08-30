// https://leetcode.cn/problems/pizza-with-3n-slices/
// 给你一个披萨，它由 3n 块不同大小的部分组成，现在你和你的朋友们需要按照如下规则来分披萨：
// 你挑选 任意 一块披萨。
// Alice 将会挑选你所选择的披萨逆时针方向的下一块披萨。
// Bob 将会挑选你所选择的披萨顺时针方向的下一块披萨。
// 重复上述过程直到没有披萨剩下。
// 每一块披萨的大小按顺时针方向由循环数组 slices 表示。
// 请你返回你可以获得的披萨大小总和的最大值。
//
// 本题可以转化成如下问题：
//   给一个长度为 3n 的环状序列，你可以在其中选择 n 个数，
//   并且任意两个数不能相邻，求这 n 个数的最大值。

// * 动态规划
export default function maxSizeSlices(slices: number[]): number {
  const v1 = slices.slice(1);
  const v2 = slices.slice(0, -1);
  function calculate(slices: number[]) {
    const N = slices.length;
    const n = Math.floor((slices.length + 1) / 3);
    const dp = new Array(N).fill(0).map(() => new Array(n + 1).fill(-Infinity));
    dp[0][0] = 0;
    dp[0][1] = slices[0];
    dp[1][0] = 0;
    dp[1][1] = Math.max(slices[0], slices[1]);
    for (let i = 2; i < N; i++) {
      dp[i][0] = 0;
      for (let j = 1; j <= n; j++) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 2][j - 1] + slices[i]);
      }
    }
    return dp[N - 1][n];
  }
  const ans1 = calculate(v1);
  const ans2 = calculate(v2);
  return Math.max(ans1, ans2);
}

// 深度优先搜索 超时
// export default function maxSizeSlices(slices: number[]): number {
//   const len = slices.length;
//   let res = 0;
//   function dfs(u: number, turn: number, used: Set<number> = new Set()) {
//     if (turn === len) {
//       res = Math.max(res, u);
//       return;
//     }
//     used = new Set(used);
//     let t: number, ta: number, tb: number;
//     for (let i = 0; i < len; i++) {
//       if (!used.has(i)) {
//         t = i;
//         ta = (t - 1 + len) % len;
//         while (used.has(ta)) {
//           ta = (ta - 1 + len) % len;
//         }
//         tb = (t + 1) % len;
//         while (used.has(tb)) {
//           tb = (tb + 1) % len;
//         }
//         const _used = new Set(used);
//         _used.add(i);
//         _used.add(ta);
//         _used.add(tb);
//         dfs(u + slices[t], turn + 3, _used);
//       }
//     }
//   }
//   dfs(0, 0);
//   return res;
// }
