// https://leetcode.cn/problems/card-flipping-game/description/
// 在桌子上有 N 张卡片，每张卡片的正面和背面都写着一个正数（正面与背面上的数有可能不一样）。
// 我们可以先翻转任意张卡片，然后选择其中一张卡片。
// 如果选中的那张卡片背面的数字 X 与任意一张卡片的正面的数字都不同，那么这个数字是我们想要的数字。
// 哪个数是这些想要的数字中最小的数（找到这些数中的最小值）呢？如果没有一个数字符合要求的，输出 0。
// 其中, fronts[i] 和 backs[i] 分别代表第 i 张卡片的正面和背面的数字。
// 如果我们通过翻转卡片来交换正面与背面上的数，那么当初在正面的数就变成背面的数，背面的数就变成正面的数。
export default function flipgame(fronts: number[], backs: number[]): number {
  const len = fronts.length;
  const forbidden = new Set();
  const available = new Set();
  let max = 0;
  for (let i = 0; i < len; i++) {
    if (fronts[i] === backs[i]) {
      forbidden.add(fronts[i]);
    }
    available.add(fronts[i]);
    available.add(backs[i]);
    max = Math.max(max, fronts[i], backs[i]);
  }
  let res = 1;
  while (res <= max) {
    if (!forbidden.has(res) && available.has(res)) {
      return res;
    }
    res++;
  }
  return 0;
}
