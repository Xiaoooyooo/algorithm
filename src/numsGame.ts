// https://leetcode.cn/problems/5TxKeK/description/
// 小扣在秋日市集入口处发现了一个数字游戏。主办方共有 N 个计数器，计数器编号为 0 ~ N-1。
// 每个计数器上分别显示了一个数字，小扣按计数器编号升序将所显示的数字记于数组 nums。
// 每个计数器上有两个按钮，分别可以实现将显示数字加一或减一。小扣每一次操作可以选择一个计数器，按下加一或减一按钮。
// 主办方请小扣回答出一个长度为 N 的数组，
// 第 i 个元素(0 <= i < N)表示将 0~i 号计数器 初始 所示数字操作成满足所有条件 nums[a]+1 == nums[a+1],(0 <= a < i) 的最小操作数。回答正确方可进入秋日市集。
// 由于答案可能很大，请将每个最小操作数对 1,000,000,007 取余。

import MaxHeap from "./堆 - 优先队列/MaxHeap";
import MinHeap from "./堆 - 优先队列/MinHeap";

export default function numsGame(nums: number[]): number[] {
  const n: number = nums.length;
  const res = new Array(n).fill(0);
  const lower = new MaxHeap();
  const upper = new MinHeap();
  const mod: number = 1e9 + 7;
  let lowerSum = 0,
    upperSum = 0;
  for (let i = 0; i < n; i++) {
    const x = nums[i] - i;
    if (lower.size() == 0 || lower.getMax() >= x) {
      lowerSum += x;
      lower.add(x);
      if (lower.size() > upper.size() + 1) {
        upperSum += lower.getMax();
        upper.push(lower.getMax());
        lowerSum -= lower.getMax();
        lower.deleteMax();
      }
    } else {
      upperSum += x;
      upper.push(x);
      if (lower.size() < upper.size()) {
        lowerSum += upper.peek();
        lower.add(upper.peek());
        upperSum -= upper.peek();
        upper.pop();
      }
    }
    if ((i + 1) % 2 == 0) {
      res[i] = (upperSum - lowerSum) % mod;
    } else {
      res[i] = (upperSum - lowerSum + lower.getMax()) % mod;
    }
  }
  return res;
}
