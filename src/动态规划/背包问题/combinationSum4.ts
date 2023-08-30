// https://leetcode.cn/problems/combination-sum-iv/
// 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。
// 请你从 nums 中找出并返回总和为 target 的元素组合的个数。
// 请注意，顺序不同的序列被视作不同的组合。
// 题目数据保证答案符合 32 位整数范围。

// 动态规划
// export default function combinationSum4(
//   nums: number[],
//   target: number
// ): number {
//   const len = nums.length;
//   const dp = Array(target + 1).fill(0);
//   dp[0] = 1;
//   for (let i = 1; i <= target; i++) {
//     for (let j = 0; j < len; j++) {
//       if (i - nums[j] >= 0) dp[i] += dp[i - nums[j]];
//     }
//   }
//   console.log(dp);
//   return dp[target];
// }

// 深度优先搜索 + 记忆化搜索
export default function combinationSum4(
  nums: number[],
  target: number
): number {
  const len = nums.length;
  const map = new Map();
  function dfs(target: number) {
    if (target == 0) return 1;
    if (target < 0) return 0;
    if (map.has(target)) return map.get(target);
    let res = 0;
    for (let i = 0; i < len; i++) {
      res += dfs(target - nums[i]);
    }
    map.set(target, res);
    return res;
  }
  return dfs(target);
}

// 深度优先搜索 超时
// export default function combinationSum4(
//   nums: number[],
//   target: number
// ): number {
//   const len = nums.length;
//   let count = 0;
//   function dfs(value: number) {
//     if (value >= target) {
//       if (value === target) count++;
//       return;
//     }
//     for (let i = 0; i < len; i++) {
//       dfs(value + nums[i]);
//     }
//   }
//   dfs(0);
//   return count;
// }
