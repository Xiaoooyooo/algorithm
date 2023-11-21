// https://leetcode.cn/problems/maximum-product-of-word-lengths/
// 给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。

export default function maxProduct1(words: string[]): number {
  const len = words.length;
  const ACode = "a".charCodeAt(0);
  const binary = Array(27).fill(0);
  let t = 0b1;
  for (let i = 0; i < 27; i++) {
    binary[i] = t;
    t = t << 1;
  }
  const wordsToBinary = Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    const l = words[i].length;
    for (let j = 0; j < l; j++) {
      const index = words[i].charCodeAt(j) - ACode;
      if (wordsToBinary[i] & binary[index]) continue;
      wordsToBinary[i] ^= binary[index];
    }
  }
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (wordsToBinary[i] & wordsToBinary[j]) continue;
      res = Math.max(res, words[i].length * words[j].length);
    }
  }
  return res;
}
