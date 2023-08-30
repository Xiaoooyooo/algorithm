// 链接：https://leetcode.cn/leetbook/read/queue-stack/kfgtt/
// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。
// 例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

// 队列 + 广度优先搜索
// export default function numSquares(n: number): number {
//   let deep = 1;
//   const queue = [0];
//   const used = new Set();
//   while (queue.length !== 0) {
//     const len = queue.length;
//     for (let i = 0; i < len; i++) {
//       const prev = queue.shift();
//       let j = 1,
//         curr = prev + j * j;
//       while (curr <= n) {
//         if (curr === n) return deep;
//         if (!used.has(curr)) {
//           // curr 为当前已累积的平方数之和，这个数可以有好几种数字组合，只记录一次即可
//           used.add(curr);
//           queue.push(curr);
//         }
//         j++;
//         curr = prev + j * j;
//       }
//     }
//     deep++;
//   }
// }

// 动态规划
export default function numSquares(n: number): number {
  let dp: number[] = [];
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    dp[i] = i;
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
}

// export default function numSquares(n: number): number {
//   let res = n;
//   function bfs(n: number, count: number) {
//     if (count >= res) return;
//     if (n === 0) {
//       res = Math.min(res, count);
//       return;
//     }
//     const sqrtn = Math.floor(Math.sqrt(n));
//     let i = 0;
//     while (sqrtn - i !== 0) {
//       bfs(n - (sqrtn - i) * (sqrtn - i), count + 1);
//       i++;
//     }
//   }
//   bfs(n, 0);
//   return res;
// }
