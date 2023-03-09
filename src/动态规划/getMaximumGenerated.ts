// 链接：https://leetcode.cn/problems/get-maximum-in-generated-array
// 给你一个整数 n 。按下述规则生成一个长度为 n + 1 的数组 nums ：
// nums[0] = 0
// nums[1] = 1
// 当 2 <= 2 * i <= n 时，nums[2 * i] = nums[i]
// 当 2 <= 2 * i + 1 <= n 时，nums[2 * i + 1] = nums[i] + nums[i + 1]
// 返回生成数组 nums 中的 最大 值。

export default function getMaximumGenerated(n: number) {
  if (n === 0) return 0;
  const nums = [0, 1];
  let max = 1;
  let i = 1;
  while (2 * i + 1 <= n) {
    let ii = 2 * i;
    if (2 <= ii && ii <= n) {
      nums[ii] = nums[i];
    }
    if (2 <= ii + 1 && ii + 1 <= n) {
      nums[ii + 1] = nums[i] + nums[i + 1];
    }
    max = Math.max(max, nums[ii], nums[ii + 1]);
    i++;
  }
  return max;
}
