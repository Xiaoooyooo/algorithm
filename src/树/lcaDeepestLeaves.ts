// https://leetcode.cn/problems/lowest-common-ancestor-of-deepest-leaves/
// 给你一个有根节点 root 的二叉树，返回它 最深的叶节点的最近公共祖先 。
// 回想一下：
// 叶节点 是二叉树中没有子节点的节点
// 树的根节点的 深度 为 0，如果某一节点的深度为 d，那它的子节点的深度就是 d+1
// 如果我们假定 A 是一组节点 S 的 最近公共祖先，S 中的每个节点都在以 A 为根节点的子树中，且 A 的深度达到此条件下可能的最大值。

// 官方题解 递归
export default function lcaDeepestLeaves(
  root: TreeNode | null
): TreeNode | null {
  function dfs(root: TreeNode | null) {
    if (!root) {
      return [0, root];
    }

    let [d1, lca1] = dfs(root.left);
    let [d2, lca2] = dfs(root.right);

    if (d1 > d2) {
      return [d1 + 1, lca1];
    }
    if (d1 < d2) {
      return [d2 + 1, lca2];
    }
    return [d1 + 1, root];
  }
  return dfs(root)[1];
}

// export default function lcaDeepestLeaves(
//   root: TreeNode | null
// ): TreeNode | null {
//   if (root === null) return root;
//   const queue = [root];
//   let depth = 0;
//   const parentMap: Map<TreeNode, TreeNode> = new Map();
//   const depthMap: Map<number, TreeNode[]> = new Map();
//   depthMap.set(depth, [root]);
//   while (queue.length) {
//     depth++;
//     const nodes: TreeNode[] = [];
//     const len = queue.length;
//     for (let i = 0; i < len; i++) {
//       const curr = queue.shift();
//       if (curr.left) {
//         queue.push(curr.left);
//         parentMap.set(curr.left, curr);
//       }
//       if (curr.right) {
//         queue.push(curr.right);
//         parentMap.set(curr.right, curr);
//       }
//       nodes.push(curr);
//     }
//     if (nodes.length > 0) depthMap.set(depth, nodes);
//   }
//   const most = depthMap.get(depth) || depthMap.get(depth - 1);
//   if (most.length === 1) return most[0];
//   const len = most.length;
//   let flag = 1,
//     res = most[0];
//   while (flag !== len) {
//     flag = 1;
//     res = most[0];
//     for (let i = 0; i < len - 1; i++) {
//       if (most[i] === most[i + 1]) {
//         flag++;
//       }
//       most[i] = parentMap.get(most[i]);
//     }
//     most[len - 1] = parentMap.get(most[len - 1]);
//   }
//   // console.log(res);
//   return res;
// }
