// https://leetcode.cn/problems/determine-if-two-strings-are-close/
// 如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 接近 ：
// 操作 1：交换任意两个 现有 字符。
// 例如，abcde -> aecdb
// 操作 2：将一个 现有 字符的每次出现转换为另一个 现有 字符，并对另一个字符执行相同的操作。
// 例如，aacabb -> bbcbaa（所有 a 转化为 b ，而所有的 b 转换为 a ）
// 你可以根据需要对任意一个字符串多次使用这两种操作。
// 给你两个字符串，word1 和 word2 。如果 word1 和 word2 接近 ，就返回 true ；否则，返回 false 。

export default function closeStrings(word1: string, word2: string): boolean {
  if (word1 === word2) {
    return true;
  }
  const len1 = word1.length,
    len2 = word2.length;
  if (len1 !== len2) {
    return false;
  }
  const arr1 = Array(26).fill(0),
    arr2 = Array(26).fill(0);
  const aCode = "a".charCodeAt(0);
  for (let i = 0; i < len1; i++) {
    arr1[word1.charCodeAt(i) - aCode]++;
    arr2[word2.charCodeAt(i) - aCode]++;
  }
  for (let i = 0; i < 26; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    }
    if (arr1[i] === 0 || arr2[i] === 0) {
      return false;
    }
    let t = i + 1;
    while (t < 26 && arr1[t] !== arr2[i]) {
      t++;
    }
    if (arr1[t] !== arr2[i]) {
      return false;
    }
    [arr1[i], arr1[t]] = [arr1[t], arr1[i]];
  }
  return true;
}
