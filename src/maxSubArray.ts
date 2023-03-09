// https://leetcode.cn/problems/maximum-subarray/
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。
export default function maxSubArray(nums: number[]) {
  const prefixSum = [0],
    len = nums.length;
  for (let i = 0; i < len; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  let res = -Infinity,
    min = Infinity;
  for (let i = 0; i < len + 1; i++) {
    res = Math.max(res, prefixSum[i] - min);
    min = Math.min(min, prefixSum[i]);
  }
  return res;
}

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
