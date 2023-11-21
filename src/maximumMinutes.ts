// https://leetcode.cn/problems/escape-the-spreading-fire/
// 给你一个下标从 0 开始大小为 m x n 的二维整数数组 grid ，它表示一个网格图。每个格子为下面 3 个值之一：
// 0 表示草地。
// 1 表示着火的格子。
// 2 表示一座墙，你跟火都不能通过这个格子。
// 一开始你在最左上角的格子 (0, 0) ，你想要到达最右下角的安全屋格子 (m - 1, n - 1) 。
// 每一分钟，你可以移动到 相邻 的草地格子。每次你移动 之后 ，着火的格子会扩散到所有不是墙的 相邻 格子。
// 请你返回你在初始位置可以停留的 最多 分钟数，且停留完这段时间后你还能安全到达安全屋。
// 如果无法实现，请你返回 -1 。如果不管你在初始位置停留多久，你 总是 能到达安全屋，请你返回 109 。
// 注意，如果你到达安全屋后，火马上到了安全屋，这视为你能够安全到达安全屋。
// 如果两个格子有共同边，那么它们为 相邻 格子。

// *
export default function maximumMinutes(grid: number[][]): number {
  const rows = grid.length,
    cols = grid[0].length;

  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];
  const onFireTimes = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(1e9));
  const getOnFireTimes = function () {
    const queue = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 1) queue.push([i, j]);
      }
    }
    let time = 0;
    const visited = Array(rows)
      .fill(0)
      .map(() => Array(cols).fill(false));
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [x, y] = queue.shift();
        visited[x][y] = true;
        onFireTimes[x][y] = time;
        for (const [dx, dy] of dirs) {
          const _x = x + dx,
            _y = y + dy;
          if (_x >= 0 && _x < rows && _y >= 0 && _y < cols) {
            if (visited[_x][_y] || grid[_x][_y] === 2) continue;
            queue.push([_x, _y]);
          }
        }
      }
      time++;
    }
  };
  /** 找到从起点到安全屋的最短时间 */
  const getArriveTime = function (stayTime: number) {
    const visit = new Array(rows)
      .fill(0)
      .map(() => new Array(cols).fill(false));
    let q = [[0, 0, stayTime]];
    while (q.length > 0) {
      const tmp = q;
      q = [];
      for (const [cx, cy, time] of tmp) {
        for (const [i, j] of dirs) {
          const nx = cx + i;
          const ny = cy + j;
          if (nx >= 0 && ny >= 0 && nx < rows && ny < cols) {
            if (visit[nx][ny] || grid[nx][ny] == 2) {
              continue;
            }
            /* 到达安全屋 */
            if (nx == rows - 1 && ny == cols - 1) {
              return time + 1;
            }
            /* 火未到达当前位置 */
            if (onFireTimes[nx][ny] > time + 1) {
              q.push([nx, ny, time + 1]);
              visit[nx][ny] = true;
            }
          }
        }
      }
    }
    return -1;
  };
  getOnFireTimes();
  const arriveTime = getArriveTime(0);
  /* 安全屋不可达 */
  if (arriveTime < 0) {
    return -1;
  }
  /* 火不会到达安全屋 */
  if (onFireTimes[rows - 1][cols - 1] == 1e9) {
    return 1e9;
  }
  const ans = onFireTimes[rows - 1][cols - 1] - arriveTime;
  return getArriveTime(ans) >= 0 ? ans : ans - 1;
}
