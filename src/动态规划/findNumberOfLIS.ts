// https://leetcode.cn/problems/number-of-longest-increasing-subsequence
// 给定一个未排序的整数数组 nums ，返回最长递增子序列的个数 。
// 注意 这个数列必须是 严格 递增的。

// *
export default function findNumberOfLIS(nums: number[]): number {
  const len = nums.length;
  const dp = Array(len).fill(1);
  const count = Array(len).fill(1);
  let max = 0,
    res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }
    if (dp[i] > max) {
      max = dp[i];
      res = count[i];
    } else if (dp[i] === max) {
      res += count[i];
    }
  }
  return res;
}

// export default function findNumberOfLIS(nums: number[]): number {
//   let n = nums.length,
//     maxLen = 0,
//     res = 0;
//   const dp = new Array(n).fill(0);
//   const count = new Array(n).fill(0);
//   for (let i = 0; i < n; ++i) {
//     dp[i] = 1;
//     count[i] = 1;
//     for (let j = 0; j < i; ++j) {
//       if (nums[i] > nums[j]) {
//         if (dp[j] + 1 > dp[i]) {
//           dp[i] = dp[j] + 1;
//           count[i] = count[j]; // 重置计数
//         } else if (dp[j] + 1 === dp[i]) {
//           count[i] += count[j];
//         }
//       }
//     }
//     if (dp[i] > maxLen) {
//       maxLen = dp[i];
//       res = count[i]; // 重置计数
//     } else if (dp[i] === maxLen) {
//       res += count[i];
//     }
//   }
//   console.log(dp, count);
//   return res;
// }
