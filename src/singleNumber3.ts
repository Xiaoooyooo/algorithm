// https://leetcode.cn/problems/single-number-iii/
// 给你一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。
// 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。
// 你必须设计并实现线性时间复杂度的算法且仅使用常量额外空间来解决此问题。

// 官方题解 位运算
export default function singleNumber3(nums: number[]): number[] {
  let xorsum = 0;

  for (const num of nums) {
    xorsum ^= num;
  }
  let type1 = 0,
    type2 = 0;
  const lsb = xorsum & -xorsum;
  for (const num of nums) {
    if (num & lsb) {
      type1 ^= num;
    } else {
      type2 ^= num;
    }
  }
  return [type1, type2];
}
