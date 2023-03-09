/**
 * 平均时间复杂度 O(n*logn)，顺序数组最差 O(n^2)
 */
export default function quickSort(
  nums: number[],
  left = 0,
  right = nums.length - 1
) {
  if (left >= right) return nums;
  const p = partition(nums, left, right);
  quickSort(nums, left, p - 1);
  quickSort(nums, p + 1, right);
  return nums;
}

// 分区函数：以一个数为基准，将小于它的数都移动到右边，大于它的数都移到左边
function partition(nums: number[], start: number, end: number) {
  let p = start, // 选择的基准数的索引
    low = p; // 记录的小于基准数的部分的索引结束位置
  for (let i = p + 1; i <= end; i++) {
    if (nums[i] < nums[p]) {
      low += 1;
      [nums[low], nums[i]] = [nums[i], nums[low]];
    }
  }
  if (p !== low) {
    [nums[p], nums[low]] = [nums[low], nums[p]];
    p = low;
  }
  return p;
}
