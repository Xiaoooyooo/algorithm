// https://leetcode.cn/problems/maximize-distance-to-closest-person/
// 给你一个数组 seats 表示一排座位，其中 seats[i] = 1 代表有人坐在第 i 个座位上，seats[i] = 0 代表座位 i 上是空的（下标从 0 开始）。
// 至少有一个空座位，且至少有一人已经坐在座位上。
// 亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。
// 返回他到离他最近的人的最大距离。

export default function maxDistToClosest(seats: number[]): number {
  const len = seats.length;
  let res = 0;
  let i = 0,
    j = -1;
  for (let k = 1; k < len; k++) {
    if (seats[k] === 1) {
      j = i;
      i = k;
      if (seats[j] === 0) {
        res = i - j;
      } else if (i !== j + 1) {
        res = Math.max(res, (i - j) >> 1);
      }
    }
  }
  if (seats[len - 1] === 0) {
    j = i;
    i = len - 1;
    res = Math.max(res, i - j);
  }
  return res;
}
