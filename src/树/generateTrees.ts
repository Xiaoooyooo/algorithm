// https://leetcode.cn/problems/unique-binary-search-trees-ii/
// 给你一个整数 n ，
// 请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。
// 可以按 任意顺序 返回答案。

// 动态规划
// export default function generateTrees(n: number): Array<TreeNode | null> {
//   function cloneTree(node: TreeNode, diff = 0) {
//     const newNode = new TreeNode(node.val + diff);
//     if (node.left) {
//       newNode.left = cloneTree(node.left, diff);
//     }
//     if (node.right) {
//       newNode.right = cloneTree(node.right, diff);
//     }
//     return newNode;
//   }
//   const trees: TreeNode[][] = [];
//   trees[0] = [new TreeNode(1)];
//   for (let i = 1; i < n; i++) {
//     const temp = [];
//     for (let j = 0; j <= i; j++) {
//       // 难点在于 i 和 j 的关系
//       // 值得注意的是 i 和 j 都是从 0 开始的，而 n 是从 1 开始的
//       if (j - 1 >= 0 && i - j - 1 >= 0) {
//         for (let leftNode of trees[j - 1]) {
//           for (let rightNode of trees[i - j - 1]) {
//             const rootNode = new TreeNode(j + 1);
//             rootNode.left = cloneTree(leftNode);
//             rootNode.right = cloneTree(rightNode, j + 1);
//             temp.push(rootNode);
//           }
//         }
//       } else if (j - 1 >= 0) {
//         for (let leftNode of trees[j - 1]) {
//           const rootNode = new TreeNode(j + 1);
//           rootNode.left = cloneTree(leftNode);
//           rootNode.right = null;
//           temp.push(rootNode);
//         }
//       } else if (i - j - 1 >= 0) {
//         for (let rightNode of trees[i - j - 1]) {
//           const rootNode = new TreeNode(j + 1);
//           rootNode.left = null;
//           rootNode.right = cloneTree(rightNode, j + 1);
//           temp.push(rootNode);
//         }
//       }
//     }
//     trees[i] = temp;
//   }
//   return trees[n - 1];
// }

// 回溯 / 深度优先搜索
export default function generateTrees(n: number): Array<TreeNode | null> {
  function dfs(left: number, right: number) {
    const trees = [];
    if (left > right) {
      trees.push(null);
      return trees;
    }
    for (let i = left; i <= right; i++) {
      const leftTrees = dfs(left, i - 1);
      const rightTrees = dfs(i + 1, right);
      for (let leftTree of leftTrees) {
        for (let rightTree of rightTrees) {
          const curr = new TreeNode(i);
          curr.left = leftTree;
          curr.right = rightTree;
          trees.push(curr);
        }
      }
    }
    return trees;
  }
  return dfs(1, n);
}
