// 给你一个字符串 s 和一个整数 repeatLimit ，用 s 中的字符构造一个新字符串 repeatLimitedString ，
// 使任何字母 连续 出现的次数都不超过 repeatLimit 次。你不必使用 s 中的全部字符。
// 返回 字典序最大的 repeatLimitedString 。
// 如果在字符串 a 和 b 不同的第一个位置，字符串 a 中的字母在字母表中出现时间比字符串 b 对应的字母晚，则认为字符串 a 比字符串 b 字典序更大 。
// 如果字符串中前 min(a.length, b.length) 个字符都相同，那么较长的字符串字典序更大。

export default function repeatLimitedString(
  s: string,
  repeatLimit: number
): string {
  const len = s.length;
  const count = Array(26).fill(0);
  for (let i = 0; i < len; i++) {
    const index = s.charCodeAt(i) - "a".charCodeAt(0);
    count[index]++;
  }
  let res = "";
  let i = 25;
  let flag = false;
  while (i >= 0) {
    const c = String.fromCharCode("a".charCodeAt(0) + i);
    if (flag) {
      if (count[i] >= 1) {
        res += c;
        count[i] -= 1;
        flag = false;
        i = 25;
      } else {
        i--;
      }
    } else {
      if (count[i] > repeatLimit) {
        res += c.repeat(repeatLimit);
        count[i] -= repeatLimit;
        flag = true;
      } else if (count[i] > 0) {
        res += c.repeat(count[i]);
        count[i] = 0;
        flag = false;
      }
      i--;
    }
  }
  return res;
}
