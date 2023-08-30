// https://leetcode.cn/problems/delete-and-earn/?envType=study-plan-v2&envId=dynamic-programming
// 给你一个整数数组 nums ，你可以对它进行一些操作。
// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。
// 之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。
// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

export default function deleteAndEarn(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  const sums = Array(20000).fill(0);
  let max = 0;
  for (let num of nums) {
    if (num > max) max = num;
    sums[num] += num;
  }
  const len = sums.length;
  // 转换为打家劫舍问题
  const dp = Array(len).fill(0);
  dp[0] = sums[0];
  dp[1] = Math.max(sums[0], sums[1]);
  let i = 2;
  for (; i <= max; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + sums[i]);
  }
  return dp[max];
}
