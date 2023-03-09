// 链接：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array
// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。
// 请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

export default function searchRange(nums: number[], target: number): number[] {
  function getRightBorder(nums: number[], target: number) {
    let left = 0;
    let right = nums.length - 1; // 定义target在左闭右闭的区间里，[left, right]
    let rightBorder = -2; // 记录一下rightBorder没有被赋值的情况
    while (left <= right) {
      // 当left==right，区间[left, right]依然有效
      const middle = Math.floor((right + left) / 2); // 防止溢出 等同于(left + right)/2
      if (nums[middle] > target) {
        right = middle - 1; // target 在左区间，所以[left, middle - 1]
      } else {
        // 当nums[middle] == target的时候，更新left，这样才能得到target的右边界
        left = middle + 1;
        rightBorder = left;
      }
    }
    return rightBorder;
  }
  function getLeftBorder(nums: number[], target: number) {
    let left = 0;
    let right = nums.length - 1; // 定义target在左闭右闭的区间里，[left, right]
    let leftBorder = -2; // 记录一下leftBorder没有被赋值的情况
    while (left <= right) {
      const middle = Math.floor((right + left) / 2);
      if (nums[middle] >= target) {
        // 寻找左边界，就要在nums[middle] == target的时候更新right
        right = middle - 1;
        leftBorder = right;
      } else {
        left = middle + 1;
      }
    }
    return leftBorder;
  }
  const leftBorder = getLeftBorder(nums, target);
  const rightBorder = getRightBorder(nums, target);
  // console.log(leftBorder, rightBorder);
  // 情况一
  if (leftBorder == -2 || rightBorder == -2) return [-1, -1];
  // 情况三
  if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
  // 情况二
  return [-1, -1];
}

// export default function searchRange(nums: number[], target: number): number[] {
//   const len = nums.length;
//   if (target < nums[0] || target > nums[len - 1]) return [-1, -1];
//   let i = 0,
//     j = len - 1;
//   let left = 0;
//   while (i < j) {
//     const m = Math.floor((i + j) / 2);
//     if (nums[m] > target) {
//       j = m - 1;
//     } else if (nums[m] < target) {
//       i = m + 1;
//     } else {
//       j = m;
//     }
//   }
//   left = i;
//   let right = len - 1;
//   i = 0;
//   j = len - 1;
//   while (i < j) {
//     const m = Math.ceil((i + j) / 2);
//     if (nums[m] > target) {
//       j = m - 1;
//     } else if (nums[m] < target) {
//       i = m + 1;
//     } else {
//       i = m;
//     }
//   }
//   right = j;
//   if (nums[left] === target && nums[right] === target) {
//     return [left, right];
//   }
//   return [-1, -1];
// }

// 二分法 + 递归
// export default function searchRange(nums: number[], target: number): number[] {
//   if (nums.length === 0) return [-1, -1];
//   const find = function (flag: boolean, i = 0, j = nums.length - 1) {
//     if (i >= j) return i;
//     let m: number;
//     if (flag) {
//       m = Math.floor((i + j) / 2);
//     } else {
//       m = Math.ceil((i + j) / 2);
//     }
//     if (nums[m] < target) {
//       return find(flag, m + 1, j);
//     } else if (nums[m] > target) {
//       return find(flag, i, m - 1);
//     } else {
//       if (flag) {
//         return find(flag, i, m);
//       } else {
//         return find(flag, m, j);
//       }
//     }
//   };
//   const left = find(true);
//   const right = find(false);
//   if (nums[left] !== target) {
//     return [-1, -1];
//   }
//   return [left, right];
// }
