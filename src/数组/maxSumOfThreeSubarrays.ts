// https://leetcode.cn/problems/maximum-sum-of-3-non-overlapping-subarrays/
// 给你一个整数数组 nums 和一个整数 k ，找出三个长度为 k 、互不重叠、且全部数字和（3 * k 项）最大的子数组，并返回这三个子数组。
// 以下标的数组形式返回结果，数组中的每一项分别指示每个子数组的起始位置（下标从 0 开始）。如果有多个结果，返回字典序最小的一个。

export default function maxSumOfThreeSubarrays(
  nums: number[],
  k: number
): number[] {
  const len = nums.length;
  const lmap = new Map();
  const rmap = new Map();
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let prev = [sum, 0];
  lmap.set(0, prev);
  let n = len - k * 3 + 1;
  for (let i = 1; i < n; i++) {
    sum = sum - nums[i - 1] + nums[i + k - 1];
    if (sum > prev[0]) {
      prev = [sum, i];
    }
    lmap.set(i, prev);
  }
  sum = 0;
  for (let i = len - k; i < len; i++) {
    sum += nums[i];
  }
  prev = [sum, len - k];
  rmap.set(len - k, prev);
  n = 2 * k;
  for (let i = len - k - 1; i >= n; i--) {
    sum = sum + nums[i] - nums[i + k];
    if (sum >= prev[0]) {
      prev = [sum, i];
    }
    rmap.set(i, prev);
  }

  // console.log(lmap, rmap);
  sum = 0;
  for (let i = k; i < 2 * k - 1; i++) {
    sum += nums[i];
  }
  let ans: number[],
    max = 0;
  for (let i = k; i < len - 2 * k + 1; i++) {
    sum += nums[i + k - 1];
    const lmax = lmap.get(i - k);
    const rmax = rmap.get(i + k);
    const _sum = lmax[0] + sum + rmax[0];
    if (!ans || _sum > max) {
      ans = [lmax[1], i, rmax[1]];
      max = _sum;
    }
    sum -= nums[i];
  }
  return ans;
}
