// 链接：https://leetcode.cn/problems/merge-similar-items
// 给你两个二维整数数组 items1 和 items2 ，表示两个物品集合。每个数组 items 有以下特质：
// items[i] = [valuei, weighti] 其中 valuei 表示第 i 件物品的 价值 ，weighti 表示第 i 件物品的 重量 。
// items 中每件物品的价值都是 唯一的 。
// 请你返回一个二维数组 ret，其中 ret[i] = [valuei, weighti]， weighti 是所有价值为 valuei 物品的 重量之和 。
// 注意：ret 应该按价值 升序 排序后返回。

export default function mergeSimilarItems(
  items1: number[][],
  items2: number[][]
) {
  const len1 = items1.length,
    len2 = items2.length;
  const map = new Map();
  for (let i = 0, j = 0; i < len1 || j < len2; ) {
    // map.set(items1[i][0], items1[i][1]);
    const _i = items1[i],
      _j = items2[j];
    if (i < len1) {
      if (map.has(_i[0])) {
        map.set(_i[0], map.get(_i[0]) + _i[1]);
      } else {
        map.set(_i[0], _i[1]);
      }
      i++;
    }
    if (j < len2) {
      if (map.has(_j[0])) {
        map.set(_j[0], map.get(_j[0]) + _j[1]);
      } else {
        map.set(_j[0], _j[1]);
      }
      j++;
    }
  }
  const ret = [];
  for (const k of map.entries()) {
    ret.push([k[0], k[1]]);
  }
  return ret.sort((a, b) => a[0] - b[0]);
}

// export default function mergeSimilarItems(
//   items1: number[][],
//   items2: number[][]
// ) {
//   const len1 = items1.length,
//     len2 = items2.length;
//   const map = new Map();
//   for (let i = 0; i < len1; i++) {
//     map.set(items1[i][0], items1[i][1]);
//   }
//   const ret = [];
//   for (let j = 0; j < len2; j++) {
//     let total = items2[j][1];
//     if (map.has(items2[j][0])) {
//       const m = map.get(items2[j][0]);
//       total += m;
//       map.delete(items2[j][0]);
//     }
//     ret.push([items2[j][0], total]);
//   }
//   if (map.size > 0) {
//     for (const k of map.entries()) {
//       ret.push([k[0], k[1]]);
//     }
//   }
//   return ret.sort((a, b) => a[0] - b[0]);
// }
