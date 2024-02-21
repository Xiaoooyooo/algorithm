// https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

import { TreeNode } from "./Tree";

export default function buildTree2(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  const len = inorder.length;
  const inorderIndex = new Map();
  for (let i = 0; i < len; i++) {
    inorderIndex.set(inorder[i], i);
  }
  function dfs(
    postorderStart: number,
    postorderEnd: number,
    inorderStart: number,
    inorderEnd: number
  ) {
    if (postorderEnd < postorderStart || inorderEnd < inorderStart) {
      return null;
    }
    const node = new TreeNode(postorder[postorderEnd]);
    const nodeInorderIndex = inorderIndex.get(postorder[postorderEnd]);
    const leftCount = nodeInorderIndex - inorderStart;
    node.left = dfs(
      postorderStart,
      postorderStart + leftCount - 1,
      inorderStart,
      nodeInorderIndex - 1
    );
    node.right = dfs(
      postorderStart + leftCount,
      postorderEnd - 1,
      nodeInorderIndex + 1,
      inorderEnd
    );
    return node;
  }
  return dfs(0, len - 1, 0, len - 1);
}
