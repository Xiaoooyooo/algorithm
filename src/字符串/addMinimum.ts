// https://leetcode.cn/problems/minimum-additions-to-make-valid-string/description/
// 给你一个字符串 word ，你可以向其中任何位置插入 "a"、"b" 或 "c" 任意次，返回使 word 有效 需要插入的最少字母数。
// 如果字符串可以由 "abc" 串联多次得到，则认为该字符串 有效 。

// 动态规划
export default function addMinimum(word: string): number {
  const len = word.length;
  const dp = Array(len + 1).fill(0);
  for (let i = 1; i <= len; i++) {
    dp[i] = dp[i - 1] + 2;
    if (i > 1 && word[i - 1] > word[i - 2]) {
      dp[i] = dp[i - 1] - 1;
    }
  }
  return dp[len];
}

// export default function addMinimum(word: string): number {
//   const len = word.length;
//   let res = 0;
//   let p = "";
//   for (let i = 0; i < len; i++) {
//     const c = word.charAt(i);
//     if (p === "") {
//       if (c === "b") {
//         res += 1;
//       } else if (c === "c") {
//         res += 2;
//       }
//     } else if (p === "a") {
//       if (c === "a") {
//         res += 2;
//       } else if (c === "c") {
//         res += 1;
//       }
//     } else if (p === "b") {
//       if (c === "a") {
//         res += 1;
//       } else if (c === "b") {
//         res += 2;
//       }
//     }
//     p = c === "c" ? "" : c;
//   }
//   if (p === "a") {
//     res += 2;
//   } else if (p === "b") {
//     res += 1;
//   }
//   return res;
// }
