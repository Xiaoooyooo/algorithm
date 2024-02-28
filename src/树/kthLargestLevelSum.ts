// https://leetcode.cn/problems/kth-largest-sum-in-a-binary-tree/description/
// 给你一棵二叉树的根节点 root 和一个正整数 k 。
// 树中的 层和 是指 同一层 上节点值的总和。
// 返回树中第 k 大的层和（不一定不同）。如果树少于 k 层，则返回 -1 。
// 注意，如果两个节点与根节点的距离相同，则认为它们在同一层。

export default function kthLargestLevelSum(
  root: TreeNode | null,
  k: number
): number {
  if (root === null) {
    return -1;
  }
  const queue = [root];
  const sums = [];
  while (queue.length) {
    const len = queue.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      const curr = queue.shift();
      sum += curr.val;
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    sums.push(sum);
  }
  if (k > sums.length) {
    return -1;
  }
  return sums.sort((a, b) => b - a)[k - 1];
}
