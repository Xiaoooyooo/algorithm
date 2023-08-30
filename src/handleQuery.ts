// https://leetcode.cn/problems/handling-sum-queries-after-update/
// 给你两个下标从 0 开始的数组 nums1 和 nums2 ，和一个二维数组 queries 表示一些操作。总共有 3 种类型的操作：
// 操作类型 1 为 queries[i] = [1, l, r] 。
//   你需要将 nums1 从下标 l 到下标 r 的所有 0 反转成 1 或将 1 反转成 0 。l 和 r 下标都从 0 开始。
// 操作类型 2 为 queries[i] = [2, p, 0] 。
//   对于 0 <= i < n 中的所有下标，令 nums2[i] = nums2[i] + nums1[i] * p 。
// 操作类型 3 为 queries[i] = [3, 0, 0] 。
//   求 nums2 中所有元素的和。
// 请你返回一个数组，包含所有第三种操作类型的答案。

// O(n^2)
export default function handleQuery(
  nums1: number[],
  nums2: number[],
  queries: number[][]
): number[] {
  const res = [];
  for (let i = 0, len = queries.length; i < len; i++) {
    const q = queries[i];
    if (q[0] === 1) {
      const [, l, r] = q;
      for (let j = l; j <= r; j++) {
        if (nums1[j] === 1) nums1[j] = 0;
        else if (nums1[j] === 0) nums1[j] = 1;
      }
    }
    if (q[0] === 2) {
      const p = q[1];
      for (let j = 0, len = nums2.length; j < len; j++) {
        nums2[j] = nums2[j] + nums1[j] * p;
      }
    }
    if (q[0] === 3) {
      res.push(nums2.reduce((c, p) => c + p));
    }
  }
  return res;
}
