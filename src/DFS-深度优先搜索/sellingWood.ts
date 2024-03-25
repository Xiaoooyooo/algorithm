// https://leetcode.cn/problems/selling-pieces-of-wood/description/
// 给你两个整数 m 和 n ，分别表示一块矩形木块的高和宽。同时给你一个二维整数数组 prices ，其中 prices[i] = [hi, wi, pricei] 表示你可以以 pricei 元的价格卖一块高为 hi 宽为 wi 的矩形木块。
// 每一次操作中，你必须按下述方式之一执行切割操作，以得到两块更小的矩形木块：
// 沿垂直方向按高度 完全 切割木块，或
// 沿水平方向按宽度 完全 切割木块
// 在将一块木块切成若干小木块后，你可以根据 prices 卖木块。你可以卖多块同样尺寸的木块。你不需要将所有小木块都卖出去。你 不能 旋转切好后木块的高和宽。
// 请你返回切割一块大小为 m x n 的木块后，能得到的 最多 钱数。
// 注意你可以切割木块任意次。

//* 官方题解：动态规划 + 记忆化搜索
// https://leetcode.cn/problems/selling-pieces-of-wood/solutions/1630619/mai-mu-tou-kuai-by-leetcode-solution-gflg/?envType=daily-question&envId=2024-03-15
export default function sellingWood(
  m: number,
  n: number,
  prices: number[][]
): number {
  const pairHash = (x: number, y: number): number => {
    return (x << 16) ^ y;
  };

  const value: Map<number, number> = new Map();
  const memo: number[][] = [];
  for (let i = 0; i <= m; i++) {
    memo[i] = new Array<number>(n + 1).fill(-1);
  }

  const dfs = (x: number, y: number): number => {
    if (memo[x][y] !== -1) {
      return memo[x][y];
    }

    let ret: number = value.has(pairHash(x, y))
      ? value.get(pairHash(x, y))!
      : 0;
    if (x > 1) {
      for (let i = 1; i < x; i++) {
        ret = Math.max(ret, dfs(i, y) + dfs(x - i, y));
      }
    }
    if (y > 1) {
      for (let j = 1; j < y; j++) {
        ret = Math.max(ret, dfs(x, j) + dfs(x, y - j));
      }
    }
    memo[x][y] = ret;
    return ret;
  };

  for (const price of prices) {
    value.set(pairHash(price[0], price[1]), price[2]);
  }
  return dfs(m, n);
}
