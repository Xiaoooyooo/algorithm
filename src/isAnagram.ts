// 链接：https://leetcode.cn/problems/valid-anagram
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

export default function isAnagram(s: string, t: string) {
  const len1 = s.length,
    len2 = t.length;
  if (len1 !== len2) return false;
  const map = new Map<string, number>();
  for (let i = 0; i < len1; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  for (let i = 0; i < len2; i++) {
    if (!map.has(t[i])) return false;
    const times = map.get(t[i]);
    if (times === 0) return false;
    map.set(t[i], times - 1);
  }
  return true;
}
