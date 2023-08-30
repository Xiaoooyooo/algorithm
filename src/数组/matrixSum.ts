// 链接：https://leetcode.cn/problems/sum-in-a-matrix
// 给你一个下标从 0 开始的二维整数数组 nums 。一开始你的分数为 0 。你需要执行以下操作直到矩阵变为空：

// 矩阵中每一行选取最大的一个数，并删除它。如果一行中有多个最大的数，选择任意一个并删除。
// 在步骤 1 删除的所有数字中找到最大的一个数字，将它添加到你的 分数 中。
// 请你返回最后的 分数 。

export default function matrixSum(nums: number[][]): number {
  const row = nums.length,
    col = nums[0].length;
  for (let i =  0; i < row; i++) {
    nums[i] = nums[i].sort((a, b) => b - a);
  }
  let res = 0;
  let j = 0;
  while (j < col) {
    let k = 0, max = 0;
    while (k < row) {
      if (nums[k][j] > max) max = nums[k][j];
      k++;
    }
    j++;
    res += max;
  }
  return res;
}
