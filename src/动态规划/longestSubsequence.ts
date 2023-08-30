// https://leetcode.cn/problems/longest-arithmetic-subsequence-of-given-difference/description/
// 给你一个整数数组 arr 和一个整数 difference，
// 请你找出并返回 arr 中最长等差子序列的长度，该子序列中相邻元素之间的差等于 difference 。
// 子序列 是指在不改变其余元素顺序的情况下，通过删除一些元素或不删除任何元素而从 arr 派生出来的序列。

// 哈希表
export default function longestSubsequence(
  arr: number[],
  difference: number
): number {
  const len = arr.length;
  const map = new Map();
  let max = 1;
  for (let i = 0; i < len; i++) {
    let temp = 1;
    if (!map.has(arr[i] - difference)) {
      map.set(arr[i], 1);
    } else {
      temp = map.get(arr[i] - difference) + 1;
      max = Math.max(max, temp);
      map.set(arr[i], temp);
    }
  }
  return max;
}
