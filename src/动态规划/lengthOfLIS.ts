// https://leetcode.cn/problems/longest-increasing-subsequence/
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
// 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

export default function lengthOfLIS(nums: number[]): number {
  const len = nums.length;
  const arr = [];
  let n = 0;
  arr[n] = nums[0];
  for (let i = 1; i < len; i++) {
    if (nums[i] > arr[n]) {
      arr[++n] = nums[i];
    } else {
      let l = 0,
        r = n;
      let p = 0;
      while (l <= r) {
        const mid = (l + r) >> 1;
        if (nums[i] > arr[mid]) {
          l = mid + 1;
          p = l;
        } else {
          r = mid - 1;
        }
      }
      arr[p] = nums[i];
    }
  }
  return n + 1;
}

// 动态规划 二分查找
// export default function lengthOfLIS(nums: number[]): number {
//   let len = 1,
//     n = nums.length;
//   if (n == 0) {
//     return 0;
//   }
//   const d = Array(n + 1).fill(0);
//   d[len] = nums[0];
//   for (let i = 1; i < n; ++i) {
//     if (nums[i] > d[len]) {
//       d[++len] = nums[i];
//     } else {
//       let l = 1,
//         r = len,
//         pos = 0; // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
//       while (l <= r) {
//         let mid = (l + r) >> 1;
//         if (d[mid] < nums[i]) {
//           pos = mid;
//           l = mid + 1;
//         } else {
//           r = mid - 1;
//         }
//       }
//       d[pos + 1] = nums[i];
//     }
//   }
//   return len;
// }

// 动态规划
// export default function lengthOfLIS(nums: number[]): number {
//   const len = nums.length;
//   const dp = Array(len).fill(1);
//   let res = 1;
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//     res = Math.max(res, dp[i]);
//   }
//   // console.log(dp);
//   return res;
// }
