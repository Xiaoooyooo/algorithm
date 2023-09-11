// https://leetcode.cn/problems/course-schedule-iii/
// 这里有 n 门不同的在线课程，按从 1 到 n 编号。给你一个数组 courses ，
// 其中 courses[i] = [duration_i, lastDay_i] 表示第 i 门课将会 持续 上 duration_i 天课，并且必须在不晚于 lastDay_i 的时候完成。
// 你的学期从第 1 天开始。且不能同时修读两门及两门以上的课程。
// 返回你最多可以修读的课程数目。
import MaxHeap from "./堆 - 优先队列/MaxHeap";

// * 优先队列 + 贪心
export default function scheduleCourse(courses: number[][]): number {
  courses.sort((a, b) => a[1] - b[1]);

  const q = new MaxHeap();
  // 优先队列中所有课程的总时间
  let total = 0;

  for (let course of courses) {
    const ti = course[0],
      di = course[1];
    if (total + ti <= di) {
      total += ti;
      q.add(ti);
    } else if (!q.isEmpty() && q.getMax() > ti) {
      total -= q.deleteMax() - ti;
      q.add(ti);
    }
  }

  return q.size();
}
