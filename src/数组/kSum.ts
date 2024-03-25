// https://leetcode.cn/problems/find-the-k-sum-of-an-array/description/
// 给你一个整数数组 nums 和一个 正 整数 k 。你可以选择数组的任一 子序列 并且对其全部元素求和。
// 数组的 第 k 大和 定义为：可以获得的第 k 个 最大 子序列和（子序列和允许出现重复）
// 返回数组的 第 k 大和 。
// 子序列是一个可以由其他数组删除某些或不删除元素排生而来的数组，且派生过程不改变剩余元素的顺序。
// 注意：空子序列的和视作 0 。

//* 官方题解 二分查找
export default function kSum(nums: number[], k: number): number {
  const n = nums.length;
  let total = 0,
    total2 = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      nums[i] = -nums[i];
    } else {
      total += nums[i];
    }
    total2 += nums[i];
  }

  nums.sort((a, b) => a - b);
  const dfs = (i: number, t: number, limit: number): void => {
    if (i === n || cnt >= k - 1 || t + nums[i] > limit) {
      return;
    }
    cnt++;
    dfs(i + 1, t + nums[i], limit);
    dfs(i + 1, t, limit);
  };

  let left = 0,
    right = total2;
  let cnt = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    cnt = 0;
    dfs(0, 0, mid);
    if (cnt >= k - 1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  // console.log(left);
  return total - left;
}
