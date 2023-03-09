// https://leetcode.cn/problems/first-missing-positive/?company_slug=bytedance

// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

// 方法1：置换
// 遍历数组中的每个数，检查这个数是否与它的索引序号对应（数组的第 0 位应该为 1，第 1 位应该为 2，...）
// 如果不对应，则将该数放置到与它对应的需要的位置，前提是这个数的值满足条件 (0 < n < len)
// 放置的操作为：将该数与目标位置的数交换位置，对交换过来的数重复以上操作，直到：
//   该数不满足上面提到的条件
//   此时的位置正是该数的应该处于的位置
//   该数应该处于的位置已经被一个同样的数占了
// export default function firstMissingPositive(nums: number[]) {
//   const len = nums.length;
//   let i = 0;
//   while (i < len) {
//     const n = nums[i];
//     if (n === i + 1) {
//       // 该数位于正确的位置
//       i++;
//       continue;
//     }
//     if (n <= 0 || n >= len) {
//       // 该数不在条件的范围内
//       i++;
//       continue;
//     }
//     if (nums[n - 1] !== n) {
//       // 该数应该处于的位置上已存在一个相同的数
//       [nums[n - 1], nums[i]] = [n, nums[n - 1]];
//     } else {
//       i++;
//     }
//   }
//   let j: number;
//   for (j = 0; j < len; j++) {
//     if (nums[j] !== j + 1) return j + 1;
//   }
//   return j + 1;
// }

// 方法2：哈希表
// 仔细想一想，我们为什么要使用哈希表？这是因为哈希表是一个可以支持快速查找的数据结构：
// 给定一个元素，我们可以在 O(1) 的时间查找该元素是否在哈希表中。
// 因此，我们可以考虑将给定的数组设计成哈希表的「替代产品」。
// 对于给定的长度为 N 的数组，我们要查找的目标数 n 一定满足条件：1 <= n <= n+1
// 因为如果数组中从 1 到 n 的数全部都出现了，那么结果一定是 n + 1
// 算法流程：
//  第一步：遍历数组并改造原数组，将小于等于 0 的数全部改为 n + 1
//  第二步：遍历数组，将小于等于 n 的数对应的 nums[n] 乘以 -1，做个标记
//  第三步：遍历数组，返回第一个大于 0 的数据的索引序号 + 1，如果没有则返回 n + 1
export default function firstMissingPositive(nums: number[]) {
  const len = nums.length;
  // 改造数组
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0) nums[i] = len + 1;
  }
  // 标记小于等于 len 的数
  for (let j = 0; j < len; j++) {
    const abs = Math.abs(nums[j]);
    if (abs <= len && nums[abs - 1] > 0) {
      nums[abs - 1] *= -1;
    }
  }
  // 查找第一个大于 0 的数，返回它的索引序号 + 1
  let k = 0;
  while (k < len) {
    if (nums[k] > 0) return k + 1;
    k++;
  }
  return k + 1;
}
