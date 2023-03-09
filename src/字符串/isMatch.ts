// https://leetcode.cn/problems/regular-expression-matching/?favorite=2cktkvj
// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

// export default function isMatch(s: string, p: string) {
//   const sLen = s.length,
//     pLen = p.length;

//   const dp = Array(sLen + 1)
//     .fill(undefined)
//     .map(() => Array(pLen + 1).fill(undefined));

//   // base case
//   dp[0][0] = true;
//   // for (let j = 1; j < pLen + 1; j++) {
//   //   if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
//   // }
//   // 迭代
//   for (let i = 1; i < sLen + 1; i++) {
//     for (let j = 1; j < pLen + 1; j++) {
//       if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
//         dp[i][j] = dp[i - 1][j - 1];
//       } else if (p[j - 1] == "*") {
//         if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
//           dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
//         } else {
//           dp[i][j] = dp[i][j - 2];
//         }
//       }
//     }
//   }
//   console.log(dp);
//   return dp[sLen][pLen] ? true : false; // 长sLen的s串 是否匹配 长pLen的p串
// }

export default function isMatch(s: string, p: string) {
  const len1 = s.length,
    len2 = p.length;
  // dp[i][j] 表示 s 的前 i 个字符是否与 p 的前 j 个字符匹配
  const dp = Array(len1 + 1)
    .fill(undefined)
    .map(() => Array(len2 + 1).fill(undefined)) as boolean[][];
  dp[0][0] = true;
  // "aaa", "ab*a*c*a"
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (p.charAt(j - 1) == "*") {
        dp[i][j] =
          dp[i][j - 2] ||
          (i > 0 && (s[i - 1] == p[j - 2] || p[j - 2] == ".") && dp[i - 1][j]);
      } else {
        dp[i][j] =
          i > 0 &&
          dp[i - 1][j - 1] &&
          (s[i - 1] == p[j - 1] || p[j - 1] == ".");
      }
    }
  }
  console.log(dp);
  return dp[len1][len2] || false;
}
