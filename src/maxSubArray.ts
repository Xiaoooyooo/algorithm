// https://leetcode.cn/problems/maximum-subarray/
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。

// 贪心算法
// export default function maxSubArray(nums: number[]) {
//   const prefixSum = [0],
//     len = nums.length;
//   for (let i = 0; i < len; i++) {
//     prefixSum[i + 1] = prefixSum[i] + nums[i];
//   }
//   let res = -Infinity,
//     min = Infinity;
//   for (let i = 0; i < len + 1; i++) {
//     // 贪心思路
//     // 在前缀和的左侧找最小和
//     // 右侧找最大和
//     res = Math.max(res, prefixSum[i] - min);
//     min = Math.min(min, prefixSum[i]);
//   }
//   return res;
// }

// 动态规划 简化版
export default function maxSubArray(nums: number[]) {
  const len = nums.length;
  let sum = 0,
    res = nums[0];

  for (let i = 0; i < len; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    res = Math.max(res, sum);
  }
  return res;
}

// 动态规划
// export default function maxSubArray(nums: number[]) {
//   const len = nums.length;
//   // dp[i] 表示以第 i 位数字结尾的子数组的最大和
//   const dp = Array(len).fill(0);
//   dp[0] = nums[0];
//   let res = dp[0];
//   for (let i = 1; i < len; i++) {
//     const curr = dp[i - 1] + nums[i];
//     if (curr > nums[i]) dp[i] = curr;
//     else dp[i] = nums[i];
//     res = Math.max(res, dp[i]);
//   }
//   return res;
// }

// 超时
// export default function maxSubArray(nums: number[]) {
//   const prefixSum = [0],
//     len = nums.length;
//   for (let i = 0; i < len; i++) {
//     prefixSum[i + 1] = prefixSum[i] + nums[i];
//   }
//   let max = -Infinity;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len + 1; j++) {
//       const dis = prefixSum[j] - prefixSum[i];
//       max = Math.max(dis, max);
//     }
//   }
//   return max;
// }
