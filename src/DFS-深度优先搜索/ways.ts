// https://leetcode.cn/problems/number-of-ways-of-cutting-a-pizza/
// 给你一个 rows x cols 大小的矩形披萨和一个整数 k ，矩形包含两种字符： 'A' （表示苹果）和 '.' （表示空白格子）。
// 你需要切披萨 k-1 次，得到 k 块披萨并送给别人。
// 切披萨的每一刀，先要选择是向垂直还是水平方向切，再在矩形的边界上选一个切的位置，将披萨一分为二。
// 如果垂直地切披萨，那么需要把左边的部分送给一个人，如果水平地切，那么需要把上面的部分送给一个人。
// 在切完最后一刀后，需要把剩下来的一块送给最后一个人。
// 请你返回确保每一块披萨包含 至少 一个苹果的切披萨方案数。
// 由于答案可能是个很大的数字，请你返回它对 10^9 + 7 取余的结果。

// 动态规划
export default function ways(pizza: string[], k: number): number {
  const m = pizza.length,
    n = pizza[0].length,
    mod = 10 ** 9 + 7;
  const apples = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));
  const dp = Array(k + 1)
    .fill(0)
    .map(() =>
      Array(m + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0))
    );
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      apples[i][j] =
        apples[i][j + 1] +
        apples[i + 1][j] -
        apples[i + 1][j + 1] +
        (pizza[i].charAt(j) == "A" ? 1 : 0);
      dp[1][i][j] = apples[i][j] > 0 ? 1 : 0;
    }
  }

  // 预处理
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      apples[i][j] =
        apples[i][j + 1] +
        apples[i + 1][j] -
        apples[i + 1][j + 1] +
        (pizza[i].charAt(j) == "A" ? 1 : 0);
      dp[1][i][j] = apples[i][j] > 0 ? 1 : 0;
    }
  }

  for (let ki = 2; ki <= k; ki++) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // 水平方向切
        for (let i2 = i + 1; i2 < m; i2++) {
          if (apples[i][j] > apples[i2][j]) {
            dp[ki][i][j] = (dp[ki][i][j] + dp[ki - 1][i2][j]) % mod;
          }
        }
        // 垂直方向切
        for (let j2 = j + 1; j2 < n; j2++) {
          if (apples[i][j] > apples[i][j2]) {
            dp[ki][i][j] = (dp[ki][i][j] + dp[ki - 1][i][j2]) % mod;
          }
        }
      }
    }
  }
  return dp[k][0][0];
}

// 回溯
// export default function ways(pizza: string[], k: number): number {
//   const rows = pizza.length,
//     cols = pizza[0].length;
//   const n = 10 ** 9 + 7;
//   const map = new Map();
//   function dfs(row: number, col: number, k: number) {
//     const key = row + "," + col + "," + k;
//     if (map.has(key)) return map.get(key);
//     let left = 0;
//     for (let i = row; i < rows; i++) {
//       for (let j = col; j < cols; j++) {
//         if (pizza[i][j] === "A") left++;
//       }
//     }
//     if (left < k) {
//       // 剩下的苹果不够分了
//       map.set(key, 0);
//       return 0;
//     }
//     if (k === 1) {
//       // 只剩一个人了，全部给他
//       map.set(key, 1);
//       return 1;
//     }
//     let total = 0,
//       flag = false;
//     for (let i = row; i < rows - 1; i++) {
//       for (let j = col; j < cols; j++) {
//         if (!flag && pizza[i][j] === "A") {
//           // 找到一个有苹果的行，切一下
//           total += dfs(i + 1, col, k - 1);
//           flag = true;
//           break;
//         } else if (flag) {
//           // 如果如果前面的行已经找到苹果了，那么后面可以在任意位置切了
//           total += dfs(i + 1, col, k - 1);
//           break;
//         }
//       }
//     }
//     flag = false;
//     for (let j = col; j < cols - 1; j++) {
//       for (let i = row; i < rows; i++) {
//         if (!flag && pizza[i][j] === "A") {
//           total += dfs(row, j + 1, k - 1);
//           flag = true;
//           break;
//         } else if (flag) {
//           total += dfs(row, j + 1, k - 1);
//           break;
//         }
//       }
//     }
//     total %= n;
//     map.set(key, total);
//     return total;
//   }
//   return dfs(0, 0, k);
// }
