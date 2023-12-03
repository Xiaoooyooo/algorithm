// https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards/
// 几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。
// 每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。
// 你的点数就是你拿到手中的所有卡牌的点数之和。
// 给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。

// 滑动窗口
export default function maxScore(cardPoints: number[], k: number): number {
  const len = cardPoints.length;
  const total = cardPoints.reduce((c, p) => c + p);
  const _k = len - k;
  let sum = 0;
  for (let i = 0; i < _k; i++) {
    sum += cardPoints[i];
  }
  let res = total - sum;
  for (let i = 1; i <= k; i++) {
    sum -= cardPoints[i - 1];
    sum += cardPoints[_k + i - 1];
    res = Math.max(res, total - sum);
  }
  return res;
}

// 记忆化搜索 超时
// export default function maxScore(cardPoints: number[], k: number): number {
//   const len = cardPoints.length;
//   const map = new Map<string, number>();
//   function dfs(l: number, r: number) {
//     if (len - (r - l + 1) === k) {
//       return 0;
//     }
//     if (l === r) {
//       return cardPoints[l];
//     }
//     const key = `${l},${r}`;
//     if (map.has(key)) {
//       return map.get(key);
//     }
//     const max = Math.max(
//       cardPoints[l] + dfs(l + 1, r),
//       cardPoints[r] + dfs(l, r - 1)
//     );
//     map.set(key, max);
//     return max;
//   }
//   return dfs(0, len - 1);
// }
