// 链接：https://leetcode.cn/problems/divisor-game
// 爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。
// 最初，黑板上有一个数字 n 。在每个玩家的回合，玩家需要执行以下操作：
// 选出任一 x，满足 0 < x < n 且 n % x == 0 。0 <= n <= 1000
// 用 n - x 替换黑板上的数字 n 。
// 如果玩家无法执行这些操作，就会输掉游戏。
// 只有在爱丽丝在游戏中取得胜利时才返回 true 。
// 假设两个玩家都以最佳状态参与游戏。

export default function divisorGame(n: number) {
  const dp = [undefined]; // n 取 0 无意义
  dp[1] = false; // n 为 1 时游戏结束，此时行动的玩家落败
  for (let i = 2; i <= n; i++) {
    dp[i] = false; // 初始化为 false
    for (let x = 1; x < i; x++) {
      if (i % x === 0 && !dp[i - x]) {
        // dp[i] 能否获胜取决于 dp[i - x] 能否获胜
        // 如果 dp[i - x] 不能获胜，那么就算 dp[i] 获胜了
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}
