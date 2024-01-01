// https://leetcode.cn/problems/remove-stones-to-minimize-the-total/description/
// 给你一个整数数组 piles ，数组 下标从 0 开始 ，其中 piles[i] 表示第 i 堆石子中的石子数量。
// 另给你一个整数 k ，请你执行下述操作 恰好 k 次：
// 选出任一石子堆 piles[i] ，并从中 移除 floor(piles[i] / 2) 颗石子。
// 注意：你可以对 同一堆 石子多次执行此操作。
// 返回执行 k 次操作后，剩下石子的 最小 总数。
// floor(x) 为 小于 或 等于 x 的 最大 整数。（即，对 x 向下取整）。

import MaxHeap from "./MaxHeap";

export default function minStoneSum(piles: number[], k: number): number {
  const heap = new MaxHeap();
  let total = 0;
  for (const num of piles) {
    heap.add(num);
    total += num;
  }
  while (k-- > 0) {
    const max = heap.deleteMax();
    const t = Math.floor(max / 2);
    total -= t;
    heap.add(max - t);
  }
  return total;
}
