// https://leetcode.cn/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
// 矩形蛋糕的高度为 h 且宽度为 w，给你两个整数数组 horizontalCuts 和 verticalCuts，其中：
//  horizontalCuts[i] 是从矩形蛋糕顶部到第  i 个水平切口的距离
// verticalCuts[j] 是从矩形蛋糕的左侧到第 j 个竖直切口的距离
// 请你按数组 horizontalCuts 和 verticalCuts 中提供的水平和竖直位置切割后，请你找出 面积最大 的那份蛋糕，并返回其 面积 。
// 由于答案可能是一个很大的数字，因此需要将结果 对 10^9 + 7 取余 后返回。

export default function maxArea1(
  h: number,
  w: number,
  horizontalCuts: number[],
  verticalCuts: number[]
): number {
  const mod = 1e9 + 7;
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);
  if (horizontalCuts[horizontalCuts.length - 1] !== h) horizontalCuts.push(h);
  if (verticalCuts[verticalCuts.length - 1] !== w) verticalCuts.push(w);
  let maxCol = 0,
    maxRow = 0;
  let prev = 0;
  for (let cut of horizontalCuts) {
    const col = cut - prev;
    maxCol = Math.max(maxCol, col);
    prev = cut;
  }
  prev = 0;
  for (let cut of verticalCuts) {
    const row = cut - prev;
    maxRow = Math.max(maxRow, row);
    prev = cut;
  }
  function p(a: number, b: number): number {
    if (a * b < Number.MAX_SAFE_INTEGER) return (a * b) % mod;
    let a1: number, a2: number, b1: number, b2: number;
    if (a % 2 === 0) {
      a1 = a / 2;
      a2 = a1;
    } else {
      a1 = Math.floor(a / 2);
      a2 = a1 + 1;
    }
    if (b % 2 === 0) {
      b1 = b / 2;
      b2 = b1;
    } else {
      b1 = Math.floor(b / 2);
      b2 = b1 + 1;
    }
    return (p(a1, b1) + p(a1, b2) + p(a2, b1) + p(a2, b2)) % mod;
  }
  return p(maxCol, maxRow);
}
