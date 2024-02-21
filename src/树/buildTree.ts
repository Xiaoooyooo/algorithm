// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
// 给定两个整数数组 preorder 和 inorder ，
// 其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

import { TreeNode } from "./Tree";

// dfs分治
export default function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const len = preorder.length;
  const inorderIndex = new Map();
  for (let i = 0; i < len; i++) {
    inorderIndex.set(inorder[i], i);
  }
  function dfs(
    preorderStart: number,
    preorderEnd: number,
    inorderStart: number,
    inorderEnd: number
  ) {
    if (preorderStart > preorderEnd) {
      return null;
    }
    const node = new TreeNode(preorder[preorderStart]);
    const nodeInorderIndex = inorderIndex.get(preorder[preorderStart]);
    const leftCount = nodeInorderIndex - inorderStart;
    node.left = dfs(
      preorderStart + 1,
      preorderStart + leftCount,
      inorderStart,
      nodeInorderIndex - 1
    );
    node.right = dfs(
      preorderStart + leftCount + 1,
      preorderEnd,
      nodeInorderIndex + 1,
      inorderEnd
    );
    return node;
  }
  return dfs(0, len - 1, 0, len - 1);
}

// 官方题解
// export default function buildTree(
//   preorder: number[],
//   inorder: number[]
// ): TreeNode | null {
//   const len = preorder.length;
//   const inorderIndex = new Map();
//   for (let i = 0; i < len; i++) {
//     inorderIndex.set(inorder[i], i);
//   }
//   function dfs(
//     preorder_left: number,
//     preorder_right: number,
//     inorder_left: number,
//     inorder_right: number
//   ) {
//     if (preorder_left > preorder_right) {
//       return null;
//     }

//     // 前序遍历中的第一个节点就是根节点
//     const preorder_root = preorder_left;
//     // 在中序遍历中定位根节点
//     const inorder_root = inorderIndex.get(preorder[preorder_root]);

//     // 先把根节点建立出来
//     const root = new TreeNode(preorder[preorder_root]);
//     // 得到左子树中的节点数目
//     const size_left_subtree = inorder_root - inorder_left;
//     // 递归地构造左子树，并连接到根节点
//     // 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
//     root.left = dfs(
//       preorder_left + 1,
//       preorder_left + size_left_subtree,
//       inorder_left,
//       inorder_root - 1
//     );
//     // 递归地构造右子树，并连接到根节点
//     // 先序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位+1 到 右边界」的元素
//     root.right = dfs(
//       preorder_left + size_left_subtree + 1,
//       preorder_right,
//       inorder_root + 1,
//       inorder_right
//     );
//     return root;
//   }

//   return dfs(0, len - 1, 0, len - 1);
// }
