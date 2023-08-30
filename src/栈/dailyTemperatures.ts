// 链接：https://leetcode.cn/leetbook/read/queue-stack/genw3/
// 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，
// 其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。
// 如果气温在这之后都不会升高，请在该位置用 0 来代替。

export default function dailyTemperatures(temperatures: number[]): number[] {
  const len = temperatures.length;
  const ans: number[] = Array(len).fill(0);
  // 栈存放元素的下标
  const stack = [];

  for (let i = 0; i < len; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const top = stack.pop();
      ans[top] = i - top;
    }
    stack.push(i);
  }
  return ans;
}

// export default function dailyTemperatures(temperatures: number[]): number[] {
//   const len = temperatures.length;
//   const answer = Array(len).fill(0);
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (temperatures[j] > temperatures[i]) {
//         answer[i] = j - i;
//         break;
//       }
//     }
//   }
//   return answer;
// }
