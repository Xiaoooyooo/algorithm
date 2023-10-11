// https://leetcode.cn/problems/reward-top-k-students/description/
// 给你两个字符串数组 positive_feedback 和 negative_feedback ，分别包含表示正面的和负面的词汇。不会 有单词同时是正面的和负面的。
// 一开始，每位学生分数为 0 。每个正面的单词会给学生的分数 加 3 分，每个负面的词会给学生的分数 减  1 分。
// 给你 n 个学生的评语，用一个下标从 0 开始的字符串数组 report 和一个下标从 0 开始的整数数组 student_id 表示，
// 其中 student_id[i] 表示这名学生的 ID ，这名学生的评语是 report[i] 。每名学生的 ID 互不相同。
// 给你一个整数 k ，请你返回按照得分 从高到低 最顶尖的 k 名学生。如果有多名学生分数相同，ID 越小排名越前。

export default function topStudents(
  positive_feedback: string[],
  negative_feedback: string[],
  report: string[],
  student_id: number[],
  k: number
): number[] {
  const positiveSet = new Set(),
    negativeSet = new Set();
  for (let item of positive_feedback) {
    positiveSet.add(item);
  }
  for (let item of negative_feedback) {
    negativeSet.add(item);
  }
  const len = report.length;
  const points = Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    const words = report[i].split(" ");
    for (let word of words) {
      if (positiveSet.has(word)) points[i] += 3;
      else if (negativeSet.has(word)) points[i] -= 1;
    }
  }
  const arr = Array(len)
    .fill(0)
    .map((el, i) => [student_id[i], points[i]]);
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return b[1] - a[1];
  });
  return arr.slice(0, k).map((el) => el[0]);
}
