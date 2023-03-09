// 链接：https://leetcode.cn/problems/check-if-array-pairs-are-divisible-by-k
// 给你一个整数数组 arr 和一个整数 k ，其中数组长度是偶数，值为 n 。
// 现在需要把数组恰好分成 n / 2 对，以使每对数字的和都能够被 k 整除。
// 如果存在这样的分法，请返回 True ；否则，返回 False 。

export default function canArrange(arr: number[], k: number): boolean {
  // 10, 5 : 1 2 4 3
  // 8, 2 : 2 4 4 2
  const len = arr.length;
  const map = new Map<number, number>();
  for (let i = 0; i < len; i++) {
    // 将负数的模转换为正数
    // 例如一个数为 -2，k 为 3
    // 能与 -2 组合的数为：-1，2
    // 将负数的模转换为正数则为 1，此时与它组合的 -1 则被转为了 2
    const r = ((arr[i] % k) + k) % k;
    if (!map.has(r)) {
      map.set(r, 1);
    } else {
      map.set(r, map.get(r) + 1);
    }
  }
  if (map.has(0) && map.get(0) % 2 !== 0) return false;
  for (let j = 1; j <= k / 2; j++) {
    if (map.get(j) !== map.get(k - j)) return false;
  }
  return true;
}
