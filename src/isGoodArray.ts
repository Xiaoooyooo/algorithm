// 链接：https://leetcode.cn/problems/check-if-it-is-a-good-array

// 给你一个正整数数组 nums，你需要从中任选一些子集，
// 然后将子集中每一个数乘以一个 任意整数，并求出他们的和。
// 假如该和结果为 1，那么原数组就是一个「好数组」，则返回 True；
// 否则请返回 False。
// 1 <= nums.length <= 10^5
// 1 <= nums[i] <= 10^9

// todo
export default function isGoodArray(nums: number[]) {
  if (nums.length > 1 && nums.indexOf(1) > -1) return true;
}
