// https://leetcode.cn/problems/next-greater-numerically-balanced-number/
// 如果整数  x 满足：对于每个数位 d ，这个数位 恰好 在 x 中出现 d 次。那么整数 x 就是一个 数值平衡数 。
// 给你一个整数 n ，请你返回 严格大于 n 的 最小数值平衡数 。

export default function nextBeautifulNumber(n: number): number {
  for (let i = n + 1; ; i++) {
    const s = String(i);
    const arr = Array(10).fill(0);
    for (let j = 0; j < s.length; j++) {
      arr[Number(s[j])]++;
    }
    let flag = true;
    for (let j = 0; j < 10; j++) {
      if (arr[j] !== 0 && arr[j] !== j) {
        flag = false;
      }
    }
    if (flag) {
      return i;
    }
  }
}
