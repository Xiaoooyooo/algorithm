/**
 * 时间复杂度 O(n^2)
 * 假定初始数组的最后一个数处于已排序序列的正确位置
 * 将未排序序列的最后一个数，插入到已排序序列的合适位置
 */
export default function insertSort(nums: number[]) {
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = len - i - 2; j < len - 1; j++) {
      if (nums[j] < nums[j + 1]) break;
      [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
  }
  return nums;
}


// 假定初始数组的第一个数处于已排序序列的正确位置
// todo