export default function countSpecialSubsequences(nums) {
  const MOD = 1e9 + 7;
  const dp = [0, 0, 0];
  for (let num of nums) {
    if (num === 0) {
      dp[0] = (2 * dp[0] + 1) % MOD;
    } else if (num === 1) {
      dp[1] = (dp[1] * 2 + dp[0]) % MOD;
    } else if (num === 2) {
      dp[2] = (dp[2] * 2 + dp[1]) % MOD;
    }
  }
  return dp[2];
}
