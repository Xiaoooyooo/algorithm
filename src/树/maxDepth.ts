// https://leetcode.cn/problems/maximum-depth-of-binary-tree/
// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。

export default function maxDepth(root: TreeNode | null): number {
  const find = function (node: TreeNode | null, depth: number) {
    if (node === null) return depth;
    const leftDepth = find(node.left, depth + 1);
    const rightDepth = find(node.right, depth + 1);
    return Math.max(leftDepth, rightDepth);
  };
  return find(root, 0);
}
