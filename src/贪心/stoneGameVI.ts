// https://leetcode.cn/problems/stone-game-vi/description/
// Alice 和 Bob 轮流玩一个游戏，Alice 先手。
// 一堆石子里总共有 n 个石子，轮到某个玩家时，他可以 移出 一个石子并得到这个石子的价值。Alice 和 Bob 对石子价值有 不一样的的评判标准 。双方都知道对方的评判标准。
// 给你两个长度为 n 的整数数组 aliceValues 和 bobValues 。aliceValues[i] 和 bobValues[i] 分别表示 Alice 和 Bob 认为第 i 个石子的价值。
// 所有石子都被取完后，得分较高的人为胜者。如果两个玩家得分相同，那么为平局。两位玩家都会采用 最优策略 进行游戏。
// 请你推断游戏的结果，用如下的方式表示：
// 如果 Alice 赢，返回 1 。
// 如果 Bob 赢，返回 -1 。
// 如果游戏平局，返回 0 。

// 贪心
export default function stoneGameVI(
  aliceValues: number[],
  bobValues: number[]
): number {
  const len = aliceValues.length;
  // 假设两个石头，对应的价值为 [ai, aj], [bi, bj]
  // 如果 alice 选择了 i，那么她与 bob 之间得到得分数差为 ai - bj
  // 如果 alice 选择了 j，那么她与 bob 之间得到的分数差为 aj - bi
  // 对于 alice 而言，如果她选择了 i，那么 alice 的选择方案一定满足 ai - bj > aj - bi ==> ai + bi > aj + bj
  // 如果她选择了 j，那么 alice 的选择方案一定满足 aj - bi > ai - bj ==> aj + bj > ai + bi
  // 因此 alice 应尽量选择 a + b 最大的数
  const arr = Array(len)
    .fill(0)
    .map((e, i) => [aliceValues[i] + bobValues[i], i])
    .sort((a, b) => b[0] - a[0]);
  let alice = 0,
    bob = 0;
  for (let i = 0; i < len; i++) {
    const curr = arr[i];
    if (!(i & 1)) {
      alice += aliceValues[curr[1]];
    } else {
      bob += bobValues[curr[1]];
    }
  }
  if (alice === bob) {
    return 0;
  }
  return alice > bob ? 1 : -1;
}
