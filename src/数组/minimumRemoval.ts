// https://leetcode.cn/problems/removing-minimum-number-of-magic-beans/description/
// 给定一个 正整数 数组 beans ，其中每个整数表示一个袋子里装的魔法豆的数目。
// 请你从每个袋子中 拿出 一些豆子（也可以 不拿出），使得剩下的 非空 袋子中（即 至少还有一颗 魔法豆的袋子）魔法豆的数目 相等。
// 一旦把魔法豆从袋子中取出，你不能再将它放到任何袋子中。
// 请返回你需要拿出魔法豆的 最少数目。

export default function minimumRemoval(beans: number[]): number {
  beans.sort((a, b) => a - b);
  const len = beans.length;
  const total = beans.reduce((a, b) => a + b, 0);
  let res = Number.MAX_SAFE_INTEGER;
  let p = 0;
  for (let i = 0; i < len; i++) {
    if (beans[i] === p) {
      continue;
    }
    const r = total - (len - i) * beans[i];
    res = Math.min(res, r);
    p = beans[i];
  }
  return res;
}
