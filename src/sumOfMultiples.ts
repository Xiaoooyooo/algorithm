// https://leetcode.cn/problems/sum-multiples/description/
// 给你一个正整数 n ，请你计算在 [1，n] 范围内能被 3、5、7 整除的所有整数之和。
// 返回一个整数，用于表示给定范围内所有满足约束条件的数字之和。

// 官方题解 容斥原理
// https://oi-wiki.org/math/combinatorics/inclusion-exclusion-principle/
export default function sumOfMultiples(n: number): number {
  var f = function (n: number, m: number) {
    return ((m + Math.floor(n / m) * m) * Math.floor(n / m)) / 2;
  };
  return (
    f(n, 3) +
    f(n, 5) +
    f(n, 7) -
    f(n, 3 * 5) -
    f(n, 3 * 7) -
    f(n, 5 * 7) +
    f(n, 3 * 5 * 7)
  );
}
