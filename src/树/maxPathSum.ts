// https://leetcode.cn/problems/binary-tree-maximum-path-sum/
// 二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
// 路径和 是路径中各节点值的总和。
// 给你一个二叉树的根节点 root ，返回其 最大路径和 。

// 回溯
export default function maxPathSum(root: TreeNode | null): number {
  if (root === null) return 0;
  let res = Number.MIN_SAFE_INTEGER;
  function dfs(node: TreeNode, sum: number) {
    let left = 0,
      right = 0;
    const max = Math.max(node.val, sum + node.val);
    if (node.left) {
      left = Math.max(left, dfs(node.left, max));
    }
    if (node.right) {
      right = Math.max(right, dfs(node.right, max));
    }
    const _max = node.val + Math.max(left + sum, right + sum, left + right, 0);
    res = Math.max(res, _max);
    return node.val + Math.max(left, right, 0);
  }
  dfs(root, 0);
  return res;
}

// export default function maxPathSum(root: TreeNode | null): number {
//   if (root === null) return 0;
//   let res = Number.MIN_SAFE_INTEGER;
//   const stack: TreeNode[] = [];
//   const queue: number[] = [];
//   stack.push(root);
//   queue.push(root.val);
//   while (stack.length) {
//     const curr = stack[stack.length - 1];
//     const max = queue[0];
//     if (curr.left) {
//       stack.push(curr.left);
//       const _max = Math.max(curr.left.val, curr.left.val + max);
//       res = Math.max(res, _max);
//       queue.push(_max);
//     } else if (curr.right) {
//       stack.push(curr.right);
//       const _max = Math.max(curr.right.val, curr.right.val + max);
//       res = Math.max(res, _max);
//       queue.push(_max);
//     } else {
//       stack.pop();
//       queue.shift();
//     }
//   }
// }
