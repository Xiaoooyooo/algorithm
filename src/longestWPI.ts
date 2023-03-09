// https://leetcode.cn/problems/longest-well-performing-interval/

// 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。
// 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。
// 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。
// 请你返回「表现良好时间段」的最大长度。

export default function longestWPI(hours: number[]): number {
  const len = hours.length;
  const arr = [];
  for (let i = 0; i < len; i++) {
    if (hours[i] > 8) arr[i] = 1;
    else arr[i] = -1;
  }
  // 接下来需要在 arr 中找到一个子列，其中所有元素之和大于 0
  // 创建一个前缀和数组 prefixSum
  // 这个数组的含义为：prefixSum[i] = arr[0] + arr[1] + ... + arr[i - 1]
  // 即每一项都代表着 arr 数组中从索引为 0 到索引为 i-1 的元素之和
  const prefixSum = [0];
  for (let i = 0; i < len; i++) {
    const sum = prefixSum[i] + arr[i];
    prefixSum.push(sum);
  }
  // 接下来需要在 prefixSum 找到一组 i,j(i < j) 使得 prefixSum[j]-prefixSum[i]>0 且 j-i 尽可能大
  // 可以通过直接遍历获得最终结果，算法时间复杂度 O(n^2)
  let res = 0;
  for (let i = 0, len = prefixSum.length; i < len - 1; i++) {
    for (let j = 1; j < len; j++) {
      if (prefixSum[j] - prefixSum[i] > 0) {
        const n = j - i;
        res = n > res ? n : res;
      }
    }
  }
  return res;
}


// 暴力遍历 O(n^3) 超时
// export default function longestWPI(hours: number[]): number {
//   const len = hours.length;
//   let max = 0;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       let sum = 0;
//       for (let k = i; k <= j; k++) {
//         sum += hours[k] > 8 ? 1 : -1;
//       }
//       if (sum > 0) {
//         const l = j - i + 1;
//         max = max > l ? max : l;
//       }
//     }
//   }
//   return max;
// }
