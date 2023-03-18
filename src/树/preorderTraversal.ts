// https://leetcode.cn/problems/binary-tree-preorder-traversal
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

// 迭代与栈结合
export default function preorderTraversal(root: TreeNode | null) {
  const res: number[] = [];
  if (root === null) return res;
  const stack: TreeNode[] = []; // 用来保存已经遍历过的根节点的栈
  let curr = root;
  // eslint-disable-next-line
  while (curr) {
    res.push(curr.val);
    if (curr.left !== null) {
      // 如果这个节点的左节点不为空，那么继续遍历左节点，并将这个节点推入栈
      stack.push(curr);
      curr = curr.left;
      continue;
    }
    if (curr.right !== null) {
      // 如果这个节点的右节点不为空，那么遍历这个右节点
      curr = curr.right;
      continue;
    }
    if (stack.length === 0) break;
    // 如果这个节点没有子节点，那么就开始从栈中读取已经被遍历过的根节点
    while (stack.length > 0) {
      // 并检查它的右节点
      curr = stack.pop().right;
      // 如果右节点为空，那么继续读取之前的根节点
      if (curr === null) continue;
      // 如果右节点存在，将它输出到结果中
      res.push(curr.val);
      if (curr.left !== null) {
        // 如果这个右节点又存在一个左节点
        // 那么将这个右节点推入到栈中
        stack.push(curr);
        // 并遍历这个左节点
        curr = curr.left;
        break;
      }
      if (curr.right !== null) {
        // 如果这个右节点存在一个子右节点，那么直接遍历这个子右节点
        curr = curr.right;
        break;
      }
      // 这个节点没有子节点了，要么在从 stack 中读取前面的根节点，要么就结束了
      // 因为可能是结束了，所以将 curr 置为 null 以结束循环
      curr = null;
    }
  }
  return res;
}

// 递归
// export default function preorderTraversal(root: TreeNode | null) {
//   const traversal = function (node: TreeNode, res = []) {
//     if (!node) return res;
//     res.push(node.val);
//     traversal(node.left, res);
//     traversal(node.right, res);
//     return res;
//   };
//   return traversal(root);
// }
