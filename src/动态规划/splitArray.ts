// https://leetcode.cn/problems/split-array-largest-sum/description/
// 给定一个非负整数数组 nums 和一个整数 k ，你需要将这个数组分成 k 个非空的连续子数组。
// 设计一个算法使得这 k 个子数组各自和的最大值最小。

// * 官方题解 动态规划
export default function splitArray(nums: number[], k: number): number {
  const n = nums.length;
  const f = Array(n + 1)
    .fill(0)
    .map(() => Array(k + 1).fill(Number.MAX_SAFE_INTEGER));
  const sub = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sub[i + 1] = sub[i] + nums[i];
  }
  f[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(i, k); j++) {
      for (let l = 0; l < i; l++) {
        f[i][j] = Math.min(f[i][j], Math.max(f[l][j - 1], sub[i] - sub[l]));
      }
    }
  }
  return f[n][k];
}

// * 官方题解 二分查找
// export default function splitArray(nums: number[], k: number): number {
//   let left = 0,
//     right = 0;
//   for (let i = 0; i < nums.length; i++) {
//     right += nums[i];
//     if (left < nums[i]) {
//       left = nums[i];
//     }
//   }
//   while (left < right) {
//     const mid = Math.floor((right - left) / 2) + left;
//     if (check(nums, mid, k)) {
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }

//   function check(nums: number[], x: number, m: number) {
//     let sum = 0;
//     let cnt = 1;
//     for (let i = 0; i < nums.length; i++) {
//       if (sum + nums[i] > x) {
//         cnt++;
//         sum = nums[i];
//       } else {
//         sum += nums[i];
//       }
//     }
//     return cnt <= m;
//   }

//   return left;
// }
