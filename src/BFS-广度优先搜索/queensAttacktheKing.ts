// 在一个 8x8 的棋盘上，放置着若干「黑皇后」和一个「白国王」。
// 给定一个由整数坐标组成的数组 queens ，表示黑皇后的位置；
// 以及一对坐标 king ，表示白国王的位置，返回所有可以攻击国王的皇后的坐标(任意顺序)。

export default function queensAttacktheKing(
  queens: number[][],
  king: number[]
): number[][] {
  const grid = Array(8)
    .fill(0)
    .map(() => Array(8).fill(0));
  for (let queen of queens) {
    grid[queen[0]][queen[1]] = 1;
  }
  const dirs = [
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1]
  ];
  function checkValid(value: number) {
    return value >= 0 && value < 8;
  }
  const queue = [];
  for (let dir of dirs) {
    queue.push([king[0] + dir[0], king[1] + dir[1]]);
  }
  const res = [];
  while (queue.length) {
    const dir = dirs.shift();
    const pos = queue.shift();
    if (!checkValid(pos[0]) || !checkValid(pos[1])) continue;
    if (grid[pos[0]][pos[1]] === 1) {
      res.push(pos);
    } else {
      dirs.push(dir);
      queue.push([pos[0] + dir[0], pos[1] + dir[1]]);
    }
  }
  return res;
}
