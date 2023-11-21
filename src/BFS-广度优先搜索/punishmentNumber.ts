// https://leetcode.cn/problems/find-the-punishment-number-of-an-integer/
// 给你一个正整数 n ，请你返回 n 的 惩罚数 。
// n 的 惩罚数 定义为所有满足以下条件 i 的数的平方和：
// 1 <= i <= n
// i * i 的十进制表示的字符串可以分割成若干连续子字符串，且这些子字符串对应的整数值之和等于 i 。

// 广度优先搜索，队列
export default function punishmentNumber(n: number): number {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    const p = i * i;
    const queue = [];
    queue.push([0, p]);
    while (queue.length) {
      const [sum, left] = queue.shift();
      if (left === 0 && sum === i) {
        res += p;
        break;
      }
      let step = 10;
      while (left / step >= 0.1) {
        const mod = left % step;
        const _left = Math.floor(left / step);
        queue.push([sum + mod, _left]);
        step *= 10;
      }
    }
  }
  return res;
}
