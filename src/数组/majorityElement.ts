// 链接：https://leetcode.cn/problems/majority-element
// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。
// 多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
// Boyer-Moore 投票算法
export default function majorityElement(nums: number[]): number {
  const len = nums.length;
  let count = 0,
    t = undefined;
  for (let i = 0; i < len; i++) {
    if (t === undefined) {
      t = nums[i];
      count++;
    } else if (t === nums[i]) {
      count++;
    } else {
      count--;
      if (count === -1) {
        t = nums[i];
        count = 1;
      }
    }
  }
  return t;
}

// 哈希表
// export default function majorityElement(nums: number[]): number {
//   const len = nums.length;
//   const map = new Map();
//   let max: number;
//   for (let i = 0; i < len; i++) {
//     let t: number;
//     if (map.has(nums[i])) {
//       t = map.get(nums[i]) + 1;
//     } else {
//       t = 1;
//     }
//     map.set(nums[i], t);
//     if (max === undefined) {
//       max = i;
//     } else {
//       max = t > map.get(nums[max]) ? i : max;
//     }
//   }
//   return nums[max];
// }
