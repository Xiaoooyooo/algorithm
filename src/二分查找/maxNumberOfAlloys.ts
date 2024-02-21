// https://leetcode.cn/problems/maximum-number-of-alloys/description/
// 假设你是一家合金制造公司的老板，你的公司使用多种金属来制造合金。
// 现在共有 n 种不同类型的金属可以使用，并且你可以使用 k 台机器来制造合金。每台机器都需要特定数量的每种金属来创建合金。
// 对于第 i 台机器而言，创建合金需要 composition[i][j] 份 j 类型金属。
// 最初，你拥有 stock[i] 份 i 类型金属，而每购入一份 i 类型金属需要花费 cost[i] 的金钱。
// 给你整数 n、k、budget，下标从 1 开始的二维数组 composition，两个下标从 1 开始的数组 stock 和 cost，
// 请你在预算不超过 budget 金钱的前提下，最大化 公司制造合金的数量。
// 所有合金都需要由同一台机器制造。
// 返回公司可以制造的最大合金数。

// 二分查找
export default function maxNumberOfAlloys(
  n: number,
  k: number,
  budget: number,
  composition: number[][],
  stock: number[],
  cost: number[]
): number {
  let max = 0;
  for (let i = 0; i < k; i++) {
    let l = 0,
      r = 2e8;
    while (l <= r) {
      const count = Math.floor((l + r) / 2);
      let currentCost = 0;
      for (let j = 0; j < n; j++) {
        const used = composition[i][j] * count - stock[j];
        if (used > 0) {
          currentCost += used * cost[j];
        }
      }
      if (currentCost <= budget) {
        // max = Math.max(max, count);
        l = count + 1;
      } else {
        r = count - 1;
      }
    }
    max = Math.max(max, r);
  }
  return max;
}

// 枚举
// export default function maxNumberOfAlloys(
//   n: number,
//   k: number,
//   budget: number,
//   composition: number[][],
//   stock: number[],
//   cost: number[]
// ): number {
//   let max = 0;
//   for (let i = 0; i < k; i++) {
//     const c = composition[i];
//     let count = 0;
//     // eslint-disable-next-line no-constant-condition
//     while (true) {
//       let currentCost = 0;
//       for (let j = 0; j < n; j++) {
//         const used = c[j] * (count + 1) - stock[j];
//         if (used >= 0) {
//           currentCost += used * cost[j];
//         }
//       }
//       if (currentCost > budget) {
//         break;
//       }
//       count++;
//     }
//     max = Math.max(max, count);
//   }
//   return max;
// }
