// https://leetcode.cn/problems/diameter-of-binary-tree/
// 给定一棵二叉树，你需要计算它的直径长度。
// 一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
// 这条路径可能穿过也可能不穿过根结点。

declare class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null);
}

export default function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0;
  const find = function (node: TreeNode) {
    if (node === null) return 0;
    const left = find(node.left);
    const right = find(node.right);
    res = Math.max(res, left + right);
    return 1 + Math.max(left, right);
  };
  const l = find(root.left) + find(root.right);
  res = Math.max(res, l);
  return res;
}
