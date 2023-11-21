// https://leetcode.cn/problems/maximum-sum-queries/
// 给你两个长度为 n 、下标从 0 开始的整数数组 nums1 和 nums2 ，另给你一个下标从 1 开始的二维数组 queries ，其中 queries[i] = [xi, yi] 。
// 对于第 i 个查询，在所有满足 nums1[j] >= xi 且 nums2[j] >= yi 的下标 j (0 <= j < n) 中，找出 nums1[j] + nums2[j] 的 最大值 ，如果不存在满足条件的 j 则返回 -1 。
// 返回数组 answer ，其中 answer[i] 是第 i 个查询的答案。

// 官方题解 单调栈
export default function maximumSumQueries(
  nums1: number[],
  nums2: number[],
  queries: number[][]
): number[] {
  const sortedNums = nums1.map((x, i) => [x, nums2[i]]);
  const sortedQueries = queries.map((x, i) => [i, ...x]);
  sortedNums.sort((a, b) => b[0] - a[0]);
  sortedQueries.sort((a, b) => b[1] - a[1]);

  function binarySearch(arr: number[], target: number) {
    let low = 0,
      high = arr.length;
    while (low < high) {
      const mid = low + Math.floor((high - low) / 2);
      if (arr[mid][0] >= target) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  const answer = new Array(queries.length).fill(-1);
  const stack = [];
  let j = 0;
  for (const q of sortedQueries) {
    const i = q[0];
    const x = q[1];
    const y = q[2];
    while (j < sortedNums.length && sortedNums[j][0] >= x) {
      const num1 = sortedNums[j][0];
      const num2 = sortedNums[j][1];
      while (stack.length > 0 && stack[stack.length - 1][1] <= num1 + num2) {
        stack.pop();
      }
      if (stack.length == 0 || stack[stack.length - 1][0] < num2) {
        stack.push([num2, num1 + num2]);
      }
      j++;
    }
    const k = binarySearch(stack, y);
    if (k < stack.length) {
      answer[i] = stack[k][1];
    }
  }
  return answer;
}

// 暴力枚举
// export default function maximumSumQueries(
//   nums1: number[],
//   nums2: number[],
//   queries: number[][]
// ): number[] {
//   const n = nums1.length;
//   const m = queries.length;
//   const ans = Array(m).fill(-1);
//   for (let i = 0; i < m; i++) {
//     const [x, y] = queries[i];
//     for (let j = 0; j < n; j++) {
//       if (nums1[j] >= x && nums2[j] >= y) {
//         ans[i] = Math.max(ans[i], nums1[j] + nums2[j]);
//       }
//     }
//   }
//   return ans;
// }
