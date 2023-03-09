// https://leetcode.cn/problems/first-unique-character-in-a-string
// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

export default function firstUniqChar(s: string) {
  const charMap = new Map<string, number[]>();
  for (let i = 0, len = s.length; i < len; i++) {
    if (!charMap.has(s[i])) {
      charMap.set(s[i], [i]);
    } else {
      charMap.get(s[i]).push(i);
    }
  }
  const entries = [...charMap.entries()];
  for (let j = 0, len = entries.length; j < len; j++) {
    const [, indexes] = entries[j];
    if (indexes.length === 1) return indexes[0];
  }
  return -1;
}
