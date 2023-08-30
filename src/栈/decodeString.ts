// 链接：https://leetcode.cn/leetbook/read/queue-stack/gdwjv/
// 给定一个经过编码的字符串，返回它解码后的字符串。
// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

export default function decodeString(s: string): string {
  const len = s.length;
  const kStack = [], // * 栈顶为当前层级字符串的重复次数
    sStack = []; // * 栈顶为当前层级的前缀序列
  let i = 0,
    temp = "",
    k = "";
  while (i < len) {
    const c = s[i];
    if (/[a-z]/.test(c)) {
      temp += c;
    }
    if (/\d/.test(c)) {
      k += c;
    }
    if (c === "[") {
      kStack.push(Number(k));
      sStack.push(temp);
      k = "";
      temp = "";
    }
    if (c === "]") {
      const _k = kStack.pop();
      const _s = sStack.pop();
      temp = _s + temp.repeat(_k);
    }
    i++;
  }
  return temp;
}
