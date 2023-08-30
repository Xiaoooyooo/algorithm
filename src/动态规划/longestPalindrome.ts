// https://leetcode.cn/problems/longest-palindromic-substring/
// 给你一个字符串 s，找到 s 中最长的回文子串。
// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

// export default function longestPalindrome(s: string): string {
//   const len = s.length;
//   if (len < 2) return s;

//   let maxLen = 1;
//   let begin = 0;
//   // dp[i][j] 表示 s[i..j] 是否是回文串
//   const dp = Array(len)
//     .fill(null)
//     .map(() => Array(len).fill(null));
//   // 初始化：所有长度为 1 的子串都是回文串
//   for (let i = 0; i < len; i++) {
//     dp[i][i] = true;
//   }

//   // 递推开始
//   // 先枚举子串长度
//   for (let L = 2; L <= len; L++) {
//     // 枚举左边界，左边界的上限设置可以宽松一些
//     // 如果右边界越界，就可以退出当前循环
//     for (let i = 0; L + i - 1 < len; i++) {
//       // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
//       const j = L + i - 1;

//       if (s[i] != s[j]) {
//         dp[i][j] = false;
//       } else {
//         if (j - i < 3) {
//           dp[i][j] = true;
//         } else {
//           dp[i][j] = dp[i + 1][j - 1];
//         }
//       }

//       // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
//       if (dp[i][j] && j - i + 1 > maxLen) {
//         maxLen = j - i + 1;
//         begin = i;
//       }
//     }
//   }
//   return s.substring(begin, begin + maxLen);
// }

export default function longestPalindrome(s: string): string {
  const len = s.length;
  const dp = Array(len)
    .fill(null)
    .map(() => Array(len).fill(null));
  // dp[i][j] 字符串索引 i 到 j 是否为回文串
  let max = [0, 0];
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (i === j) dp[i][j] = true;
      else {
        if (s[i] === s[j]) {
          if (j === i + 1) {
            dp[i][j] = true;
          } else if (j > i + 1) {
            dp[i][j] = dp[i + 1][j - 1];
          }
          if (dp[i][j] && j - i > max[1] - max[0]) max = [i, j];
        } else {
          dp[i][j] = false;
        }
      }
    }
  }
  return s.substring(max[0], max[1] + 1);
}
