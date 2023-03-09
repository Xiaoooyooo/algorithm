// 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数
// 返回一个长度为 n + 1 的数组 ans 作为答案。

// 0 1 10 11 100 101 110 111 1000 1001 1010

// 动态规划 + 位运算
export default function countBits(n: number): number[] {
  const dp = [0];
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }
  return dp;
}

// 动态规划
// export default function countBits(n: number): number[] {
//   const dp = [0];
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//       dp[i] = dp[i / 2];
//     } else {
//       dp[i] = dp[(i - 1) / 2] + 1;
//     }
//   }
//   return dp;
// }

// js 字符串方法
// export default function countBits(n: number): number[] {
//   const res = [];
//   for (let i = 0; i <= n; i++) {
//     res.push(i.toString(2).replace(/0/g, "").length);
//   }
//   return res;
// }
