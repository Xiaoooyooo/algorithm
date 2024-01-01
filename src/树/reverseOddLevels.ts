// https://leetcode.cn/problems/reverse-odd-levels-of-binary-tree/description/
// 给你一棵 完美 二叉树的根节点 root ，请你反转这棵树中每个 奇数 层的节点值。
// 例如，假设第 3 层的节点值是 [2,1,3,4,7,11,29,18] ，那么反转后它应该变成 [18,29,11,7,4,3,1,2] 。
// 反转后，返回树的根节点。
// 完美 二叉树需满足：二叉树的所有父节点都有两个子节点，且所有叶子节点都在同一层。
// 节点的 层数 等于该节点到根节点之间的边数。

// 广度优先搜索 官方题解
export default function reverseOddLevels(
  root: TreeNode | null
): TreeNode | null {
  let q = [root];
  let isOdd = false;
  while (q.length) {
    if (isOdd) {
      const n = q.length;
      for (let i = 0; i < n / 2; i++) {
        [q[i].val, q[n - 1 - i].val] = [q[n - 1 - i].val, q[i].val];
      }
    }
    const tmp = [...q];
    q = [];
    for (const node of tmp) {
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    isOdd = !isOdd;
  }
  return root;
}

// 官方题解 深度优先搜索
// export default function reverseOddLevels(
//   root: TreeNode | null
// ): TreeNode | null {
//   const dfs = function (root1, root2, isOdd) {
//     if (root1 == null) {
//       return;
//     }
//     if (isOdd) {
//       [root1.val, root2.val] = [root2.val, root1.val];
//     }
//     dfs(root1.left, root2.right, !isOdd);
//     dfs(root1.right, root2.left, !isOdd);
//   };
//   dfs(root.left, root.right, true);
//   return root;
// }

// 广度优先搜索 反转节点
// export default function reverseOddLevels(
//   root: TreeNode | null
// ): TreeNode | null {
//   if (root === null) {
//     return root;
//   }
//   const queue: TreeNode[] = [root];
//   const parents = new Map<TreeNode, TreeNode>();
//   let depth = 0;
//   while (queue.length) {
//     const len = queue.length;
//     const arr: TreeNode[] = [];
//     const isOdd = depth % 2 === 1;
//     for (let i = 0; i < len; i++) {
//       const curr = queue.shift();
//       if (isOdd) {
//         arr.push(curr);
//       }
//       if (curr.left) {
//         parents.set(curr.left, curr);
//         queue.push(curr.left);
//       }
//       if (curr.right) {
//         parents.set(curr.right, curr);
//         queue.push(curr.right);
//       }
//     }
//     if (isOdd) {
//       let l = 0,
//         r = arr.length - 1;
//       let index = ["left", "right"];
//       while (l < r) {
//         const a = arr[l++],
//           b = arr[r--];
//         const parentA = parents.get(a);
//         const parentB = parents.get(b);
//         const childALeft = a.left;
//         const childARight = a.right;
//         const childBLeft = b.left;
//         const childBRight = b.right;
//         a.left = childBLeft;
//         a.right = childBRight;
//         b.left = childALeft;
//         b.right = childARight;
//         parentA[index[0]] = b;
//         parentB[index[1]] = a;
//         index = [index[1], index[0]];
//       }
//     }
//     depth++;
//   }
//   return root;
// }
