// https://leetcode.cn/problems/binary-search-tree-to-greater-sum-tree/
// 给定一个二叉搜索树 root (BST)，请将它的每个节点的值替换成树中大于或者等于该节点值的所有节点值之和。
// 提醒一下， 二叉搜索树 满足下列约束条件：
// 节点的左子树仅包含键 小于 节点键的节点。
// 节点的右子树仅包含键 大于 节点键的节点。
// 左右子树也必须是二叉搜索树。

// 深度优先搜索
export default function bstToGst(root: TreeNode | null): TreeNode | null {
  let sum = 0;
  function dfs(node: TreeNode | null) {
    if (node === null) {
      return;
    }
    dfs(node.right);
    sum += node.val;
    node.val = sum;
    dfs(node.left);
  }
  dfs(root);
  return root;
}
