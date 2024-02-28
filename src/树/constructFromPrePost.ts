// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/
// 给定两个整数数组，preorder 和 postorder ，其中 preorder 是一个具有 无重复 值的二叉树的前序遍历，postorder 是同一棵树的后序遍历，重构并返回二叉树。
// 如果存在多个答案，您可以返回其中 任何 一个。

import { TreeNode } from "./Tree";

export default function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  const len = preorder.length;
  const postorderIndex = new Map();
  for (let i = 0; i < len; i++) {
    postorderIndex.set(postorder[i], i);
  }
  function dfs(
    preorderStart: number,
    preorderEnd: number,
    postorderStart: number,
    postorderEnd: number
  ) {
    if (preorderStart > preorderEnd || postorderStart > postorderEnd) {
      return null;
    }
    const node = new TreeNode(preorder[preorderStart]);
    if (preorderStart + 1 <= preorderEnd) {
      const leftNodeVal = preorder[preorderStart + 1];
      const leftCount = postorderIndex.get(leftNodeVal) - postorderStart + 1;
      node.left = dfs(
        preorderStart + 1,
        preorderStart + leftCount,
        postorderStart,
        postorderStart + leftCount - 1
      );
      node.right = dfs(
        preorderStart + leftCount + 1,
        preorderEnd,
        postorderStart + leftCount,
        postorderEnd - 1
      );
    }

    return node;
  }
  return dfs(0, len - 1, 0, len - 1);
}
