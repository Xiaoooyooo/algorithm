// 链接：https://leetcode.cn/problems/maximum-split-of-positive-even-integers
// 给你一个整数 finalSum 。请你将它拆分成若干个 互不相同 的正偶数之和，且拆分出来的正偶数数目 最多 。

// 比方说，给你 finalSum = 12 ，那么这些拆分是 符合要求 的（互不相同的正偶数且和为 finalSum）：
// (2 + 10) ，(2 + 4 + 6) 和 (4 + 8) 。它们中，(2 + 4 + 6) 包含最多数目的整数。
// 注意 finalSum 不能拆分成 (2 + 2 + 4 + 4) ，因为拆分出来的整数必须互不相同。
// 请你返回一个整数数组，表示将整数拆分成 最多 数目的正偶数数组。
// 如果没有办法将 finalSum 进行拆分，请你返回一个 空 数组。你可以按 任意 顺序返回这些整数。

// 贪心算法
export default function maximumEvenSplit(finalSum: number): number[] {
  const res = [];
  if (finalSum % 2 > 0) {
    return res;
  }
  for (let i = 2; i <= finalSum; i += 2) {
    res.push(i);
    finalSum -= i;
  }
  res[res.length - 1] += finalSum;
  return res;
}

// 回溯
// export default function maximumEvenSplit(finalSum: number): number[] {
//   if (finalSum % 2 === 1) return [];
//   function helper(curr: number, arr: number[], sum: number) {
//     const left = sum - curr;
//     if (left === 0) return [...arr, curr];
//     if (left < 0) return;
//     const set = new Set(arr);
//     if (!set.has(curr)) {
//       const r = helper(curr + 2, [...arr, curr], left);
//       if (r) return r;
//       else return helper(curr + 2, [...arr], sum);
//     }
//   }
//   return helper(2, [], finalSum) || [];
// }
