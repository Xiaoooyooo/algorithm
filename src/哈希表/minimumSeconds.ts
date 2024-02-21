// https://leetcode.cn/problems/minimum-seconds-to-equalize-a-circular-array/description/
// 给你一个下标从 0 开始长度为 n 的数组 nums 。
// 每一秒，你可以对数组执行以下操作：
// 对于范围在 [0, n - 1] 内的每一个下标 i ，将 nums[i] 替换成 nums[i] ，nums[(i - 1 + n) % n] 或者 nums[(i + 1) % n] 三者之一。
// 注意，所有元素会被同时替换。
// 请你返回将数组 nums 中所有元素变成相等元素所需要的 最少 秒数。

// 官方题解 哈希表
export default function minimumSeconds(nums: number[]): number {
  const map: Map<number, number[]> = new Map();
  const n = nums.length;
  let res = n;

  // 记录相同数字出现的索引
  for (let i = 0; i < n; ++i) {
    if (!map.has(nums[i])) {
      map.set(nums[i], []);
    }
    map.get(nums[i]).push(i);
  }

  for (const pos of map.values()) {
    // 两侧的不同元素个数
    let mx = pos[0] + n - pos[pos.length - 1];
    for (let i = 1; i < pos.length; ++i) {
      // 中间的不同元素个数
      mx = Math.max(mx, pos[i] - pos[i - 1]);
    }
    res = Math.min(res, Math.floor(mx / 2));
  }
  return res;
}
