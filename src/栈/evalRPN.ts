// 链接：https://leetcode.cn/leetbook/read/queue-stack/gomvm/
// 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。
// 请你计算该表达式。返回一个表示表达式值的整数。
// 注意：
// 有效的算符为 '+'、'-'、'*' 和 '/' 。
// 每个操作数（运算对象）都可以是一个整数或者另一个表达式。
// 两个整数之间的除法总是 向零截断 。
// 表达式中不含除零运算。
// 输入是一个根据逆波兰表示法表示的算术表达式。
// 答案及所有中间计算结果可以用 32 位 整数表示。

// 逆波兰表达式：
// 逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。
// 平常使用的算式则是一种中缀表达式，如 ( 1 + 2 ) * ( 3 + 4 ) 。
// 该算式的逆波兰表达式写法为 ( ( 1 2 + ) ( 3 4 + ) * ) 。
// 逆波兰表达式主要有以下两个优点：
// 去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
// 适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中

export default function evalRPN(tokens: string[]): number {
  const len = tokens.length;
  const stack = [];
  for (let i = 0; i < len; i++) {
    if (/\d+/.test(tokens[i])) {
      stack.push(tokens[i]);
    } else {
      const a = Number(stack.pop());
      const b = Number(stack.pop());
      let res: number;
      if (tokens[i] === "+") {
        res = a + b;
      } else if (tokens[i] === "-") {
        res = b - a;
      } else if (tokens[i] === "*") {
        res = a * b;
      } else if (tokens[i] === "/") {
        res = parseInt(b / a + "");
      }
      stack.push(res);
    }
  }
  return stack[0];
}
