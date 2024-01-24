// https://leetcode.cn/problems/minimum-time-to-make-array-sum-at-most-x/description/
// 给你两个长度相等下标从 0 开始的整数数组 nums1 和 nums2 。
// 每一秒，对于所有下标 0 <= i < nums1.length ，nums1[i] 的值都增加 nums2[i] 。
// 操作 完成后 ，你可以进行如下操作：
// 选择任一满足 0 <= i < nums1.length 的下标 i ，并使 nums1[i] = 0 。
// 同时给你一个整数 x 。
// 请你返回使 nums1 中所有元素之和 小于等于 x 所需要的 最少 时间，如果无法实现，那么返回 -1 。

// * 官方题解 动态规划
export default function minimumTime(
  nums1: number[],
  nums2: number[],
  x: number
): number {
  const n = nums1.length;
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const nums = nums1.map((a, i) => ({ a, b: nums2[i] }));
  nums.sort((a, b) => a.b - b.b);

  for (let j = 1; j <= n; j++) {
    const { a, b } = nums[j - 1];
    for (let i = j; i > 0; i--) {
      dp[j][i] = Math.max(dp[j - 1][i], dp[j - 1][i - 1] + i * b + a);
    }
  }

  const s1 = nums1.reduce((sum, num) => sum + num, 0);
  const s2 = nums2.reduce((sum, num) => sum + num, 0);
  for (let i = 0; i <= n; i++) {
    if (s2 * i + s1 - dp[n][i] <= x) {
      return i;
    }
  }
  return -1;
}
