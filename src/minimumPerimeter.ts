// https://leetcode.cn/problems/minimum-garden-perimeter-to-collect-enough-apples/
// 给你一个用无限二维网格表示的花园，每一个 整数坐标处都有一棵苹果树。整数坐标 (i, j) 处的苹果树有 |i| + |j| 个苹果。
// 你将会买下正中心坐标是 (0, 0) 的一块 正方形土地 ，且每条边都与两条坐标轴之一平行。
// 给你一个整数 neededApples ，请你返回土地的 最小周长 ，使得 至少 有 neededApples 个苹果在土地 里面或者边缘上。
// |x| 的值定义为：
// 如果 x >= 0 ，那么值为 x
// 如果 x < 0 ，那么值为 -x

export default function minimumPerimeter(neededApples: number): number {
  let d = 0;
  let sum = 0;
  while (sum < neededApples) {
    d++;
    // (d, d)
    let temp = (d + d) / 2;
    // (0, d) or (d, 0)
    temp += d / 2;
    temp += d * (d - 1) + ((d - 1) * d) / 2;
    sum += temp * 8;
  }
  return d * 8;
}
