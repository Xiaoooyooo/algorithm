// https://leetcode.cn/problems/water-and-jug-problem/description/
// 有两个水壶，容量分别为 jug1Capacity 和 jug2Capacity 升。水的供应是无限的。确定是否有可能使用这两个壶准确得到 targetCapacity 升。
// 如果可以得到 targetCapacity 升水，最后请用以上水壶中的一或两个来盛放取得的 targetCapacity 升水。
// 你可以：
// 装满任意一个水壶
// 清空任意一个水壶
// 从一个水壶向另外一个水壶倒水，直到装满或者倒空

// 官方题解 dfs
export default function canMeasureWater(
  jug1Capacity: number,
  jug2Capacity: number,
  targetCapacity: number
): boolean {
  function hash(state: number) {
    return state[0] * 1000001 + state[1];
  }
  const stack = [];
  stack.push([0, 0]);
  const seen = new Set();
  while (stack.length !== 0) {
    if (seen.has(hash(stack[stack.length - 1]))) {
      stack.pop();
      continue;
    }
    seen.add(hash(stack[stack.length - 1]));

    const state = stack.pop();
    const remain_x = state[0],
      remain_y = state[1];
    if (
      remain_x == targetCapacity ||
      remain_y == targetCapacity ||
      remain_x + remain_y == targetCapacity
    ) {
      return true;
    }
    // 把 X 壶灌满。
    stack.push([jug1Capacity, remain_y]);
    // 把 Y 壶灌满。
    stack.push([remain_x, jug2Capacity]);
    // 把 X 壶倒空。
    stack.push([0, remain_y]);
    // 把 Y 壶倒空。
    stack.push([remain_x, 0]);
    // 把 X 壶的水灌进 Y 壶，直至灌满或倒空。
    stack.push([
      remain_x - Math.min(remain_x, jug2Capacity - remain_y),
      remain_y + Math.min(remain_x, jug2Capacity - remain_y)
    ]);
    // 把 Y 壶的水灌进 X 壶，直至灌满或倒空。
    stack.push([
      remain_x + Math.min(remain_y, jug1Capacity - remain_x),
      remain_y - Math.min(remain_y, jug1Capacity - remain_x)
    ]);
  }
  return false;
}

// 官方题解 数学
// export default function canMeasureWater(
//   jug1Capacity: number,
//   jug2Capacity: number,
//   targetCapacity: number
// ): boolean {
//   if (jug1Capacity + jug2Capacity < targetCapacity) {
//     return false;
//   }
//   if (jug1Capacity == 0 || jug2Capacity == 0) {
//     return targetCapacity == 0 || jug1Capacity + jug2Capacity == targetCapacity;
//   }
//   function gcd(x: number, y: number) {
//     let remainder = x % y;
//     while (remainder != 0) {
//       x = y;
//       y = remainder;
//       remainder = x % y;
//     }
//     return y;
//   }

//   return targetCapacity % gcd(jug1Capacity, jug2Capacity) == 0;
// }
