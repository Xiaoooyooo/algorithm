// https://leetcode.cn/problems/single-number-ii/description/
// 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
// 你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。
// *

// 官方题解1 依次确定每一个二进制位 O(n * logC), C 是元素的数据范围
// export default function singleNumber(nums: number[]): number {
//   let ans = 0;
//   for (let i = 0; i < 32; ++i) {
//     let total = 0;
//     for (const num of nums) {
//       total += (num >> i) & 1;
//     }
//     if (total % 3 != 0) {
//       ans |= 1 << i;
//     }
//   }
//   return ans;
// }

// 官方题解2 数字电路设计 O(n)
// export default function singleNumber(nums: number[]): number {
//   let a = 0,
//     b = 0;
//   for (const num of nums) {
//     const aNext = (~a & b & num) | (a & ~b & ~num),
//       bNext = ~a & (b ^ num);
//     a = aNext;
//     b = bNext;
//   }
//   return b;
// }

// 官方题解3 数字电路设计优化 O(n)
export default function singleNumber(nums: number[]): number {
  let a = 0,
    b = 0;
  for (const num of nums) {
    b = ~a & (b ^ num);
    a = ~b & (a ^ num);
  }
  return b;
}
