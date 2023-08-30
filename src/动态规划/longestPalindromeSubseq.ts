// https://leetcode.cn/problems/longest-palindromic-subsequence/
// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
// 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

export default function longestPalindromeSubseq(s: string): number {
  const n = s.length;
  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  // dp[i][j] 为索引从 i 到 j 的序列中最长的回文序列字符数
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        // 理论上 j - 1 应该大于 i + 1
        // 但是由于 dp 数组元素都被初始化为 0
        // 所以对结果没有影响
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
}

// export default function longestPalindromeSubseq(s: string): number {
//   const n = s.length;
//   const dp = Array(n)
//     .fill(0)
//     .map(() => Array(n).fill(0));
//   for (let i = n - 1; i >= 0; i--) {
//     dp[i][i] = 1;
//     const c1 = s[i];
//     for (let j = i + 1; j < n; j++) {
//       const c2 = s[j];
//       if (c1 === c2) {
//         dp[i][j] = dp[i + 1][j - 1] + 2;
//       } else {
//         // 在序列 (i + 1, j) 和 (i, j - 1) 中取最长
//         dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
//       }
//     }
//   }
//   console.log(dp);
//   return dp[0][n - 1];
// }
