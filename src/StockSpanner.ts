// https://leetcode.cn/problems/online-stock-span/
// 设计一个算法收集某些股票的每日报价，并返回该股票当日价格的 跨度 。
// 当日股票价格的 跨度 被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。
// 例如，如果未来 7 天股票的价格是 [100,80,60,70,60,75,85]，那么股票跨度将是 [1,1,1,2,1,4,6] 。
// 实现 StockSpanner 类：
// StockSpanner() 初始化类对象。
// int next(int price) 给出今天的股价 price ，返回该股票当日价格的 跨度 。

// 官方题解 单调栈
export default class StockSpanner {
  stack: number[][] = [];
  idx = -1;
  constructor() {
    this.stack.push([-1, Number.MAX_VALUE]);
  }

  next(price: number): number {
    this.idx++;
    while (price >= this.stack[this.stack.length - 1][1]) {
      this.stack.pop();
    }
    let ret = this.idx - this.stack[this.stack.length - 1][0];
    this.stack.push([this.idx, price]);
    return ret;
  }
}

// export default class StockSpanner {
//   prices: number[] = [];
//   spanner: number[] = [];
//   size = -1;
//   constructor() {}

//   next(price: number): number {
//     let s = 1;
//     let i = this.size;
//     while (i >= 0 && this.prices[i] <= price) {
//       s++;
//       i--;
//     }
//     this.size++;
//     this.prices.push(price);
//     this.spanner.push(s);
//     return s;
//   }
// }
