// https://leetcode.cn/problems/maximal-score-after-applying-k-operations/
// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。你的 起始分数 为 0 。
// 在一步 操作 中：
// 选出一个满足 0 <= i < nums.length 的下标 i ，
// 将你的 分数 增加 nums[i] ，并且
// 将 nums[i] 替换为 ceil(nums[i] / 3) 。
// 返回在 恰好 执行 k 次操作后，你可能获得的最大分数。
// 向上取整函数 ceil(val) 的结果是大于或等于 val 的最小整数。

import MaxHeap from "./MaxHeap";

export default function maxKelements(nums: number[], k: number): number {
  const heap = new MaxHeap();
  for (let num of nums) {
    heap.add(num);
  }
  let res = 0;
  while (k !== 0) {
    const curr = heap.deleteMax();
    res += curr;
    heap.add(Math.ceil(curr / 3));
    k--;
  }
  return res;
}
