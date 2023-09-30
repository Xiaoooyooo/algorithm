// https://leetcode.cn/problems/number-of-flowers-in-full-bloom/
// 给你一个下标从 0 开始的二维整数数组 flowers ，其中 flowers[i] = [starti, endi] 表示第 i 朵花的 花期 从 starti 到 endi （都 包含）。
// 同时给你一个下标从 0 开始大小为 n 的整数数组 people ，people[i] 是第 i 个人来看花的时间。
// 请你返回一个大小为 n 的整数数组 answer ，其中 answer[i]是第 i 个人到达时在花期内花的 数目 。

// 官方题解
export default function fullBloomFlowers(
  flowers: number[][],
  people: number[]
): number[] {
  const cnt = new Map();
  for (const [start, end] of flowers) {
    cnt.set(start, cnt.has(start) ? cnt.get(start) + 1 : 1);
    cnt.set(end + 1, cnt.has(end + 1) ? cnt.get(end + 1) - 1 : -1);
  }
  const arr = [];
  for (let item of cnt.entries()) {
    arr.push([item[0], item[1]]);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let m = people.length;
  const indices = Array.from(new Array(m).keys());
  indices.sort((a, b) => people[a] - people[b]);
  let j = 0,
    curr = 0;
  let ans = new Array(m).fill(0);
  for (const i of indices) {
    while (j < arr.length && arr[j][0] <= people[i]) {
      curr += arr[j][1];
      j += 1;
    }
    ans[i] = curr;
  }
  return ans;
}

// 优先队列
// import MinHeap from "./堆 - 优先队列/MinHeap";
// export default function fullBloomFlowers(
//   flowers: number[][],
//   people: number[]
// ): number[] {
//   const len = flowers.length;
//   const count = people.length;
//   const heap1 = new MinHeap();
//   const heap2 = new MinHeap();
//   for (let i = 0; i < len; i++) {
//     heap1.push(flowers[i][0]);
//     heap2.push(flowers[i][1]);
//   }
//   const arr: { index: number; day: number; count: number }[] = [];
//   for (let i = 0; i < count; i++) {
//     arr.push({ index: i, day: people[i], count: 0 });
//   }
//   arr.sort((a, b) => a.day - b.day);
//   let i = 0,
//     j = 0,
//     prev = arr[0].day;
//   while (j < count) {
//     prev = arr[j].day;
//     while (!heap1.isEmpty() && heap1.peek() <= prev) {
//       i++;
//       heap1.pop();
//     }
//     while (!heap2.isEmpty() && heap2.peek() < prev) {
//       i--;
//       heap2.pop();
//     }
//     while (j < count && arr[j].day === prev) {
//       arr[j].count = i;
//       j++;
//     }
//   }
//   const res = arr.sort((a, b) => a.index - b.index).map((el) => el.count);
//   // console.log(res);
//   return res;
// }

// // 最小堆 内存超出
// export default function fullBloomFlowers(
//   flowers: number[][],
//   people: number[]
// ): number[] {
//   const len = flowers.length;
//   const heap1 = new MinHeap();
//   const heap2 = new MinHeap();
//   for (let i = 0; i < len; i++) {
//     heap1.push(flowers[i][0]);
//     heap2.push(flowers[i][1]);
//   }
//   const arr = [0];
//   let i = 1;
//   while (!heap1.isEmpty() || !heap2.isEmpty()) {
//     arr[i] = arr[i - 1];
//     while (!heap1.isEmpty() && heap1.peek() === i) {
//       arr[i]++;
//       heap1.pop();
//     }
//     while (!heap2.isEmpty() && heap2.peek() < i) {
//       arr[i]--;
//       heap2.pop();
//     }
//     i++;
//   }
//   const count = people.length;
//   const res = [];
//   for (let i = 0; i < count; i++) {
//     res[i] = arr[people[i]] || 0;
//   }
//   return res;
// }
