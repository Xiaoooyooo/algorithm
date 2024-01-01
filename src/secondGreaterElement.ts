// https://leetcode.cn/problems/next-greater-element-iv/
// 给你一个下标从 0 开始的非负整数数组 nums 。对于 nums 中每一个整数，你必须找到对应元素的 第二大 整数。
// 如果 nums[j] 满足以下条件，那么我们称它为 nums[i] 的 第二大 整数：
//   j > i
//   nums[j] > nums[i]
//   恰好存在 一个 k 满足 i < k < j 且 nums[k] > nums[i] 。
// 如果不存在 nums[j] ，那么第二大整数为 -1 。
// 比方说，数组 [1, 2, 4, 3] 中，1 的第二大整数是 4 ，2 的第二大整数是 3 ，3 和 4 的第二大整数是 -1 。
// 请你返回一个整数数组 answer ，其中 answer[i]是 nums[i] 的第二大整数。

// 官方题解 双单调栈
export default function secondGreaterElement(nums: number[]): number[] {
  const n = nums.length;
  const res = new Array(n).fill(-1);
  const st1 = [],
    st2 = [];

  for (let i = 0; i < n; i++) {
    const v = nums[i];
    while (st2.length > 0 && nums[st2[st2.length - 1]] < v) {
      res[st2[st2.length - 1]] = v;
      st2.pop();
    }
    let pos = st1.length - 1;
    while (pos >= 0 && nums[st1[pos]] < v) {
      pos--;
    }
    st2.push(...st1.slice(pos + 1, st1.length));
    st1.splice(pos + 1);
    st1.push(i);
  }
  return res;
}
