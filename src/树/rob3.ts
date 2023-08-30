// https://leetcode.cn/problems/house-robber-iii/
// 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。
// 除了 root 之外，每栋房子有且只有一个“父“房子与之相连。
// 一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。
// 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。
// 给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

// 动态规划 + 深度优先搜索
export default function rob(root: TreeNode | null): number {
  function dfs(node: TreeNode | null) {
    if (node === null) {
      // [算上当前节点最大值， 不算当前节点最大值]
      return [0, 0];
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    return [
      node.val + left[1] + right[1],
      Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    ];
    return [
      node.val + left[1] + right[1],
      Math.max(
        left[1] + right[1],
        left[0] + right[0],
        left[1] + right[0],
        left[0] + right[1]
      )
    ];
  }
  return Math.max(...dfs(root));
}
