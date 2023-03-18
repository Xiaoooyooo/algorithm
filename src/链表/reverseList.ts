// https://leetcode.cn/problems/reverse-linked-list
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

// 改进版递归
export default function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

// 递归法
// export default function reverseList(head: ListNode | null): ListNode | null {
//   if (head === null) return head;
//   let last: ListNode;
//   const helper = function (prev: ListNode | null, next: ListNode | null) {
//     if (next.next === null) {
//       next.next = prev;
//       last = next;
//       return;
//     }
//     helper(next, next.next);
//     next.next = prev;
//   };
//   helper(null, head);
//   return last;
// }

// 改进版迭代法
// export default function reverseList(head: ListNode | null): ListNode | null {
//   let prev = null as ListNode,
//     curr = head;
//   while (curr !== null) {
//     const temp = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = temp;
//   }
//   return prev;
// }

// 迭代法
// export default function reverseList(head: ListNode | null): ListNode | null {
//   if (head === null || head.next === null) return head;
//   let curr = head.next;
//   head.next = null;
//   let next = curr.next;
//   curr.next = head;
//   while (next) {
//     const temp = next.next;
//     next.next = curr;
//     curr = next;
//     next = temp;
//   }
//   return curr;
// }
