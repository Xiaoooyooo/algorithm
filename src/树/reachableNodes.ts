// https://leetcode.cn/problems/reachable-nodes-with-restrictions/description/
// 现有一棵由 n 个节点组成的无向树，节点编号从 0 到 n - 1 ，共有 n - 1 条边。
// 给你一个二维整数数组 edges ，长度为 n - 1 ，其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条边。
// 另给你一个整数数组 restricted 表示 受限 节点。
// 在不访问受限节点的前提下，返回你可以从节点 0 到达的 最多 节点数目。
// 注意，节点 0 不 会标记为受限节点。

export default function reachableNodes(
  n: number,
  edges: number[][],
  restricted: number[]
): number {
  const restrictedSet = new Set(restricted);
  const grid = Array(n)
    .fill(0)
    .map(() => []);
  for (const [a, b] of edges) {
    grid[a].push(b);
    grid[b].push(a);
  }
  const visited = new Set();

  let res = 0;
  const queue = [0];
  while (queue.length) {
    const curr = queue.shift();
    if (visited.has(curr)) {
      continue;
    }
    visited.add(curr);
    if (restrictedSet.has(curr)) {
      continue;
    }
    res++;
    queue.push(...grid[curr]);
  }
  return res;
}
