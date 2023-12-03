// https://leetcode.cn/problems/html-entity-parser/
// 「HTML 实体解析器」 是一种特殊的解析器，它将 HTML 代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。
// HTML 里这些特殊字符和它们对应的字符实体包括：
// 双引号：字符实体为 &quot; ，对应的字符是 " 。
// 单引号：字符实体为 &apos; ，对应的字符是 ' 。
// 与符号：字符实体为 &amp; ，对应对的字符是 & 。
// 大于号：字符实体为 &gt; ，对应的字符是 > 。
// 小于号：字符实体为 &lt; ，对应的字符是 < 。
// 斜线号：字符实体为 &frasl; ，对应的字符是 / 。
// 给你输入字符串 text ，请你实现一个 HTML 实体解析器，返回解析器解析后的结果。

export default function entityParser(text: string): string {
  const dic = {
    "&quot;": '"',
    "&apos;": "'",
    "&amp;": "&",
    "&gt;": ">",
    "&lt;": "<",
    "&frasl;": "/"
  };
  const len = text.length;
  let res = "",
    flag = false,
    temp = "";
  for (let i = 0; i < len; i++) {
    const c = text[i];
    if (!flag) {
      if (c === "&") {
        flag = true;
        temp = "&";
      } else {
        res += c;
      }
    } else {
      if (c === "&") {
        res += temp;
        temp = c;
      } else {
        temp += c;
      }
      if (c === ";" && temp in dic) {
        res += dic[temp];
        flag = false;
      }
    }
  }
  if (flag) {
    res += temp;
  }
  return res;
}
