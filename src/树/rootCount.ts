// https://leetcode.cn/problems/count-number-of-possible-root-nodes/description/
// Alice 有一棵 n 个节点的树，节点编号为 0 到 n - 1 。树用一个长度为 n - 1 的二维整数数组 edges 表示，其中 edges[i] = [ai, bi] ，表示树中节点 ai 和 bi 之间有一条边。
// Alice 想要 Bob 找到这棵树的根。她允许 Bob 对这棵树进行若干次 猜测 。每一次猜测，Bob 做如下事情：
// 选择两个 不相等 的整数 u 和 v ，且树中必须存在边 [u, v] 。
// Bob 猜测树中 u 是 v 的 父节点 。
// Bob 的猜测用二维整数数组 guesses 表示，其中 guesses[j] = [uj, vj] 表示 Bob 猜 uj 是 vj 的父节点。
// Alice 非常懒，她不想逐个回答 Bob 的猜测，只告诉 Bob 这些猜测里面 至少 有 k 个猜测的结果为 true 。
// 给你二维整数数组 edges ，Bob 的所有猜测和整数 k ，请你返回可能成为树根的 节点数目 。如果没有这样的树，则返回 0。

// * 官方题解
export default function rootCount(
  edges: number[][],
  guesses: number[][],
  k: number
): number {
  const n = edges.length + 1;
  const g: number[][] = Array.from({ length: n }, () => []);
  const st: Set<number> = new Set();
  const h = (x: number, y: number) => {
    return (x << 20) | y;
  };

  edges.forEach((v) => {
    g[v[0]].push(v[1]);
    g[v[1]].push(v[0]);
  });

  guesses.forEach((v) => {
    st.add(h(v[0], v[1]));
  });

  let cnt = 0;
  let res = 0;

  function dfs(x: number, fat: number): void {
    for (const y of g[x]) {
      if (y === fat) {
        continue;
      }
      cnt += Number(st.has(h(x, y)));
      dfs(y, x);
    }
  }
  dfs(0, -1);

  function redfs(x: number, fat: number, cnt: number): void {
    if (cnt >= k) {
      res++;
    }
    for (const y of g[x]) {
      if (y === fat) {
        continue;
      }
      redfs(y, x, cnt - Number(st.has(h(x, y))) + Number(st.has(h(y, x))));
    }
  }
  redfs(0, -1, cnt);
  return res;
}
