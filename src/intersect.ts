// 链接：https://leetcode.cn/problems/intersection-of-two-arrays-ii
// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
// 返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。
// 可以不考虑输出结果的顺序。

export default function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  for (let i = 0, len1 = nums1.length; i < len1; i++) {
    if (!map.has(nums1[i])) {
      map.set(nums1[i], 1);
    } else {
      map.set(nums1[i], map.get(nums1[i]) + 1);
    }
  }
  const res = [];
  for (let j = 0, len2 = nums2.length; j < len2; j++) {
    if (!map.has(nums2[j])) continue;
    let times = map.get(nums2[j]);
    res.push(nums2[j]);
    if (times === 1) map.delete(nums2[j]);
    else map.set(nums2[j], --times);
  }
  return res;
}
