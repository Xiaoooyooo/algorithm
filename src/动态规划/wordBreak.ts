// https://leetcode.cn/problems/word-break/
// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

export default function wordBreak(s: string, wordDict: string[]): boolean {
  const len = s.length;
  const words = new Set(wordDict);
  const dp = Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      if (dp[i] && words.has(s.substring(i, j))) {
        dp[j] = true;
      }
    }
  }
  return dp[len];
}

// export default function wordBreak(s: string, wordDict: string[]): boolean {
//   const len = s.length;
//   const words = new Set(wordDict);
//   const dp = Array(len + 1).fill(false);
//   dp[0] = true;
//   for (let i = 1; i <= len; i++) {
//     for (let j = i; j >= 0; j--) {
//       if (dp[j]) {
//         if (words.has(s.substring(j, i))) {
//           dp[i] = true;
//         }
//       }
//     }
//   }
//   return dp[len];
// }
