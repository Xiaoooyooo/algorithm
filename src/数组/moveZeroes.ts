// https://leetcode.cn/problems/move-zeroes/
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

export default function moveZeroes(nums: number[]): void {
  const len = nums.length;
  let i = 0,
    j = 0;
  while (i < len) {
    if (nums[i] !== 0) {
      if (nums[j] === 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      j++;
    }
    i++;
  }
}

// 双指针
// export default function moveZeroes(nums: number[]): void {
//   const len = nums.length;
//   let i = 0,
//     j = 0;
//   while (i < len) {
//     if (nums[i] !== 0) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       j++;
//     }
//     i++;
//   }
// }

// export default function moveZeroes(nums: number[]): void {
//   const len = nums.length;
//   let i = 0,
//     j = len - 1;
//   while (i < j) {
//     if (nums[j] === 0) {
//       j--;
//       continue;
//     }
//     if (nums[i] !== 0) {
//       i++;
//       continue;
//     }
//     for (let k = i; k < j; k++) {
//       [nums[k], nums[k + 1]] = [nums[k + 1], nums[k]];
//     }
//     j--;
//   }
// }

// 冒泡
// export default function moveZeroes(nums: number[]): void {
//   const len = nums.length;
//   for (let i = len - 1; i >= 0; i--) {
//     if (nums[i] === 0) continue;
//     for (let j = 0; j < i; j++) {
//       if (nums[j] === 0) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//       }
//     }
//   }
// }
