// 链接：https://leetcode.cn/problems/find-longest-subarray-lcci
// 给定一个放有字母和数字的数组，找到最长的子数组，且包含的字母和数字的个数相同。
// 返回该子数组，若存在多个最长子数组，返回左端点下标值最小的子数组。若不存在这样的数组，返回一个空数组。

export default function findLongestSubarray(array: string[]): string[] {
  const len = array.length;
  // key: array 中某个字符之前（包括该字符）数字字符与字母字符数量之差
  // value: 当前字符的索引
  const map = new Map<number, number>();
  // 将数字字符与字母字符数量之差为 0 的情况置为 -1
  map.set(0, -1);
  let nNum = 0,
    sNum = 0;
  let left = -1,
    right = -1;
  for (let i = 0; i < len; i++) {
    if (/\d/.test(array[i])) {
      nNum += 1;
    } else {
      sNum += 1;
    }
    const d = nNum - sNum;
    if (map.has(d)) {
      const p = map.get(d);
      if (i - p > right - left) {
        left = p;
        right = i;
      }
    }
    if (!map.has(d)) {
      map.set(d, i);
    }
  }
  const res = [];
  for (let i = left + 1; i <= right; i++) {
    res.push(array[i]);
  }
  return res;
}

// 超时
// export default function findLongestSubarray(array: string[]): string[] {
//   const len = array.length;
//   const prefix = Array(len + 1)
//     .fill(undefined)
//     .map(() => Array(2).fill(0));
//   for (let i = 0; i < len; i++) {
//     if (/\d/.test(array[i])) {
//       prefix[i + 1][0] = prefix[i][0] + 1;
//       prefix[i + 1][1] = prefix[i][1];
//     } else {
//       prefix[i + 1][0] = prefix[i][0];
//       prefix[i + 1][1] = prefix[i][1] + 1;
//     }
//   }
//   const res = [];
//   let left = 0,
//     right = 0;
//   for (let i = 0; i < len + 1; i++) {
//     const l = prefix[i];
//     for (let j = 0; j < len + 1; j++) {
//       const r = prefix[j];
//       if (r[0] - l[0] === r[1] - l[1]) {
//         if (j - i > right - left) {
//           left = i;
//           right = j;
//         }
//       }
//     }
//   }
//   for (let i = left; i < right; i++) {
//     res.push(array[i]);
//   }
//   return res;
// }
