// https://leetcode.cn/problems/maximum-students-taking-exam/
// 给你一个 m * n 的矩阵 seats 表示教室中的座位分布。如果座位是坏的（不可用），就用 '#' 表示；否则，用 '.' 表示。
// 学生可以看到左侧、右侧、左上、右上这四个方向上紧邻他的学生的答卷，但是看不到直接坐在他前面或者后面的学生的答卷。
// 请你计算并返回该考场可以容纳的同时参加考试且无法作弊的 最大 学生人数。
// 学生必须坐在状况良好的座位上。

// * 官方题解：记忆化搜索 + 状态压缩
export default function maxStudents(seats: string[][]): number {
  const m = seats.length,
    n = seats[0].length;
  const memo = new Map();

  function isSingleRowCompliant(status: number, row: number) {
    for (let j = 0; j < n; j++) {
      if ((status >> j) & 1) {
        if (seats[row][j] == "#") {
          return false;
        }
        if (j > 0 && (status >> (j - 1)) & 1) {
          return false;
        }
      }
    }
    return true;
  }

  function isCrossRowsCompliant(status: number, upperRowStatus: number) {
    for (let j = 0; j < n; j++) {
      if ((status >> j) & 1) {
        if (j > 0 && (upperRowStatus >> (j - 1)) & 1) {
          return false;
        }
        if (j < n - 1 && (upperRowStatus >> (j + 1)) & 1) {
          return false;
        }
      }
    }
    return true;
  }

  function dp(row: number, status: number) {
    const key = (row << n) + status;
    if (!memo.has(key)) {
      if (!isSingleRowCompliant(status, row)) {
        memo.set(key, -Infinity);
        return -Infinity;
      }
      const students = bitCount(status);
      if (row == 0) {
        memo.set(key, students);
        return students;
      }
      let mx = 0;
      for (let upperRowStatus = 0; upperRowStatus < 1 << n; upperRowStatus++) {
        if (isCrossRowsCompliant(status, upperRowStatus)) {
          mx = Math.max(mx, dp(row - 1, upperRowStatus));
        }
      }
      memo.set(key, students + mx);
    }
    return memo.get(key);
  }

  function bitCount(num: number) {
    let bits = num;
    bits = bits - ((bits >> 1) & 0x55555555);
    bits = (bits & 0x33333333) + ((bits >> 2) & 0x33333333);
    bits = (bits + (bits >> 4)) & 0x0f0f0f0f;
    bits = (bits + (bits >> 8)) & 0x00ff00ff;
    bits = (bits + (bits >> 16)) & 0x0000ffff;
    return bits;
  }

  let mx = 0;
  for (let i = 0; i < 1 << n; i++) {
    mx = Math.max(mx, dp(m - 1, i));
  }
  return mx;
}
