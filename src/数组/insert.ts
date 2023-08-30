// https://leetcode.cn/problems/insert-interval/description/
// 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
// 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

export default function insert(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  const len = intervals.length;
  if (len === 0) return [newInterval];
  const res: number[][] = [];
  let temp = newInterval;
  let flag = false;
  for (let i = 0; i < len; i++) {
    if (intervals[i][1] < temp[0] || intervals[i][0] > temp[1]) {
      if (intervals[i][0] > temp[1] && !flag) {
        res.push(temp);
        flag = true;
      }
      res.push(intervals[i]);
    } else {
      temp[0] = Math.min(temp[0], intervals[i][0]);
      temp[1] = Math.max(temp[1], intervals[i][1]);
    }
  }
  if (!flag) {
    res.push(temp);
  }
  // console.log(res);
  return res;
}
