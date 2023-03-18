// 链接：https://leetcode.cn/problems/longest-subsequence-with-limited-sum
// 给你一个长度为 n 的整数数组 nums ，和一个长度为 m 的整数数组 queries 。
// 返回一个长度为 m 的数组 answer ，
// 其中 answer[i] 是 nums 中 元素之和小于等于 queries[i] 的 子序列 的 最大 长度  。
// 子序列 是由一个数组删除某些元素（也可以不删除）但不改变剩余元素顺序得到的一个数组。

// 排序
export default function answerQueries(
  nums: number[],
  queries: number[]
): number[] {
  const n = nums.length,
    m = queries.length;
  const res = Array(m).fill(0);
  nums = nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    for (let j = 0; j < m; j++) {
      if (sum <= queries[j]) {
        res[j] += 1;
      }
    }
  }
  return res;
}

// 回溯 超时
// export default function answerQueries(
//   nums: number[],
//   queries: number[]
// ): number[] {
//   const n = nums.length,
//     m = queries.length;
//   const res = Array(m).fill(0);
//   const helper = function (len: number, sum: number, _n: number, _m: number) {
//     if (_n === n) {
//       res[_m] = Math.max(res[_m], len);
//       return;
//     }
//     if (sum >= nums[_n]) {
//       helper(len + 1, sum - nums[_n], _n + 1, _m);
//     }
//     helper(len, sum, _n + 1, _m);
//   };
//   for (let i = 0; i < m; i++) {
//     helper(0, queries[i], 0, i);
//   }
//   return res;
// }
