// https://leetcode.cn/problems/number-of-laser-beams-in-a-bank/description/
// 银行内部的防盗安全装置已经激活。
// 给你一个下标从 0 开始的二进制字符串数组 bank ，表示银行的平面图，这是一个大小为 m x n 的二维矩阵。
// bank[i] 表示第 i 行的设备分布，由若干 '0' 和若干 '1' 组成。'0' 表示单元格是空的，而 '1' 表示单元格有一个安全设备。
// 对任意两个安全设备而言，如果同时 满足下面两个条件，则二者之间存在 一个 激光束：
// 两个设备位于两个 不同行 ：r1 和 r2 ，其中 r1 < r2 。
// 满足 r1 < i < r2 的 所有 行 i ，都 没有安全设备 。
// 激光束是独立的，也就是说，一个激光束既不会干扰另一个激光束，也不会与另一个激光束合并成一束。
// 返回银行中激光束的总数量。

export default function numberOfBeams(bank: string[]): number {
  const rows = bank.length,
    cols = bank[0].length;
  let prev = 0;
  let count = 0;
  for (let i = 0; i < rows; i++) {
    let c = 0;
    for (let j = 0; j < cols; j++) {
      if (bank[i][j] === "1") {
        c += 1;
      }
    }
    if (c !== 0) {
      if (prev !== 0) count += c * prev;
      prev = c;
    }
  }
  return count;
}
