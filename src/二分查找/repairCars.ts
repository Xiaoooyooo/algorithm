// https://leetcode.cn/problems/minimum-time-to-repair-cars/
// 给你一个整数数组 ranks ，表示一些机械工的 能力值 。ranks[i] 是第 i 位机械工的能力值。能力值为 r 的机械工可以在 r * n^2 分钟内修好 n 辆车。
// 同时给你一个整数 cars ，表示总共需要修理的汽车数目。
// 请你返回修理所有汽车 最少 需要多少时间。
// 注意：所有机械工可以同时修理汽车。

// 二分查找
export default function repairCars(ranks: number[], cars: number): number {
  const len = ranks.length;
  // 初始下限为一分钟
  let min = 1;
  // 初始上限为交给效率最高的人全部干完所需要的时间
  let max = Math.min(...ranks) * cars ** 2;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    let c = 0;
    for (let j = 0; j < len; j++) {
      const n = Math.floor(Math.sqrt(mid / ranks[j]));
      c += n;
    }
    if (c < cars) min = mid + 1;
    else max = mid - 1;
  }
  return min;
}

// 超时
// export default function repairCars(ranks: number[], cars: number): number {
//   const len = ranks.length;
//   for (let i = 1; ; i++) {
//     let c = 0;
//     for (let j = 0; j < len; j++) {
//       const n = Math.floor(Math.sqrt(i / ranks[j]));
//       c += n;
//     }
//     if (c >= cars) return i;
//   }
// }
