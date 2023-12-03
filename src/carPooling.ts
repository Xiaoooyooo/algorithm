// https://leetcode.cn/problems/car-pooling/
// 车上最初有 capacity 个空座位。车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向）
// 给定整数 capacity 和一个数组 trips ,  trip[i] = [numPassengersi, fromi, toi] 表示第 i 次旅行有 numPassengersi 乘客，
// 接他们和放他们的位置分别是 fromi 和 toi 。这些位置是从汽车的初始位置向东的公里数。
// 当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false。

// 官方题解 差分数组
export default function carPooling(
  trips: number[][],
  capacity: number
): boolean {
  let to_max = 0;
  for (const trip of trips) {
    to_max = Math.max(to_max, trip[2]);
  }

  const diff = new Array(to_max + 1).fill(0);
  for (const trip of trips) {
    diff[trip[1]] += trip[0];
    diff[trip[2]] -= trip[0];
  }

  let count = 0;
  for (let i = 0; i <= to_max; ++i) {
    count += diff[i];
    if (count > capacity) {
      return false;
    }
  }
  return true;
}

// export default function carPooling(
//   trips: number[][],
//   capacity: number
// ): boolean {
//   trips.sort((a, b) => a[1] - b[1]);
//   const arr: [number, number][] = [];
//   for (const [passengers, from, to] of trips) {
//     while (arr.length && arr[0][0] <= from) {
//       capacity += arr[0][1];
//       arr.shift();
//     }
//     capacity -= passengers;
//     if (capacity < 0) {
//       return false;
//     }
//     let i = 0;
//     while (arr[i] && arr[i][0] <= to) {
//       i++;
//     }
//     arr.splice(i, 0, [to, passengers]);
//   }
//   return true;
// }
