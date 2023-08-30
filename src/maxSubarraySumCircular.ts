// https://leetcode.cn/problems/maximum-sum-circular-subarray/
// 给定一个长度为 n 的环形整数数组 nums ，返回 nums 的非空 子数组 的最大可能和 。
// 环形数组 意味着数组的末端将会与开头相连呈环状。
// 形式上， nums[i] 的下一个元素是 nums[(i + 1) % n] ， nums[i] 的前一个元素是 nums[(i - 1 + n) % n] 。
// 子数组 最多只能包含固定缓冲区 nums 中的每个元素一次。
// 形式上，对于子数组 nums[i], nums[i + 1], ..., nums[j] ，不存在 i <= k1, k2 <= j 其中 k1 % n == k2 % n 。

export default function maxSubarraySumCircular(nums: number[]): number {
  const len = nums.length;
  const maxPrefixSum = Array(len + 1).fill(0);
  let res = Number.MIN_SAFE_INTEGER;
  let prefix = 0;
  let prefixSum = 0;
  for (let i = 0; i < len; i++) {
    prefix = Math.max(prefix + nums[i], nums[i]);
    res = Math.max(res, prefix);
    prefixSum += nums[i];
    maxPrefixSum[i + 1] = Math.max(maxPrefixSum[i], prefixSum);
  }
  let suffix = 0;
  for (let i = len - 1; i > 0; i--) {
    suffix += nums[i];
    res = Math.max(res, suffix + maxPrefixSum[i - 1]);
  }
  return res;
}

// 官方题解
// export default function maxSubarraySumCircular(nums: number[]): number {
//   let len = nums.length;
//   const leftMax = new Array(len).fill(0);
//   // 对坐标为 0 处的元素单独处理，避免考虑子数组为空的情况
//   leftMax[0] = nums[0];
//   let leftSum = nums[0];
//   let pre = nums[0];
//   let res = nums[0];
//   for (let i = 1; i < len; i++) {
//     pre = Math.max(pre + nums[i], nums[i]);
//     res = Math.max(res, pre);
//     leftSum += nums[i];
//     leftMax[i] = Math.max(leftMax[i - 1], leftSum);
//   }

//   // 从右到左枚举后缀，固定后缀，选择最大前缀
//   let rightSum = 0;
//   for (let i = len - 1; i > 0; i--) {
//     rightSum += nums[i];
//     res = Math.max(res, rightSum + leftMax[i - 1]);
//   }
//   return res;
// }

// 超时
// export default function maxSubarraySumCircular(nums: number[]): number {
//   const len = nums.length;
//   const arr = Array(len * 2)
//     .fill(0)
//     .map((e, i) => nums[i % len]);
//   let res = Number.MIN_SAFE_INTEGER;
//   const prefixSum = Array(len * 2 + 1).fill(0);
//   for (let i = 1; i <= len * 2; i++) {
//     prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
//   }
//   for (let i = 0; i <= len * 2; i++) {
//     for (let j = i + 1; j <= i + len && j < len * 2; j++) {
//       const sum = prefixSum[j] - prefixSum[i];
//       if (sum > res) res = sum;
//     }
//   }
//   return res;
// }
