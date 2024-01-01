// https://leetcode.cn/problems/maximum-earnings-from-taxi/
// 你驾驶出租车行驶在一条有 n 个地点的路上。这 n 个地点从近到远编号为 1 到 n ，你想要从 1 开到 n ，通过接乘客订单盈利。你只能沿着编号递增的方向前进，不能改变方向。
// 乘客信息用一个下标从 0 开始的二维数组 rides 表示，其中 rides[i] = [starti, endi, tipi] 表示第 i 位乘客需要从地点 starti 前往 endi ，愿意支付 tipi 元的小费。
// 每一位 你选择接单的乘客 i ，你可以 盈利 endi - starti + tipi 元。你同时 最多 只能接一个订单。
// 给你 n 和 rides ，请你返回在最优接单方案下，你能盈利 最多 多少元。
// 注意：你可以在一个地点放下一位乘客，并在同一个地点接上另一位乘客。

// 动态规划 + 二分查找
export default function maxTaxiEarnings(n: number, rides: number[][]): number {
  rides.sort((a, b) => a[1] - b[1]);
  const m = rides.length;
  const dp = new Array(m + 1).fill(0);
  for (let i = 0; i < m; i++) {
    let l = 0,
      r = i;
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2);
      if (rides[mid][1] > rides[i][0]) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }

    const earn = rides[i][1] - rides[i][0] + rides[i][2];
    dp[i + 1] = Math.max(dp[i], dp[l] + earn);
  }
  return dp[m];
}

// 动态规划 + 哈希表
// export default function maxTaxiEarnings(n: number, rides: number[][]): number {
//   const dp = new Array(n + 1).fill(0);
//   const rideMap = new Map();
//   for (const ride of rides) {
//     if (rideMap.has(ride[1])) {
//       rideMap.set(ride[1], [...rideMap.get(ride[1]), ride]);
//     } else {
//       rideMap.set(ride[1], [ride]);
//     }
//   }
//   for (let i = 1; i <= n; i++) {
//     dp[i] = dp[i - 1];
//     if (rideMap.has(i)) {
//       for (const ride of rideMap.get(i)) {
//         dp[i] = Math.max(dp[i], dp[ride[0]] + ride[1] - ride[0] + ride[2]);
//       }
//     }
//   }
//   return dp[n];
// }
