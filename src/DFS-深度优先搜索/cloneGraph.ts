// 链接：https://leetcode.cn/leetbook/read/queue-stack/gmcr6/
// 给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。
// 图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。
// 测试用例格式：
// 简单起见，每个节点的值都和它的索引相同。
// 例如，第一个节点值为 1（val = 1），第二个节点值为 2（val = 2），以此类推。
// 该图在测试用例中使用邻接列表表示。
// 邻接列表 是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。
// 给定节点将始终是图中的第一个节点（值为 1）。你必须将 给定节点的拷贝 作为对克隆图的引用返回。

declare class Node {
  public val: number;
  public neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]);
}

export default function cloneGraph(node: Node | null): Node | null {
  if (node === null) return null;
  const visited = new Map();
  function dfs(node: Node) {
    if (visited.has(node.val)) return visited.get(node.val);
    const neighbors: Node[] = [];
    const newNode = new Node(node.val, neighbors);
    visited.set(node.val, newNode);
    for (let i = 0; i < node.neighbors.length; i++) {
      neighbors.push(dfs(node.neighbors[i]));
    }
    return newNode;
  }
  return dfs(node);
}
