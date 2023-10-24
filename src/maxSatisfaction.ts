// https://leetcode.cn/problems/reducing-dishes/
// 一个厨师收集了他 n 道菜的满意程度 satisfaction ，这个厨师做出每道菜的时间都是 1 单位时间。
// 一道菜的 「 like-time 系数 」定义为烹饪这道菜结束的时间（包含之前每道菜所花费的时间）乘以这道菜的满意程度，也就是 time[i]*satisfaction[i] 。
// 返回厨师在准备了一定数量的菜肴后可以获得的最大 like-time 系数 总和。
// 你可以按 任意 顺序安排做菜的顺序，你也可以选择放弃做某些菜来获得更大的总和。

// 动态规划
// export default function maxSatisfaction(satisfaction: number[]): number {
//   const n = satisfaction.length;
//   const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
//   satisfaction.sort((a, b) => a - b);
//   let res = 0;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       dp[i][j] = dp[i - 1][j - 1] + satisfaction[i - 1] * j;
//       if (j < i) {
//         dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
//       }
//       res = Math.max(res, dp[i][j]);
//     }
//   }
//   return res;
// }

// 贪心
export default function maxSatisfaction(satisfaction: number[]): number {
  satisfaction.sort((a, b) => b - a);
  let presum = 0,
    ans = 0;
  for (let si of satisfaction) {
    if (presum + si > 0) {
      presum += si;
      ans += presum;
    } else {
      break;
    }
  }
  return ans;
}

// 记忆化搜索
// export default function maxSatisfaction(satisfaction: number[]): number {
//   satisfaction.sort((a, b) => a - b);
//   const map = new Map();
//   function dfs(time: number, index: number) {
//     if (index === satisfaction.length) return 0;
//     const key = time + "," + index;
//     if (map.has(key)) return map.get(key);
//     const s1 = dfs(time, index + 1);
//     const s2 = time * satisfaction[index] + dfs(time + 1, index + 1);
//     map.set(key, Math.max(s1, s2));
//     return map.get(key);
//   }
//   return dfs(1, 0);
// }
