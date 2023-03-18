// https://leetcode.cn/problems/longest-substring-without-repeating-characters/
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

export default function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  const map = new Map();
  let start = 0,
    res = 0;
  for (let i = 0; i < len; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i);
    } else {
      res = Math.max(res, i - start);
      const _i = map.get(s[i]);
      start = Math.max(_i + 1, start);
      map.set(s[i], i);
    }
    if (i === len - 1) {
      return Math.max(res, len - start);
    }
  }
  return res;
}
