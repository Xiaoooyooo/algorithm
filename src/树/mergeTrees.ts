// 链接：https://leetcode.cn/problems/merge-two-binary-trees
// 给你两棵二叉树： root1 和 root2 。
// 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。
// 返回合并后的二叉树。
// 注意: 合并过程必须从两个树的根节点开始。

export default function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null && root2 === null) return null;
  const node = new TreeNode();
  if (root1 !== null && root2 !== null) {
    node.val = root1.val + root2.val;
    node.left = mergeTrees(root1.left, root2.left);
    node.right = mergeTrees(root1.right, root2.right);
  } else if (root2 !== null) {
    node.val = root2.val;
    node.left = mergeTrees(null, root2.left);
    node.right = mergeTrees(null, root2.right);
  } else {
    node.val = root1.val;
    node.left = mergeTrees(root1.left, null);
    node.right = mergeTrees(root1.right, null);
  }
  return node;
}

// 修改原树
// export default function mergeTrees(
//   root1: TreeNode | null,
//   root2: TreeNode | null
// ): TreeNode | null {
//   if (root1 === null && root2 === null) return null;
//   if (root1 !== null && root2 !== null) {
//     root1.val += root2.val;
//     root1.left = mergeTrees(root1.left, root2.left);
//     root1.right = mergeTrees(root1.right, root2.right);
//     return root1;
//   } else if (root2 !== null) {
//     return root2;
//   } else {
//     return root1;
//   }
// }
