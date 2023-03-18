// 链接：https://leetcode.cn/problems/sort-colors
// 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，
// 使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
// 必须在不使用库内置的 sort 函数的情况下解决这个问题。
// 你能想出一个仅使用常数空间的一趟扫描算法吗？

export default function sortColors(nums: number[]): void {
  const len = nums.length;
  let red = 0, // 红色结尾指针
    white = 0; // 白色结尾指针
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      // 如果当前色是红色，将该色冒泡到红色结尾处
      [nums[i], nums[white]] = [nums[white], nums[i]];
      [nums[white], nums[red]] = [nums[red], nums[white]];
      // 红色和白色结尾指针 + 1
      white += 1;
      red += 1;
    } else if (nums[i] === 1) {
      // 如果当前色是白色，将该色冒泡到白色结尾处
      [nums[i], nums[white]] = [nums[white], nums[i]];
      // 白色结尾指针 + 1
      white += 1;
    }
  }
}
