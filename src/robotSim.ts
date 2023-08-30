// https://leetcode.cn/problems/walking-robot-simulation/
// 机器人在一个无限大小的 XY 网格平面上行走，从点 (0, 0) 处开始出发，面向北方。
// 该机器人可以接收以下三种类型的命令 commands ：
// -2 ：向左转 90 度
// -1 ：向右转 90 度
// 1 <= x <= 9 ：向前移动 x 个单位长度
// 在网格上有一些格子被视为障碍物 obstacles 。第 i 个障碍物位于网格点  obstacles[i] = (xi, yi) 。
// 机器人无法走到障碍物上，它将会停留在障碍物的前一个网格方块上，但仍然可以继续尝试进行该路线的其余部分。
// 返回从原点到机器人所有经过的路径点（坐标为整数）的最大欧式距离的平方。（即，如果距离为 5 ，则返回 25 ）
// 注意：
// 北表示 +Y 方向。
// 东表示 +X 方向。
// 南表示 -Y 方向。
// 西表示 -X 方向。

export default function robotSim(
  commands: number[],
  obstacles: number[][]
): number {
  const obstaclesSet = new Set();
  for (let item of obstacles) {
    obstaclesSet.add(item.join(","));
  }
  /**
   * 0 北
   * 1 东
   * 2 南
   * 3 西
   */
  let direction = 0;
  let x = 0,
    y = 0;
  let res = 0;
  for (let i = 0, len = commands.length; i < len; i++) {
    const c = commands[i];
    if (c === -1) {
      direction = (direction + 1) % 4;
    } else if (c === -2) {
      direction = (direction - 1 + 4) % 4;
    } else {
      move(c);
    }
  }

  function move(step: number) {
    let dx = 0,
      dy = 0;
    if (direction === 0) dy = 1;
    else if (direction === 1) dx = 1;
    else if (direction === 2) dy = -1;
    else dx = -1;
    let _step = 0;
    while (_step < step) {
      const _x = x + dx,
        _y = y + dy;
      if (obstaclesSet.has(_x + "," + _y)) return;
      else {
        x = _x;
        y = _y;
        res = Math.max(res, x * x + y * y);
      }
      _step++;
    }
  }
  return res;
}
