// 链接：https://leetcode.cn/problems/make-array-zero-by-subtracting-equal-amounts
// 给你一个非负整数数组 nums 。在一步操作中，你必须：

// 选出一个正整数 x ，x 需要小于或等于 nums 中 最小 的 非零 元素。
// nums 中的每个正整数都减去 x。
// 返回使 nums 中所有元素都等于 0 需要的 最少 操作数。

// 哈希表、集合
export default function minimumOperations(nums: number[]): number {
  // const map = new Map();
  const set = new Set();
  for (let i = 0, len = nums.length; i < len; i++) {
    // if (nums[i] !== 0 && !Map.has(nums[i])) {
    if (nums[i] !== 0 && !set.has(nums[i])) {
      // map.set(nums[i], true);
      set.add(nums[i]);
    }
  }
  // return map.size;
  return set.size;
}

// 快速排序 & 遍历
// export default function minimumOperations(nums: number[]): number {
//   const len = nums.length;
//   nums = quickSort(nums);
//   let t = 0,
//     curr = 0;
//   for (let i = 0; i < len; i++) {
//     if (nums[i] === 0) continue;
//     if (nums[i] !== curr) {
//       t++;
//       curr = nums[i];
//     }
//   }
//   return t;
// }

// function quickSort(nums: number[], start = 0, end = nums.length - 1) {
//   if (start >= end) return nums;
//   const p = partition(nums, start, end);
//   quickSort(nums, start, p - 1);
//   quickSort(nums, p + 1, end);
//   return nums;
// }

// function partition(nums: number[], start: number, end: number) {
//   const p = start;
//   let t = start; // 小于基准数的结束区间
//   for (let i = start + 1; i <= end; i++) {
//     if (nums[p] > nums[i]) {
//       t += 1;
//       [nums[i], nums[t]] = [nums[t], nums[i]];
//     }
//   }
//   if (t !== p) {
//     [nums[p], nums[t]] = [nums[t], nums[p]];
//   }
//   return t;
// }
