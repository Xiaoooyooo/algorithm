// https://leetcode.cn/problems/count-good-nodes-in-binary-tree/
// 给你一棵根为 root 的二叉树，请你返回二叉树中好节点的数目。
// 「好节点」X 定义为：从根到该节点 X 所经过的节点中，没有任何节点的值大于 X 的值。

// 广度优先搜索
// export default function goodNodes(root: TreeNode | null): number {
//   let count = 0;
//   if (root === null) return count;
//   count = 1;
//   const queue: (TreeNode | null)[] = [];
//   const maxValues: number[] = [];
//   queue.push(root);
//   maxValues.push(root.val);
//   while (queue.length) {
//     const len = queue.length;
//     for (let i = 0; i < len; i++) {
//       const curr = queue.shift();
//       const max = maxValues.shift();
//       if (curr === null) continue;
//       queue.push(curr.left);
//       if (curr.left && curr.left.val >= max) {
//         maxValues.push(curr.left.val);
//         count++;
//       } else {
//         maxValues.push(max);
//       }
//       queue.push(curr.right);
//       if (curr.right && curr.right.val >= max) {
//         maxValues.push(curr.right.val);
//         count++;
//       } else {
//         maxValues.push(max);
//       }
//     }
//   }
//   return count;
// }

// 深度优先搜索
export default function goodNodes(root: TreeNode | null): number {
  let count = 0;
  if (root === null) return count;
  count = 1;
  const stack: TreeNode[] = [];
  const maxValues: number[] = [];
  stack.push(root);
  maxValues.push(root.val);
  const visited = new Set();
  while (stack.length) {
    const curr = stack[stack.length - 1];
    const max = maxValues[maxValues.length - 1];
    if (curr.left && !visited.has(curr.left)) {
      stack.push(curr.left);
      visited.add(curr.left);
      if (curr.left.val >= max) {
        count++;
        maxValues.push(curr.left.val);
      } else {
        maxValues.push(max);
      }
    } else if (curr.right && !visited.has(curr.right)) {
      stack.push(curr.right);
      visited.add(curr.right);
      if (curr.right.val >= max) {
        count++;
        maxValues.push(curr.right.val);
      } else {
        maxValues.push(max);
      }
    } else {
      stack.pop();
      maxValues.pop();
    }
  }
  return count;
}
