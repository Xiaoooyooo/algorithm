// https://leetcode.cn/problems/h-index-ii/
// 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数，citations 已经按照 升序排列 。计算并返回该研究者的 h 指数。
// h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。
// 请你设计并实现对数时间复杂度的算法解决此问题。

export default function hIndex1(citations: number[]): number {
  const len = citations.length;
  let i = 0,
    j = len - 1;
  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    const t = len - mid;
    if (citations[mid] >= t) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return len - i;
}

// export default function hIndex1(citations: number[]): number {
//   const len = citations.length;
//   let i = 0,
//     j = len - 1;
//   while (i <= j) {
//     const mid = Math.floor((i + j) / 2);
//     const t = len - mid;
//     if (citations[mid] >= t) {
//       j = mid - 1;
//     } else {
//       i = mid + 1;
//     }
//   }
//   console.log(i, j);
//   if (i > j) {
//     return citations[j] >= len - j ? len - j : len - i;
//   }
//   return citations[i] >= len - i ? len - i : len - j;
// }
