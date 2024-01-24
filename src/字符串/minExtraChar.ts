// https://leetcode.cn/problems/extra-characters-in-a-string/description/
// 给你一个下标从 0 开始的字符串 s 和一个单词字典 dictionary 。
// 你需要将 s 分割成若干个 互不重叠 的子字符串，每个子字符串都在 dictionary 中出现过。
// s 中可能会有一些 额外的字符 不在任何子字符串中。
// 请你采取最优策略分割 s ，使剩下的字符 最少 。

// 官方题解 动态规划
export default function minExtraChar(s: string, dictionary: string[]): number {
  const n = s.length;
  const d = Array(n + 1).fill(Number.MAX_VALUE);
  const map = new Map<string, number>();
  for (const str of dictionary) {
    map.set(str, (map.get(str) || 0) + 1);
  }
  d[0] = 0;
  for (let i = 1; i <= n; i++) {
    d[i] = d[i - 1] + 1;
    for (let j = i - 1; j >= 0; j--) {
      if (map.has(s.substring(j, i))) {
        d[i] = Math.min(d[i], d[j]);
      }
    }
  }
  return d[n];
}
