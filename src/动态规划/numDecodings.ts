// https://leetcode.cn/problems/decode-ways/
// 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：
// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// 要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：
// "AAJF" ，将消息分组为 (1 1 10 6)
// "KJF" ，将消息分组为 (11 10 6)
// 注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。
// 给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。
// 题目数据保证答案肯定是一个 32 位 的整数。

// 动态规划 官方题解 空间优化版
export default function numDecodings(s: string): number {
  const n = s.length;
  // a = f[i-2], b = f[i-1], c = f[i]
  let a = 0,
    b = 1,
    c = 0;
  for (let i = 1; i <= n; ++i) {
    c = 0;
    if (s[i - 1] !== "0") {
      c += b;
    }
    if (
      i > 1 &&
      s[i - 2] != "0" &&
      (parseInt(s[i - 2]) - 0) * 10 + (parseInt(s[i - 1]) - 0) <= 26
    ) {
      c += a;
    }
    a = b;
    b = c;
  }
  return c;
}

// 动态规划 官方题解
// export default function numDecodings(s: string): number {
//   const n = s.length;
//   const f = new Array(n + 1).fill(0);
//   f[0] = 1;
//   for (let i = 1; i <= n; ++i) {
//     if (s[i - 1] !== "0") {
//       f[i] += f[i - 1];
//     }
//     if (
//       i > 1 &&
//       s[i - 2] != "0" &&
//       (parseInt(s[i - 2]) - 0) * 10 + (parseInt(s[i - 1]) - 0) <= 26
//     ) {
//       f[i] += f[i - 2];
//     }
//   }
//   return f[n];
// }

// export default function numDecodings(s: string): number {
//   if (s[0] === "0") return 0;
//   const len = s.length;
//   const dp = Array(len + 1).fill(0);
//   dp[0] = 1;
//   dp[1] = 1;
//   for (let i = 1; i < len; i++) {
//     if (s[i] === "0") {
//       if (s[i - 1] !== "0" && parseInt(s[i - 1]) <= 2) {
//         dp[i + 1] = dp[i - 1];
//       }
//     } else {
//       dp[i + 1] += dp[i];
//       if (s[i - 1] !== "0" && parseInt(s.substring(i - 1, i + 1)) <= 26) {
//         dp[i + 1] += dp[i - 1];
//       }
//     }
//   }
//   // console.log(dp);
//   return dp[len];
// }
