// 链接：https://leetcode.cn/leetbook/read/queue-stack/ga4o2/
// 给你一个整数数组 nums 和一个整数 target 。
// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

// 动态规划
export default function findTargetSumWays(
  nums: number[],
  target: number
): number {
  const sum = nums.reduce((p, v) => p + v, 0);
  // ? target + sum 为奇数时为啥不行
  // 记数组所有数字和为 sum
  // 记添加 - 号的数字的和为 neg
  // 则添加 + 号的数字和为 sum - neg
  // 则题意可转化为使等式 (sum - neg) - neg = target 成立
  // 简化为 sum - target = 2 * neg
  // * 由此可知 sum - target 必为非负偶数
  if (Math.abs(target) > sum || (target + sum) & 1) {
    return 0;
  }
  // 到此原题意可以转换为：在数组中选取若干数，使它们的和为 neg 的方案数
  const neg = (sum - target) >> 1;
  const len = nums.length;
  // dp[i][j] nums 中前 i 个数字中，选取若干使其和为 j 的方案数
  const dp = Array(len + 1)
    .fill(0)
    .map(() => Array(neg + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= len; i++) {
    const num = nums[i - 1];
    for (let j = 0; j <= neg; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= num) {
        dp[i][j] += dp[i - 1][j - num];
      }
    }
  }
  return dp[len][neg];
}

// 动态规划 优化版
// export default function findTargetSumWays(
//   nums: number[],
//   target: number
// ): number {
//   const sum = nums.reduce((p, v) => p + v, 0);
//   // ? target + sum 为奇数时为啥不行
//   // 记数组所有数字和为 sum
//   // 记添加 - 号的数字的和为 neg
//   // 则添加 + 号的数字和为 sum - neg
//   // 则题意可转化为使等式 (sum - neg) - neg = target 成立
//   // 简化为 sum - target = 2 * neg
//   // * 由此可知 sum - target 必为非负偶数
//   if (Math.abs(target) > sum || (target + sum) & 1) {
//     return 0;
//   }

//   // const bagWeight = Math.min((sum + target) >> 1, (sum - target) >> 1);
//   const neg = (sum - target) >> 1;
//   const dp = new Array(neg + 1).fill(0);
//   dp[0] = 1;

//   for (let i = 0, len = nums.length; i < len; i++) {
//     for (let j = neg; j >= nums[i]; j--) {
//       dp[j] += dp[j - nums[i]];
//     }
//   }
//   console.log(dp);
//   return dp[neg];
// }

// 深度优先搜索 - 优化版 36ms
// export default function findTargetSumWays(
//   nums: number[],
//   target: number
// ): number {
//   const len = nums.length;
//   let res = 0;
//   function dfs(index: number, sum = 0) {
//     if (index === len) {
//       if (sum === target) {
//         res += 1;
//       }
//       return;
//     }
//     dfs(index + 1, sum + nums[index]);
//     dfs(index + 1, sum - nums[index]);
//   }
//   dfs(0);
//   return res;
// }

// 深度优先搜索 - 超时 1000ms
// export default function findTargetSumWays(
//   nums: number[],
//   target: number
// ): number {
//   const len = nums.length;
//   let res = 0;
//   function dfs(symbols: ("+" | "-")[], sum = 0) {
//     if (symbols.length === len) {
//       if (sum === target) {
//         res += 1;
//       }
//       return;
//     }
//     dfs([...symbols, "+"], sum + nums[symbols.length]);
//     dfs([...symbols, "-"], sum - nums[symbols.length]);
//   }
//   dfs([]);
//   return res;
// }
