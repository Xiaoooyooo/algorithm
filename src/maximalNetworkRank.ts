// 链接：https://leetcode.cn/problems/maximal-network-rank
// n 座城市和一些连接这些城市的道路 roads 共同组成一个基础设施网络。
// 每个 roads[i] = [ai, bi] 都表示在城市 ai 和 bi 之间有一条双向道路。
// 两座不同城市构成的 城市对 的 网络秩 定义为：与这两座城市 直接 相连的道路总数。
// 如果存在一条道路直接连接这两座城市，则这条道路只计算 一次 。
// 整个基础设施网络的 最大网络秩 是所有不同城市对中的 最大网络秩 。
// 给你整数 n 和数组 roads，返回整个基础设施网络的 最大网络秩 。

export default function maximalNetworkRank(
  n: number,
  roads: number[][]
): number {
  const arr = Array(n).fill(0);
  const len = roads.length;
  const set = new Set();
  for (let i = 0; i < len; i++) {
    const [a, b] = roads[i];
    arr[a] += 1;
    arr[b] += 1;
    const k = a < b ? `${a}${b}` : `${b}${a}`;
    set.add(k);
  }
  let res = 0;
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (set.has(`${i}${j}`)) {
        res = Math.max(res, arr[i] + arr[j] - 1);
      } else {
        res = Math.max(res, arr[i] + arr[j]);
      }
    }
  }
  return res;
}
