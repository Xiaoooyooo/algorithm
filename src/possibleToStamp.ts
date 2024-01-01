// https://leetcode.cn/problems/stamping-the-grid/
// 给你一个 m x n 的二进制矩阵 grid ，每个格子要么为 0 （空）要么为 1 （被占据）。
// 给你邮票的尺寸为 stampHeight x stampWidth 。我们想将邮票贴进二进制矩阵中，且满足以下 限制 和 要求 ：
//   覆盖所有 空 格子。
//   不覆盖任何 被占据 的格子。
//   我们可以放入任意数目的邮票。
//   邮票可以相互有 重叠 部分。
//   邮票不允许 旋转 。
//   邮票必须完全在矩阵 内 。
// 如果在满足上述要求的前提下，可以放入邮票，请返回 true ，否则返回 false 。

// * 官方题解 二维前缀和与二维差分
export default function possibleToStamp(
  grid: number[][],
  stampHeight: number,
  stampWidth: number
): boolean {
  const m = grid.length,
    n = grid[0].length;
  const psum = new Array(m + 2).fill(0).map(() => new Array(n + 2).fill(0));
  const diff = new Array(m + 2).fill(0).map(() => new Array(n + 2).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      psum[i][j] =
        psum[i - 1][j] +
        psum[i][j - 1] -
        psum[i - 1][j - 1] +
        grid[i - 1][j - 1];
    }
  }

  for (let i = 1; i + stampHeight - 1 <= m; i++) {
    for (let j = 1; j + stampWidth - 1 <= n; j++) {
      const x = i + stampHeight - 1;
      const y = j + stampWidth - 1;
      if (
        psum[x][y] - psum[x][j - 1] - psum[i - 1][y] + psum[i - 1][j - 1] ==
        0
      ) {
        diff[i][j]++;
        diff[i][y + 1]--;
        diff[x + 1][j]--;
        diff[x + 1][y + 1]++;
      }
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      diff[i][j] += diff[i - 1][j] + diff[i][j - 1] - diff[i - 1][j - 1];
      if (diff[i][j] == 0 && grid[i - 1][j - 1] == 0) {
        return false;
      }
    }
  }
  return true;
}
