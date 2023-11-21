// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/description/
// 给定一个二叉树：
// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL 。
// 初始状态下，所有 next 指针都被设置为 NULL 。

// 进阶：
// 你只能使用常量级额外空间。
// 使用递归解题也符合要求，本题中递归程序的隐式栈空间不计入额外空间复杂度。

declare class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
}

export default function connect(root: Node | null): Node | null {
  if (root === null) {
    return null;
  }
  let last = null,
    nextStart = null;
  const handle = (p) => {
    if (last !== null) {
      last.next = p;
    }
    if (nextStart === null) {
      nextStart = p;
    }
    last = p;
  };

  let start = root;
  while (start != null) {
    last = null;
    nextStart = null;
    for (let p = start; p !== null; p = p.next) {
      if (p.left !== null) {
        handle(p.left);
      }
      if (p.right !== null) {
        handle(p.right);
      }
    }
    start = nextStart;
  }
  return root;
}

// 广度优先搜索 O(n)额外空间
// export default function connect(root: Node | null): Node | null {
//   if (root === null) return root;
//   const queue = [root];
//   while (queue.length) {
//     const len = queue.length;
//     let prev: Node;
//     for (let i = 0; i < len; i++) {
//       const curr = queue.shift();
//       if (!prev) {
//         prev === curr;
//       } else {
//         prev.next = curr;
//         prev = curr;
//       }
//       if (curr.left) {
//         queue.push(curr.left);
//       }
//       if (curr.right) {
//         queue.push(curr.right);
//       }
//     }
//   }
//   return root;
// }
