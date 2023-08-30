// https://leetcode.cn/problems/distinct-subsequences/
// 给你两个字符串 s 和 t ，统计并返回在 s 的 子序列 中 t 出现的个数。
// 题目数据保证答案符合 32 位带符号整数范围。
export default function numDistinct(s: string, t: string): number {
  const m = s.length,
    n = t.length;
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  // console.log(dp);
  return dp[m][n];
}

// **
// export default function numDistinct(s: string, t: string): number {
//   const slen = s.length,
//     tlen = t.length;
//   const dp = Array(tlen + 1)
//     .fill(null)
//     .map(() => Array(slen + 1).fill(0));
//   for (let i = 0; i <= slen; i++) {
//     dp[0][i] = 1;
//   }

//   for (let i = 1; i <= tlen; i++) {
//     for (let j = 1; j <= slen; j++) {
//       if (t[i - 1] === s[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
//       } else {
//         dp[i][j] = dp[i][j - 1];
//       }
//     }
//   }
//   // console.log(dp);
//   return dp[tlen][slen];
// }
