// 链接：https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks
// 给你一个长度为 n 下标从 0 开始的字符串 blocks ，blocks[i] 要么是 'W' 要么是 'B' ，表示第 i 块的颜色。
// 字符 'W' 和 'B' 分别表示白色和黑色。
// 给你一个整数 k ，表示想要 连续 黑色块的数目。
// 每一次操作中，你可以选择一个白色块将它 涂成 黑色块。
// 请你返回至少出现 一次 连续 k 个黑色块的 最少 操作次数。

// 滑动窗口
export default function minimumRecolors(blocks: string, k: number): number {
  const len = blocks.length;
  let i = 0,
    j = 0,
    t = 0;
  while (j < k) {
    if (blocks[j] === "W") {
      t += 1;
    }
    j += 1;
  }
  let res = t;
  while (j < len) {
    if (blocks[j] === "W") {
      t += 1;
    }
    if (blocks[i] === "W") {
      t -= 1;
    }
    j += 1;
    i += 1;
    res = Math.min(res, t);
  }
  return res;
}

// export default function minimumRecolors(blocks: string, k: number): number {
//   const len = blocks.length;
//   let res = len;
//   for (let i = 0; i <= len - k; i++) {
//     let t = 0;
//     for (let j = i; j < i + k; j++) {
//       if (blocks[j] === "W") {
//         t += 1;
//       }
//     }
//     res = Math.min(t, res);
//   }
//   return res;
// }
