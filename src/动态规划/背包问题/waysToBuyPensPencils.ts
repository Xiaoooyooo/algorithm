// https://leetcode.cn/problems/number-of-ways-to-buy-pens-and-pencils/
// 给你一个整数 total ，表示你拥有的总钱数。同时给你两个整数 cost1 和 cost2 ，
// 分别表示一支钢笔和一支铅笔的价格。你可以花费你部分或者全部的钱，去买任意数目的两种笔。
// 请你返回购买钢笔和铅笔的 不同方案数目 。

// 动态规划 背包问题
// export default function waysToBuyPensPencils(
//   total: number,
//   cost1: number,
//   cost2: number
// ): number {
//   const dp = Array(total + 1).fill(0);
//   dp[0] = 1;
//   const costs = [cost1, cost2];
//   for (let i = 0; i < 2; i++) {
//     for (let j = 1; j <= total; j++) {
//       if (j - costs[i] >= 0 && dp[j - costs[i]] !== 0) {
//         dp[j] += dp[j - costs[i]];
//       }
//     }
//   }
//   let count = 0;
//   for (let num of dp) {
//     count += num;
//   }
//   // console.log(dp);
//   return count;
// }

// 枚举
export default function waysToBuyPensPencils(
  total: number,
  cost1: number,
  cost2: number
): number {
  if (cost1 < cost2) return waysToBuyPensPencils(total, cost2, cost1); // 优化时间复杂度
  let res = 0,
    count = 0;
  while (count * cost1 <= total) {
    res += Math.floor((total - count * cost1) / cost2) + 1; // 可以不买另一支笔，所以后面要加 1
    count++;
  }
  return res;
}

// 暴力枚举
// export default function waysToBuyPensPencils(
//   total: number,
//   cost1: number,
//   cost2: number
// ): number {
//   let res = 0;
//   for (let i = 0; i <= total; i += cost1) {
//     for (let j = 0; j <= total; j += cost2) {
//       if (i + j <= total) {
//         res++;
//       }
//     }
//   }
//   return res;
// }
