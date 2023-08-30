// 链接：https://leetcode.cn/problems/maximum-product-subarray
// 给你一个整数数组 nums
// 请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），
// 并返回该子数组所对应的乘积。
// 测试用例的答案是一个 32-位 整数。
// 子数组 是数组的连续子序列。

export default function maxProduct(nums: number[]): number {
  const len = nums.length;
  let i = 0, j = 0;
  let res = -Infinity;
  while (i <= j && j < len) {
    let temp = 1;
    for (let _i = i; _i <= j; _i++) {
      temp *= nums[_i];
    }
    if (temp > res) {
      res = temp;
    }
    if (nums[j] === 0) {
      
    }
  }
  return res;
}

// 暴力枚举
// export default function maxProduct(nums: number[]): number {
//   const len = nums.length;
//   let res = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < len; i++) {
//     let temp = 1;
//     for (let j = i; j < len; j++) {
//       temp *= nums[j];
//       res = Math.max(res, temp);
//       if (temp === 0) break;
//     }
//   }
//   return res;
// }
