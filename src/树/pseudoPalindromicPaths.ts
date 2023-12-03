// https://leetcode.cn/problems/pseudo-palindromic-paths-in-a-binary-tree/
// 给你一棵二叉树，每个节点的值为 1 到 9 。我们称二叉树中的一条路径是 「伪回文」的，当它满足：路径经过的所有节点值的排列中，存在一个回文序列。
// 请你返回从根到叶子节点的所有路径中 伪回文 路径的数目。

export default function pseudoPalindromicPaths(root: TreeNode | null): number {
  const queue: [TreeNode, Set<number>][] = [[root, new Set()]];
  let res = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [node, set] = queue.shift();
      if (set.has(node.val)) {
        set.delete(node.val);
      } else {
        set.add(node.val);
      }
      if (node.left) {
        queue.push([node.left, new Set(set)]);
      }
      if (node.right) {
        queue.push([node.right, new Set(set)]);
      }
      if (!node.left && !node.right) {
        const size = set.size;
        if (size === 1 || size === 0) {
          res += 1;
        }
      }
    }
  }
  return res;
}
