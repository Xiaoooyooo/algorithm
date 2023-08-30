// https://leetcode.cn/problems/minimum-insertion-steps-to-make-a-string-palindrome/
// 给你一个字符串 s ，每一次操作你都可以在字符串的任意位置插入任意字符。
// 请你返回让 s 成为回文串的 最少操作次数 。
// 「回文串」是正读和反读都相同的字符串。

// 动态规划 优化版
export default function minInsertions(s: string): number {
  const len = s.length;
  const dp = Array(len)
    .fill(0)
    .map(() => Array(len).fill(0));
  for (let span = 2; span <= len; ++span) {
    for (let i = 0; i <= len - span; ++i) {
      let j = i + span - 1;
      dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
      if (s[i] == s[j]) {
        dp[i][j] = Math.min(dp[i][j], dp[i + 1][j - 1]);
      }
    }
  }
  return dp[0][len - 1];
}

// 动态规划
// export default function minInsertions(s: string): number {
//   const len = s.length;
//   const dp = Array(len)
//     .fill(0)
//     .map(() => Array(len).fill(null));
//   // dp[i][j] = dp[i + 1][j - 1]
//   // dp[i][j] = Math.min(dp[i + 1][j - 1] + 2, dp[i][j - 1] + 1, dp[i + 1][j] + 1);
//   for (let i = 0; i < len; i++) {
//     dp[i][i] = 0;
//   }
//   for (let i = len - 1; i >= 0; i--) {
//     for (let j = i + 1; j < len; j++) {
//       if (s[i] === s[j]) {
//         if (i + 1 === j) {
//           dp[i][j] = 0;
//         } else {
//           dp[i][j] = dp[i + 1][j - 1];
//         }
//       } else {
//         if (i + 1 === j) {
//           dp[i][j] = 1;
//         } else {
//           dp[i][j] = Math.min(
//             dp[i + 1][j - 1] + 2,
//             dp[i][j - 1] + 1,
//             dp[i + 1][j] + 1
//           );
//         }
//       }
//     }
//   }
//   // console.log(dp);
//   return dp[0][len - 1];
// }
