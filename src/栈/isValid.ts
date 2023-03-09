// 链接：https://leetcode.cn/problems/valid-parentheses
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

export default function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i = 0, len = s.length; i < len; i++) {
    const c = s[i];
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
      continue;
    }
    const _c = stack.pop();
    if (
      (_c === "(" && c === ")") ||
      (_c === "[" && c === "]") ||
      (_c === "{" && c === "}")
    ) {
      continue;
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
