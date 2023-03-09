// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。

/**
 * @param {number[]} height
 * @return {number}
 */
export default function maxArea(height: number[]) {
  let max = 0;
  const len = height.length;
  for (let i = 0, j = len - 1; i < j; ) {
    let area: number;
    const w = j - i;
    if (height[i] > height[j]) {
      area = height[j] * w;
      j--;
    } else {
      area = height[i] * w;
      i++;
    }
    max = area > max ? area : max;
  }
  return max;
}
