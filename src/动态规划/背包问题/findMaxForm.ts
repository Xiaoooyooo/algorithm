// https://leetcode.cn/problems/ones-and-zeroes/
// 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。
// 请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。
// 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

// 动态规划 官方题解
export default function findMaxForm(
  strs: string[],
  m: number,
  n: number
): number {
  const length = strs.length;
  const arr = Array(length)
    .fill(0)
    .map(() => [0, 0]);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] === "0") arr[i][0] += 1;
      else arr[i][1] += 1;
    }
  }
  const dp = new Array(length + 1)
    .fill(0)
    .map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)));
  for (let i = 1; i <= length; i++) {
    const [zeros, ones] = arr[i - 1];
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        dp[i][j][k] = dp[i - 1][j][k];
        if (j >= zeros && k >= ones) {
          dp[i][j][k] = Math.max(
            dp[i][j][k],
            dp[i - 1][j - zeros][k - ones] + 1
          );
        }
      }
    }
  }
  return dp[length][m][n];
}

// 深度优先搜索 超时
// export default function findMaxForm(
//   strs: string[],
//   m: number,
//   n: number
// ): number {
//   const len = strs.length;
//   let res = 0;
//   const arr = Array(len)
//     .fill(0)
//     .map((e, i) => {
//       return Array.prototype.reduce.call(
//         strs[i],
//         (prev: number[], curr: string) => {
//           if (curr === "0") prev[0] += 1;
//           else prev[1] += 1;
//           return prev;
//         },
//         [0, 0]
//       );
//     });
//   function dfs(a: number, b: number, index: number, count: number) {
//     if (a <= m && b <= n) {
//       res = Math.max(res, count);
//     } else {
//       return;
//     }
//     if (index === len) return;
//     dfs(a + arr[index][0], b + arr[index][1], index + 1, count + 1);
//     dfs(a, b, index + 1, count);
//   }
//   dfs(0, 0, 0, 0);
//   return res;
// }
