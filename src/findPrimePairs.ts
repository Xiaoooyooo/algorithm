// https://leetcode.cn/problems/prime-pairs-with-target-sum/description/
// 给你一个整数 n 。如果两个整数 x 和 y 满足下述条件，则认为二者形成一个质数对：
// 1 <= x <= y <= n
// x + y == n
// x 和 y 都是质数
// 请你以二维有序列表的形式返回符合题目要求的所有 [xi, yi] ，列表需要按 xi 的 非递减顺序 排序。
// 如果不存在符合要求的质数对，则返回一个空数组。
// 注意：质数是大于 1 的自然数，并且只有两个因子，即它本身和 1 。

const n = 1000000;
// 埃式筛 - 提前枚举 1000000 范围内的质数
const set = new Set();
const arr = Array(n + 1).fill(false);
for (let i = 2; i <= n; i++) {
  if (!arr[i]) {
    set.add(i);
    for (let j = i; i * j <= n; j++) {
      arr[i * j] = true;
    }
  }
}
export default function findPrimePairs(n: number): number[][] {
  const res = [];
  for (let i = 2; i <= n / 2; i++) {
    if (set.has(i) && set.has(n - i)) {
      res.push([i, n - i]);
    }
  }
  return res;
}
