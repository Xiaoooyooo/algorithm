// https://leetcode.cn/problems/successful-pairs-of-spells-and-potions/
// 给你两个正整数数组 spells 和 potions ，长度分别为 n 和 m ，其中 spells[i] 表示第 i 个咒语的能量强度，potions[j] 表示第 j 瓶药水的能量强度。
// 同时给你一个整数 success 。一个咒语和药水的能量强度 相乘 如果 大于等于 success ，那么它们视为一对 成功 的组合。
// 请你返回一个长度为 n 的整数数组 pairs，其中 pairs[i] 是能跟第 i 个咒语成功组合的 药水 数目。

export default function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  const n = spells.length,
    m = potions.length;
  potions.sort((a, b) => a - b);
  const res = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let l = 0,
      r = m - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (spells[i] * potions[mid] < success) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    if (l < m && spells[i] * potions[l] >= success) {
      res[i] = m - l;
    }
  }
  return res;
}
