// https://leetcode.cn/problems/longest-arithmetic-subsequence/
// 给你一个整数数组 nums，返回 nums 中最长等差子序列的长度。
// 回想一下，nums 的子序列是一个列表 nums[i1], nums[i2], ..., nums[ik] ，
// 且 0 <= i1 < i2 < ... < ik <= nums.length - 1。
// 并且如果 seq[i+1] - seq[i]( 0 <= i < seq.length - 1) 的值都相同，那么序列 seq 是等差的。

// export default function longestArithSeqLength(nums: number[]): number {
//   const len = nums.length;
//   let max = 1;
//   const dp = Array(len)
//     .fill(0)
//     .map(() => ({}));
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       const d = nums[i] - nums[j];
//       if (dp[j][d]) {
//         dp[i][d] = dp[j][d] + 1;
//       } else {
//         dp[i][d] = 2;
//       }
//       max = Math.max(max, dp[i][d]);
//     }
//   }
//   console.log(dp);
//   return max;
// }

export default function longestArithSeqLength(nums: number[]): number {
  let minv = Number.MAX_SAFE_INTEGER,
    maxv = Number.MIN_SAFE_INTEGER;
  for (let num of nums) {
    if (num > maxv) maxv = num;
    if (num < minv) minv = num;
  }
  const diff = maxv - minv;
  let ans = 1;
  for (let d = -diff; d <= diff; ++d) {
    const f = new Array(maxv + 1).fill(-1);
    for (const num of nums) {
      let prev = num - d;
      if (prev >= minv && prev <= maxv && f[prev] !== -1) {
        f[num] = Math.max(f[num], f[prev] + 1);
        ans = Math.max(ans, f[num]);
      }
      f[num] = Math.max(f[num], 1);
    }
  }
  return ans;
}
