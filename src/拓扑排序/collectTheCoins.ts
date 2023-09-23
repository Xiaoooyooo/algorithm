// 给你一个 n 个节点的无向无根树，节点编号从 0 到 n - 1 。
// 给你整数 n 和一个长度为 n - 1 的二维整数数组 edges ，其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间有一条边。
// 再给你一个长度为 n 的数组 coins ，其中 coins[i] 可能为 0 也可能为 1 ，1 表示节点 i 处有一个金币。
// 一开始，你需要选择树中任意一个节点出发。你可以执行下述操作任意次：
// 收集距离当前节点距离为 2 以内的所有金币，或者
// 移动到树中一个相邻节点。
// 你需要收集树中所有的金币，并且回到出发节点，请你返回最少经过的边数。
// 如果你多次经过一条边，每一次经过都会给答案加一。

// * 官方题解 拓扑排序
export default function collectTheCoins(
  coins: number[],
  edges: number[][]
): number {
  let n = coins.length;
  let g = new Array(n).fill(0).map(() => new Array());
  let degree = new Array(n).fill(0);
  for (const edge of edges) {
    let x = edge[0],
      y = edge[1];
    g[x].push(y);
    g[y].push(x);
    degree[x]++;
    degree[y]++;
  }

  let rest = n;
  let q = [];
  // 删除树中所有无金币的叶子节点，直到树中所有的叶子节点都是含有金币的
  for (let i = 0; i < n; i++) {
    if (degree[i] == 1 && coins[i] == 0) {
      q.push(i);
    }
  }
  while (q.length > 0) {
    const u = q.shift();
    degree[u]--;
    rest--;
    for (const v of g[u]) {
      degree[v]--;
      if (degree[v] == 1 && coins[v] == 0) {
        q.push(v);
      }
    }
  }

  // 删除树中所有的叶子节点, 连续删除2次
  for (let j = 0; j < 2; j++) {
    let q = [];
    for (let i = 0; i < n; i++) {
      if (degree[i] == 1) {
        q.push(i);
      }
    }
    while (q.length > 0) {
      const u = q.shift();
      degree[u]--;
      rest--;
      for (const v of g[u]) {
        degree[v]--;
      }
    }
  }

  return rest == 0 ? 0 : (rest - 1) * 2;
}
