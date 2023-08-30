// https://leetcode.cn/problems/minimum-ascii-delete-sum-for-two-strings
// 给定两个字符串s1 和 s2，返回 使两个字符串相等所需删除字符的 ASCII 值的最小和 。

export default function minimumDeleteSum(s1: string, s2: string): number {
  const len1 = s1.length,
    len2 = s2.length;
  const dp = Array(len1 + 1)
    .fill(1)
    .map(() => Array(len2 + 1).fill(0));
  for (let i = 1; i <= len1; i++) {
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }
  for (let i = 1; i <= len2; i++) {
    dp[0][i] = dp[0][i - 1] + s2.charCodeAt(i - 1);
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          // 这肯定是最大的，不需要加入比较
          // dp[i - 1][j - 1] + s1.charCodeAt(i - 1) + s2.charCodeAt(j - 1),
          dp[i - 1][j] + s1.charCodeAt(i - 1),
          dp[i][j - 1] + s2.charCodeAt(j - 1)
        );
      }
    }
  }
  return dp[len1][len2];
}
