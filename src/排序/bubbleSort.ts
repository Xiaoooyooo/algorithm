/**
 * 将大的数冒泡到数组末尾
 * 时间复杂度 O(n^2)
 */
export default function bubbleSort(nums: number[]) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}
