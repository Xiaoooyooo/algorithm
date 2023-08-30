// https://leetcode.cn/problems/minimum-operations-to-halve-array-sum/description/
// 给你一个正整数数组 nums 。每一次操作中，你可以从 nums 中选择 任意 一个数并将它减小到 恰好 一半。
// 注意，在后续操作中你可以对减半过的数继续执行操作
// 请你返回将 nums 数组和 至少 减少一半的 最少 操作数。

// 最大优先队列
import MaxHeap from "./堆 - 优先队列/MaxHeap";
export default function halveArray(nums: number[]): number {
  const SUM = nums.reduce((c, p) => c + p),
    len = nums.length;
  const heap = new MaxHeap();
  for (let i = 0; i < len; i++) {
    heap.add(nums[i]);
  }
  let times = 0,
    sum = SUM;
  while (sum > SUM / 2) {
    times++;
    const max = heap.deleteMax();
    const half = max / 2;
    sum -= half;
    heap.add(half);
  }
  return times;
}

// export default function halveArray(nums: number[]): number {
//   const SUM = nums.reduce((c, p) => c + p),
//     len = nums.length;
//   let times = 0,
//     sum = SUM;
//   nums.sort((a, b) => b - a);
//   for (let i = 0; i < len - 1; ) {
//     times++;
//     nums[i] /= 2;
//     sum -= nums[i];
//     if (sum <= SUM / 2) return times;
//     if (nums[i + 1] > nums[0]) {
//       i++;
//     } else if (nums[i + 1] >= nums[i]) {
//       nums.sort((a, b) => b - a);
//       i = 0;
//     } else if (nums[i + 1] < nums[i]) {
//       i = 0;
//     }
//   }
//   return len;
// }

// 广度优先算法 超时
// export default function halveArray(nums: number[]): number {
//   const target = nums.reduce((c, p) => c + p) / 2,
//     len = nums.length;
//   let times = 0;
//   const queue = [nums];
//   function bfs() {
//     while (queue.length) {
//       times++;
//       const l = queue.length;
//       for (let i = 0; i < l; i++) {
//         const curr = queue.shift();
//         const _sum = curr.reduce((c, p) => c + p);
//         for (let j = 0; j < len; j++) {
//           const t = _sum - curr[j] / 2;
//           if (t <= target) return times;
//           if (t > target) {
//             const arr = [...curr];
//             arr[j] /= 2;
//             queue.push(arr);
//           }
//         }
//       }
//     }
//   }
//   return bfs();
// }
