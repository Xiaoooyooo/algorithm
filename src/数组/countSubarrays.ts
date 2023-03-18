// 链接：https://leetcode.cn/problems/count-subarrays-with-median-k
// 给你一个长度为 n 的数组 nums ，该数组由从 1 到 n 的 不同 整数组成。另给你一个正整数 k 。
// 统计并返回 nums 中的 中位数 等于 k 的非空子数组的数目。
// 注意：
// 数组的中位数是按 递增 顺序排列后位于 中间 的那个元素，如果数组长度为偶数，则中位数是位于中间靠 左 的那个元素。
// 例如，[2,3,1,4] 的中位数是 2 ，[8,4,3,5,1] 的中位数是 4 。
// 子数组是数组中的一个连续部分。

export default function countSubarrays(nums: number[], k: number): number {
  const len = nums.length;
  const arr = Array(len + 1)
    .fill(undefined)
    .map(() => [0, 0]);
  let pos = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] < k) {
      arr[i + 1][0] = arr[i][0] + 1;
      arr[i + 1][1] = arr[i][1];
    } else if (nums[i] > k) {
      arr[i + 1][0] = arr[i][0];
      arr[i + 1][1] = arr[i][1] + 1;
    } else {
      pos = i;
      arr[i + 1][0] = arr[i][0];
      arr[i + 1][1] = arr[i][1];
    }
  }
  // console.log(arr);
  const map = new Map();
  for (let i = 0; i <= pos; i++) {
    const lower = arr[pos][0] - arr[i][0];
    const bigger = arr[pos][1] - arr[i][1];
    const d = bigger - lower;
    map.set(d, (map.get(d) || 0) + 1);
  }
  // console.log(map);
  let res = 0;
  for (let i = pos + 1; i < len + 1; i++) {
    const lower = arr[i][0] - arr[pos][0];
    const bigger = arr[i][1] - arr[pos][1];
    const t = lower - bigger;
    // console.log({ t });
    if (map.has(t)) {
      res += map.get(t);
    }
    // 为什么是 t + 1
    // 这里的 t 表示子数组的后半部分中，小于 k 的数与大于 k 的数的数量之差 d2
    // 而 map 中记录的是子数组的前半部分中，大于 k 的数与小于 k 的数的数量之差 d1
    // 子数组成立有两种情况：子数组中大于 k 和 小于 k 的数的数量相同，或者大于 k 的数比小于 k 的数多一个
    // 对于前者，则需要满足 d1 === d2，对于后者即 d1 === d2 + 1
    if (map.has(t + 1)) {
      res += map.get(t + 1);
    }
  }
  return res;
}

// 超时
// export default function countSubarrays(nums: number[], k: number): number {
//   const len = nums.length;
//   let pos: number;
//   const arr = Array(len + 1)
//     .fill(undefined)
//     .map(() => [0, 0]); // [小于 k 的数目, 大于 k 的数目]
//   // 满足情况的条件：
//   //   大于 k 的数目 === 小于 k 的数目
//   //   大于 k 的数目 === 小于 k 的数目 + 1
//   for (let i = 0; i < len; i++) {
//     if (nums[i] < k) {
//       arr[i + 1][0] = arr[i][0] + 1;
//       arr[i + 1][1] = arr[i][1];
//     } else if (nums[i] > k) {
//       arr[i + 1][0] = arr[i][0];
//       arr[i + 1][1] = arr[i][1] + 1;
//     } else {
//       arr[i + 1][0] = arr[i][0];
//       arr[i + 1][1] = arr[i][1];
//       pos = i;
//     }
//   }
//   let res = 0;
//   //!! 边界定义还是不熟
//   for (let i = 0; i < pos + 1; i++) {
//     for (let j = pos + 1; j < len + 1; j++) {
//       if (i === j) continue;
//       const lower = arr[j][0] - arr[i][0];
//       const bigger = arr[j][1] - arr[i][1];
//       if (bigger === lower || bigger === lower + 1) {
//         res += 1;
//       }
//     }
//   }
//   return res;
// }
