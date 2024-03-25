// https://leetcode.cn/problems/maximum-score-of-a-good-subarray/description/
// 给你一个整数数组 nums （下标从 0 开始）和一个整数 k 。
// 一个子数组 (i, j) 的 分数 定义为 min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1) 。一个 好 子数组的两个端点下标需要满足 i <= k <= j 。
// 请你返回 好 子数组的最大可能 分数 。

// 官方题解 双指针
// export default function maximumScore(nums: number[], k: number): number {
//   const n = nums.length;
//   let left = k - 1,
//     right = k + 1;
//   let ans = 0;
//   // 将 nums[k] 视为整个区间的最小值
//   for (let i = nums[k]; ; --i) {
//     while (left >= 0 && nums[left] >= i) {
//       --left;
//     }
//     while (right < n && nums[right] >= i) {
//       ++right;
//     }
//     ans = Math.max(ans, (right - left - 1) * i);
//     if (left === -1 && right === n) {
//       break;
//     }
//   }
//   return ans;
// }

// 双指针优化版
export default function maximumScore(nums: number[], k: number): number {
  const n = nums.length;
  let left = k - 1;
  let right = k + 1;
  let ans = 0;
  for (let i = nums[k]; ; ) {
    while (left >= 0 && nums[left] >= i) {
      --left;
    }
    while (right < n && nums[right] >= i) {
      ++right;
    }
    ans = Math.max(ans, (right - left - 1) * i);
    if (left === -1 && right === n) {
      break;
    }
    // 将 i 更新为区间两端较大的值
    i = Math.max(left === -1 ? -1 : nums[left], right === n ? -1 : nums[right]);
    if (i === -1) {
      break;
    }
  }
  return ans;
}

// 枚举
// export default function maximumScore(nums: number[], k: number): number {
//   const len = nums.length;
//   let res = 0;
//   for (let i = 0; i <= k; i++) {
//     for (let j = k; j < len; j++) {
//       res = Math.max(res, Math.min(...nums.slice(i, j + 1)) * (j - i + 1));
//     }
//   }

//   return res;
// }
