// https://leetcode.cn/problems/two-sum
// 给定一个整数数组 nums 和一个整数目标值 target。
// 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

// 哈希表
export default function twoSum(nums: number[], target: number) {
  const map = new Map<number, number[]>(),
    len = nums.length;
  for (let i = 0; i < len; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], [i]);
    } else {
      map.get(nums[i]).push(i);
    }
  }
  for (let j = 0; j < len; j++) {
    const another = target - nums[j];
    const _another = map.get(another);
    if (!_another) continue;
    if (another === nums[j]) {
      if (_another.length === 1) continue;
      else return [j, _another[1]];
    } else {
      return [j, _another[0]];
    }
  }
  return [];
}
