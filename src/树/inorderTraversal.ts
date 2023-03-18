// https://leetcode.cn/problems/binary-tree-inorder-traversal
// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

// 迭代
export default function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root === null) return res;
  const stack: TreeNode[] = [];
  let curr = root;
  while (curr) {
    if (curr.left !== null) {
      stack.push(curr);
      curr = curr.left;
      continue;
    }
    res.push(curr.val);
    if (curr.right !== null) {
      curr = curr.right;
      continue;
    }
    if (stack.length === 0) break;
    while (stack.length > 0) {
      curr = stack.pop();
      res.push(curr.val);
      if (curr.right !== null) {
        curr = curr.right;
        break;
      }
      curr = null;
    }
  }
  return res;
}

// 递归
// export default function inorderTraversal(root: TreeNode | null): number[] {
//   const traversal = function (node: TreeNode | null, res = []) {
//     if (!node) return res;
//     traversal(node.left, res);
//     res.push(node.val);
//     traversal(node.right, res);
//     return res;
//   };
//   return traversal(root);
// }
