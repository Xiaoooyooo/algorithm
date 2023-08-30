// https://leetcode.cn/problems/edit-distance/
// 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
// 你可以对一个单词进行如下三种操作：
// 插入一个字符
// 删除一个字符
// 替换一个字符

export default function minDistance(word1: string, word2: string): number {
  const m = word1.length,
    n = word2.length;
  const dp = Array(m + 1)
    .fill(1)
    .map(() => Array(n + 1).fill(0));
  // dp[i][j]  word1 前 i 个字符变换为 word2 前 j 个字符的最少操作次数
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let i = 0; i <= n; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 如果最后一个字符相等的话
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 如果最后一个字符不相等，
        // 那么 word1 前 i 个字符变换为 word2 前 j 个字符的最少操作次数为：
        //   min((word1 的前 i - 1 个字符变换为 word2 前 j 个字符的最少操作次数),
        //   (word1 的前 i 个字符变换为 word2 前 j - 1 个字符的最少操作次数),
        //   (word1 的前 i - 1 个字符变换为 word2 前 j - 1 个字符的最少操作次数)) + 1
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[m][n];
}
