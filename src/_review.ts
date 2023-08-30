export default function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;
  const len = coins.length;
  const dp = Array(amount + 1).fill(0);
  for (let coin of coins) {
    if (coin <= amount) dp[coin] = 1;
  }
  for (let i = 1; i <= amount; i++) {
    if (dp[i] === 0) continue;
    for (let j = 0; j < len; j++) {
      if (i + coins[j] <= amount) {
        if (dp[i + coins[j]] === 0) {
          dp[i + coins[j]] = dp[i] + 1;
        } else {
          dp[i + coins[j]] = Math.min(dp[i + coins[j]], dp[i] + 1);
        }
      }
    }
  }
  // console.log(dp);
  return dp[amount] || -1;
}
