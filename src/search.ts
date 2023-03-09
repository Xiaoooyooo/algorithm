// 链接：https://leetcode.cn/problems/search-in-rotated-sorted-array
// 整数数组 nums 按升序排列，数组中的值 互不相同 。
// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
// 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
// 例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

// 二分法优化
export default function search(nums: number[], target: number): number {
  const len = nums.length;
  let i = 0,
    j = len - 1;
  while (i <= j) {
    const m = Math.floor((i + j) / 2);
    if (nums[m] === target) return m;
    if (nums[0] <= nums[m]) {
      // 如果 m 左边的序列为递增序列
      if (nums[0] <= target && target < nums[m]) {
        // 并且 target 处于这个区间内
        j = m - 1;
      } else {
        i = m + 1;
      }
    } else {
      // m 右边的序列的递增序列
      if (nums[m] < target && target <= nums[len - 1]) {
        // 并且 target 处于这个区间内
        i = m + 1;
      } else {
        j = m - 1;
      }
    }
  }
  return -1;
}

// 二分法
// export default function search(nums: number[], target: number): number {
//   const len = nums.length;
//   let i = 0,
//     j = len - 1;
//   while (i <= j) {
//     const m = Math.floor((i + j) / 2); // 向下取整
//     if (nums[m] === target) return m;
//     if (nums[j] < nums[i]) {
//       // 如果 i j 之间不连续递增
//       if (nums[m] >= nums[i] && target >= nums[i]) {
//         // 如果 m 和 target 都处于左边序列
//         if (nums[m] > target) {
//           j = m - 1;
//         } else {
//           i = m + 1;
//         }
//       } else if (nums[m] >= nums[i] && target <= nums[j]) {
//         // 如果 m 处于左边序列，target 处于右边序列
//         i = m + 1;
//       } else if (nums[m] <= nums[j] && target <= nums[j]) {
//         // 如果 m 和 target 都处于右边序列
//         if (nums[m] > target) {
//           j = m - 1;
//         } else {
//           i = m + 1;
//         }
//       } else if (nums[m] <= nums[j] && target >= nums[i]) {
//         // 如果 m 处于右边序列，但 target 处于左边序列
//         j = m - 1;
//       } else if (target < nums[i] && target > nums[j]) {
//         // target 不在范围内
//         break;
//       }
//     } else {
//       if (nums[m] > target) {
//         j = m - 1;
//       } else {
//         i = m + 1;
//       }
//     }
//   }
//   return -1;
// }
