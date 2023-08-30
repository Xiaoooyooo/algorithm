// https://leetcode.cn/problems/count-ways-to-build-good-strings/description/
// 给你整数 zero ，one ，low 和 high ，我们从空字符串开始构造一个字符串，每一步执行下面操作中的一种：
// 将 '0' 在字符串末尾添加 zero  次。
// 将 '1' 在字符串末尾添加 one 次。
// 以上操作可以执行任意次。
// 如果通过以上过程得到一个 长度 在 low 和 high 之间（包含上下边界）的字符串，那么这个字符串我们称为 好 字符串。
// 请你返回满足以上要求的 不同 好字符串数目。
// 由于答案可能很大，请将结果对 109 + 7 取余 后返回。

// 动态规划
export default function countGoodStrings(
  low: number,
  high: number,
  zero: number,
  one: number
): number {
  const mod = 1e9 + 7;
  const dp = Array(high + 1).fill(0);
  // dp[i] = dp[i - zero] + dp[i - one]
  dp[0] = 1;
  for (let i = 1; i <= high; i++) {
    if (i - zero >= 0) dp[i] = (dp[i] + dp[i - zero]) % mod;
    if (i - one >= 0) dp[i] = (dp[i] + dp[i - one]) % mod;
  }
  // console.log(dp);
  let count = 0;
  for (let i = 0; i <= high; i++) {
    if (i >= low && i <= high) count = (count + dp[i]) % mod;
  }
  return count;
}

// 深度优先搜索
// export default function countGoodStrings(
//   low: number,
//   high: number,
//   zero: number,
//   one: number
// ): number {
//   let res = 0;
//   const zeros = "0".repeat(zero),
//     ones = "1".repeat(one);
//   const mod = 1e9 + 7;
//   function dfs(s: string) {
//     if (s.length > high) return;
//     if (s.length >= low && s.length <= high) res = (res + 1) % mod;
//     dfs(s + zeros);
//     dfs(s + ones);
//   }
//   dfs("");
//   return res;
// }
