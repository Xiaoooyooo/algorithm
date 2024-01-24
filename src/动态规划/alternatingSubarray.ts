// https://leetcode.cn/problems/longest-alternating-subarray/description/
// 给你一个下标从 0 开始的整数数组 nums 。如果 nums 中长度为 m 的子数组 s 满足以下条件，我们称它是一个 交替子数组 ：
// m 大于 1 。
// s1 = s0 + 1 。
// 下标从 0 开始的子数组 s 与数组 [s0, s1, s0, s1,...,s(m-1) % 2] 一样。
// 也就是说，s1 - s0 = 1 ，s2 - s1 = -1 ，s3 - s2 = 1 ，s4 - s3 = -1 ，以此类推，直到 s[m - 1] - s[m - 2] = (-1)m 。
// 请你返回 nums 中所有 交替 子数组中，最长的长度，如果不存在交替子数组，请你返回 -1 。
// 子数组是一个数组中一段连续 非空 的元素序列。

// 动态规划
export default function alternatingSubarray(nums: number[]): number {
  const len = nums.length;
  const dp = Array(len)
    .fill(0)
    .map(() => [false, 0, -1]); // [是否是交替子数组，交替值，长度]
  let res = -1;
  for (let i = 1; i < len; i++) {
    const d = nums[i] - nums[i - 1];
    if (dp[i - 1][0] && d * (dp[i - 1][1] as number) === -1) {
      dp[i][0] = true;
      dp[i][1] = d;
      dp[i][2] = (dp[i - 1][2] as number) + 1;
    } else if (d === 1) {
      dp[i][0] = true;
      dp[i][1] = d;
      dp[i][2] = 2;
    }
    res = Math.max(res, dp[i][2] as number);
  }
  return res;
}
