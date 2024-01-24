// https://leetcode.cn/problems/number-of-boomerangs/description/
// 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。
// 回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的欧式距离相等（需要考虑元组的顺序）。
// 返回平面上所有回旋镖的数量。

export default function numberOfBoomerangs(points: number[][]): number {
  const len = points.length;
  if (len < 3) {
    return 0;
  }
  let res = 0;
  for (let i = 0; i < len; i++) {
    const dis = new Map<number, number>();
    for (let j = 0; j < len; j++) {
      if (i === j) {
        continue;
      }
      const d =
        Math.pow(points[i][0] - points[j][0], 2) +
        Math.pow(points[i][1] - points[j][1], 2);
      dis.set(d, (dis.get(d) || 0) + 1);
    }
    for (const [, d] of dis.entries()) {
      if (d >= 2) {
        res += d * (d - 1);
      }
    }
  }
  return res;
}
