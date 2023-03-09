// 链接：https://leetcode.cn/problems/n-th-tribonacci-number
// 泰波那契序列 Tn 定义如下：
// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

// 动态规划
// export default function tribonacci(n: number) {
//   const dp = [0, 1, 1];
//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
//   }
//   return dp[n];
// }

// 递归 超时
export default function tribonacci(n: number) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}
