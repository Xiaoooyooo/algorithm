// https://leetcode.cn/problems/binary-tree-postorder-traversal
// 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

declare class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null);
}

// 迭代改进
export default function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root === null) return res;
  const stack: TreeNode[] = [];
  let curr = root,
    prev: TreeNode; // 防止重复的标记
  while (curr != null || stack.length !== 0) {
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    if (curr.right === null || curr.right === prev) {
      res.push(curr.val);
      prev = curr;
      curr = null;
    } else {
      stack.push(curr);
      curr = curr.right;
    }
  }
  return res;
}

// 迭代
// export default function postorderTraversal(root: TreeNode | null): number[] {
//   const res: number[] = [];
//   if (root === null) return res;
//   const stack: { node: TreeNode; r: boolean }[] = []; // r: 防止重复的标记
//   let curr = root;
//   while (curr) {
//     if (curr.left !== null) {
//       stack.push({ node: curr, r: false });
//       curr = curr.left;
//       continue;
//     }
//     if (curr.right !== null) {
//       stack.push({ node: curr, r: true });
//       curr = curr.right;
//       continue;
//     }
//     res.push(curr.val);
//     if (stack.length === 0) break;
//     while (stack.length > 0) {
//       const item = stack.pop();
//       curr = item.node;
//       if (item.r === false && curr.right !== null) {
//         stack.push({ node: curr, r: true });
//         curr = curr.right;
//         break;
//       }
//       res.push(curr.val);
//       curr = null;
//     }
//   }
//   return res;
// }

// 递归
// export default function postorderTraversal(root: TreeNode | null): number[] {
//   const traversal = function (node: TreeNode | null, res = []) {
//     if (node === null) return res;
//     traversal(node.left, res);
//     traversal(node.right, res);
//     res.push(node.val);
//     return res;
//   };
//   return traversal(root);
// }
