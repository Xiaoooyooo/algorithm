// https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array
// 我们定义 arr 是 山形数组 当且仅当它满足：
// arr.length >= 3
// 存在某个下标 i （从 0 开始） 满足 0 < i < arr.length - 1 且：
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// 给你整数数组 nums，请你返回将 nums 变成 山形状数组的最少 删除次数。

// 二分查找
export default function minimumMountainRemovals(nums: number[]): number {
  const len = nums.length;
  const left = Array(len).fill(1);
  const right = Array(len).fill(1);
  let arr = [];
  for (let i = 0; i < len; i++) {
    const t = binarySearch(arr, nums[i]);
    left[i] = t;
    arr[t] = nums[i];
  }
  arr = [];
  for (let i = len - 1; i >= 0; i--) {
    const t = binarySearch(arr, nums[i]);
    right[i] = t;
    arr[t] = nums[i];
  }
  function binarySearch(arr: number[], target: number) {
    let l = 0,
      r = arr.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (arr[mid] < target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return l;
  }
  let res = len;
  for (let i = 0; i < len; i++) {
    if (left[i] !== 0 && right[i] !== 0) {
      res = Math.min(res, len - left[i] - right[i] - 1);
    }
  }
  return res;
}
