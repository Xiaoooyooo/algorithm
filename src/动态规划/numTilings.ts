// https://leetcode.cn/problems/domino-and-tromino-tiling/description/
// 有两种形状的瓷砖：一种是 2 x 1 的多米诺形，另一种是形如 "L" 的托米诺形。两种形状都可以旋转。
// 给定整数 n ，返回可以平铺 2 x n 的面板的方法的数量。返回对 109 + 7 取模 的值。
// 平铺指的是每个正方形都必须有瓷砖覆盖。两个平铺不同，当且仅当面板上有四个方向上的相邻单元中的两个，使得恰好有一个平铺有一个瓷砖占据两个正方形。

export default function numTilings(n: number): number {
  const mod = 1e9 + 7;
  // dp[i] = [第 i 列上下两格都没填充，第 i 列仅填充了上面的格子，第 i 列仅填充了下面的格子，第 i 列上下两个格子都填充了]
  const dp = new Array(n + 1).fill(0).map(() => new Array(4).fill(0));
  dp[0][3] = 1;
  for (let i = 1; i <= n; i++) {
    dp[i][0] = dp[i - 1][3];
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % mod;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % mod;
    dp[i][3] =
      (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3]) % mod;
  }
  console.log(dp);
  return dp[n][3];
}
