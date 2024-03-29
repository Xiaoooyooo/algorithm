// https://leetcode.cn/problems/beautiful-towers-i/description/
// 给你一个长度为 n 下标从 0 开始的整数数组 maxHeights 。
// 你的任务是在坐标轴上建 n 座塔。第 i 座塔的下标为 i ，高度为 heights[i] 。
// 如果以下条件满足，我们称这些塔是 美丽 的：
// 1 <= heights[i] <= maxHeights[i]
// heights 是一个 山脉 数组。
// 如果存在下标 i 满足以下条件，那么我们称数组 heights 是一个 山脉 数组：
// 对于所有 0 < j <= i ，都有 heights[j - 1] <= heights[j]
// 对于所有 i <= k < n - 1 ，都有 heights[k + 1] <= heights[k]
// 请你返回满足 美丽塔 要求的方案中，高度和的最大值 。

// 单调栈
export default function maximumSumOfHeights(maxHeights: number[]): number {
  const len = maxHeights.length;
  const prefix: number[] = new Array(len).fill(0);
  const suffix: number[] = new Array(len).fill(0);
  const stack1: number[] = [];
  const stack2: number[] = [];
  for (let i = 0; i < len; i++) {
    while (
      stack1.length &&
      maxHeights[i] < maxHeights[stack1[stack1.length - 1]]
    ) {
      stack1.pop();
    }
    if (stack1.length == 0) {
      prefix[i] = (i + 1) * maxHeights[i];
    } else {
      const last = stack1[stack1.length - 1];
      prefix[i] = prefix[last] + (i - last) * maxHeights[i];
    }
    stack1.push(i);
  }

  let res = 0;
  for (let i = len - 1; i >= 0; i--) {
    while (
      stack2.length &&
      maxHeights[i] < maxHeights[stack2[stack2.length - 1]]
    ) {
      stack2.pop();
    }
    if (stack2.length == 0) {
      suffix[i] = (len - i) * maxHeights[i];
    } else {
      const last = stack2[stack2.length - 1];
      suffix[i] = suffix[last] + (last - i) * maxHeights[i];
    }
    stack2.push(i);
    res = Math.max(res, prefix[i] + suffix[i] - maxHeights[i]);
  }
  return res;
}

// 枚举
// export default function maximumSumOfHeights(maxHeights: number[]): number {
//   const len = maxHeights.length;
//   let res = 0;
//   for (let i = 0; i < len; i++) {
//     let p = maxHeights[i],
//       sum = maxHeights[i];
//     // left
//     for (let l = i - 1; l >= 0; l--) {
//       if (maxHeights[l] < p) {
//         p = maxHeights[l];
//       }
//       sum += p;
//     }
//     p = maxHeights[i];
//     // right
//     for (let r = i + 1; r < len; r++) {
//       if (maxHeights[r] < p) {
//         p = maxHeights[r];
//       }
//       sum += p;
//     }

//     res = Math.max(res, sum);
//   }
//   return res;
// }
