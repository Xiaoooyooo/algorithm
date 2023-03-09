/**
 * 在未排序序列中选出一个最大的数，插入到已排序序列的头部
 * 时间复杂度 O(n^2)
 */
export default function selectSort(nums: number[]) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let maxIndex = 0;
    for (let j = 0; j < len - i; j++) {
      if (nums[j] > nums[maxIndex]) maxIndex = j;
    }
    [nums[len - i - 1], nums[maxIndex]] = [nums[maxIndex], nums[len - i - 1]];
  }
  return nums;
}

// export default function selectSort(nums: number[]) {
//   const len = nums.length;
//   for (let i = len - 1; i >= 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] < nums[j]) {
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//       }
//     }
//   }
//   return nums;
// }
