// https://leetcode.cn/problems/house-robber-ii/description/
// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
// 这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
// 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

export default function rob(nums: number[]): number {
  const len = nums.length;
  if (len === 1) return nums[0];
  const dp1 = Array(len).fill(0),
    dp2 = Array(len).fill(0);
  dp1[1] = nums[0];
  dp2[1] = nums[1];
  for (let i = 0; i < len; i++) {
    // dp1 计算 0 ~ (len - 2) 中的最大
    if (i >= 1 && i < len - 1) {
      dp1[i + 1] = Math.max(dp1[i - 1] + nums[i], dp1[i]);
    }
    // dp2 计算 1 ~ (len - 1) 中的最大
    if (i >= 2 && i < len) {
      dp2[i] = Math.max(dp2[i - 2] + nums[i], dp2[i - 1]);
    }
  }
  // console.log(dp1);
  // console.log(dp2);
  return Math.max(dp1[len - 1], dp2[len - 1]);
}
