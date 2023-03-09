// 链接：https://leetcode.cn/problems/next-permutation
// 整数数组的一个 排列 就是将其所有成员以序列或线性顺序排列。
// 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
// 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。
// 更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，
// 那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。
// 如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
// 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
// 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
// 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
// 给你一个整数数组 nums ，找出 nums 的下一个排列。
// 必须 原地 修改，只允许使用额外常数空间。

export default function nextPermutation(nums: number[]): void {
  const len = nums.length;
  if (len === 1) return;
  let i: number;
  // 一个排列的最后一部分一定是降序的
  // 因此只需要从最后面开始找到第一个不是降序的元素
  for (i = len; i > 0; i--) {
    if (nums[i - 1] < nums[i]) break;
  }
  // 记下该非降序元素的序号
  const temp = i - 1;
  // 将后面的降序序列重新按升序顺序排列
  for (; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  // 如果之前找到了非降序序列的元素
  // 那么将这个元素与它后面的重新排列好的序列中的第一个比它大的元素交换位置
  if (temp !== -1) {
    for (i = temp + 1; i < len; i++) {
      if (nums[i] > nums[temp]) {
        [nums[i], nums[temp]] = [nums[temp], nums[i]];
        break;
      }
    }
  }
}
