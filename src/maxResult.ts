// https://leetcode.cn/problems/jump-game-vi/description/
// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。
// 一开始你在下标 0 处。每一步，你最多可以往前跳 k 步，但你不能跳出数组的边界。也就是说，你可以从下标 i 跳到 [i + 1， min(n - 1, i + k)] 包含 两个端点的任意位置。
// 你的目标是到达数组最后一个位置（下标为 n - 1 ），你的 得分 为经过的所有数字之和。
// 请你返回你能得到的 最大得分 。

// 单调队列
// export default function maxResult(nums: number[], k: number): number {
//   const len = nums.length;
//   const dp = new Array(len).fill(0);
//   dp[0] = nums[0];
//   const queue: number[] = [];
//   queue.push(0);
//   for (let i = 1; i < len; i++) {
//     while (queue.length > 0 && queue[0] < i - k) {
//       queue.shift();
//     }
//     dp[i] = dp[queue[0]] + nums[i];
//     while (queue.length > 0 && dp[queue[queue.length - 1]] <= dp[i]) {
//       queue.pop();
//     }
//     queue.push(i);
//   }
//   return dp[len - 1];
// }

export default function maxResult(nums: number[], k: number): number {
  const len = nums.length;
  const dp = Array(len).fill(0);
  dp[0] = nums[0];
  const queue = [];
  queue.push(0);
  for (let i = 1; i < len; i++) {
    while (queue.length && i - queue[0] > k) {
      queue.shift();
    }
    dp[i] = nums[i] + dp[queue[0]];
    while (queue.length && dp[i] >= dp[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
  }
  return dp[len - 1];
}

// 动态规划
// export default function maxResult(nums: number[], k: number): number {
//   const len = nums.length;
//   const dp = Array(len).fill(Number.MIN_SAFE_INTEGER);
//   dp[0] = nums[0];
//   for (let i = 1; i < len; i++) {
//     for (let j = i - 1; j >= 0 && j >= i - k; j--) {
//       dp[i] = Math.max(dp[i], dp[j] + nums[i]);
//     }
//   }
//   console.log(dp);
//   return dp[len - 1];
// }
