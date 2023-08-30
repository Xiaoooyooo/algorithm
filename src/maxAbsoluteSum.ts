// https://leetcode.cn/problems/maximum-absolute-sum-of-any-subarray/description/
// 给你一个整数数组 nums 。
// 一个子数组 [numsl, numsl+1, ..., numsr-1, numsr] 的 和的绝对值 为
//   abs(numsl + numsl+1 + ... + numsr-1 + numsr) 。
// 请你找出 nums 中 和的绝对值 最大的任意子数组（可能为空），并返回该 最大值 。
// abs(x) 定义如下：
// 如果 x 是负整数，那么 abs(x) = -x 。
// 如果 x 是非负整数，那么 abs(x) = x 。

// 动态规划
// export default function maxAbsoluteSum(nums: number[]): number {
//   let positiveMax = 0,
//     negativeMin = 0;
//   let positiveSum = 0,
//     negativeSum = 0;
//   for (let num of nums) {
//     positiveSum += num;
//     positiveMax = Math.max(positiveMax, positiveSum);
//     positiveSum = Math.max(0, positiveSum);
//     negativeSum += num;
//     negativeMin = Math.min(negativeMin, negativeSum);
//     negativeSum = Math.min(0, negativeSum);
//   }
//   return Math.max(positiveMax, -negativeMin);
// }

export default function maxAbsoluteSum(nums: number[]): number {
  const len = nums.length;
  // dp1[i] 表示以 nums[i] 结尾的最大子数组和
  const dp1 = Array(len).fill(0);
  // dp2[i] 表示以 nums[i] 结尾的最小子数组和
  const dp2 = Array(len).fill(0);
  dp1[0] = nums[0];
  dp2[0] = nums[0];
  let positiveMax = nums[0],
    negativeMin = nums[0];
  for (let i = 1; i < len; i++) {
    dp1[i] = Math.max(nums[i], dp1[i - 1] + nums[i]);
    dp2[i] = Math.min(nums[i], dp2[i - 1] + nums[i]);
    positiveMax = Math.max(positiveMax, dp1[i]);
    negativeMin = Math.min(negativeMin, dp2[i]);
  }
  return Math.max(positiveMax, -negativeMin);
}

// 前缀和 + 贪心
// export default function maxAbsoluteSum(nums: number[]): number {
//   const len = nums.length;
//   const prefix = Array(len + 1).fill(0);
//   for (let i = 0; i < len; i++) {
//     prefix[i + 1] = prefix[i] + nums[i];
//   }
//   let res = 0,
//     temp = 0;
//   // 左边找最小负数，右边找最大正数
//   for (let i = 0; i <= len; i++) {
//     if (prefix[i] < 0) {
//       temp = Math.min(temp, prefix[i]);
//     } else {
//       res = Math.max(res, prefix[i] - temp);
//     }
//   }
//   temp = 0;
//   // 左边找最大正数，右边找最小负数
//   for (let i = 0; i <= len; i++) {
//     if (prefix[i] > 0) {
//       temp = Math.max(temp, prefix[i]);
//     } else {
//       res = Math.max(res, Math.abs(prefix[i] - temp));
//     }
//   }
//   return res;
// }
