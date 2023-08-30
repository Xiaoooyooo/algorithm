// https://leetcode.cn/problems/numbers-with-repeated-digits/
// 给定正整数 n，返回在 [1, n] 范围内具有 至少 1 位 重复数字的正整数的个数。

// todo
export default function numDupDigitsAtMostN(n: number): number {
  const sn = "" + n;
  const dp = new Array(sn.length)
    .fill(0)
    .map(() => new Array(1 << 10).fill(-1));
  const f = (mask: number, sn: string, i: number, same: boolean) => {
    if (i === sn.length) {
      return 1;
    }
    if (!same && dp[i][mask] >= 0) {
      return dp[i][mask];
    }
    let res = 0;
    const t = same ? sn[i].charCodeAt(0) - "0".charCodeAt(0) : 9;
    for (let k = 0; k <= t; k++) {
      if ((mask & (1 << k)) !== 0) {
        continue;
      }
      res += f(
        mask === 0 && k === 0 ? mask : mask | (1 << k),
        sn,
        i + 1,
        same && k === t
      );
    }
    if (!same) {
      dp[i][mask] = res;
    }
    return res;
  };
  return n + 1 - f(0, sn, 0, true);
}

// export default function numDupDigitsAtMostN(n: number): number {
//   let res = 0;
//   for (let i = 11; i <= n; i++) {
//     const s = String(i);
//     if (s.length !== [...new Set(s.split(""))].length) {
//       res += 1;
//     }
//   }
//   return res;
// }
