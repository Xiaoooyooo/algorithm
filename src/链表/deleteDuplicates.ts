// https://leetcode.cn/problems/remove-duplicates-from-sorted-list
// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

declare class ListNode {
  val: number;
  next: ListNode | null;
  constructor(value?: number, next?: ListNode);
}

// 递归法
export default function deleteDuplicates(
  head: ListNode | null
): ListNode | null {
  if (head === null || head.next === null) return head;
  if (head.val === head.next.val) {
    head.next = head.next.next;
    deleteDuplicates(head);
  } else {
    deleteDuplicates(head.next);
  }
  return head;
}

// 优化版迭代法
// export default function deleteDuplicates(
//   head: ListNode | null
// ): ListNode | null {
//   if (head === null) return head;
//   let curr = head;
//   while (curr.next) {
//     if (curr.val === curr.next.val) {
//       curr.next = curr.next.next;
//     } else {
//       curr = curr.next;
//     }
//   }
//   return head;
// }

// 迭代法
// export default function deleteDuplicates(
//   head: ListNode | null
// ): ListNode | null {
//   if (head === null) return head;
//   let curr = head,
//     next = head.next;
//   while (next) {
//     if (curr.val !== next.val) {
//       curr.next = next;
//       curr = curr.next;
//     }
//     next = next.next;
//   }
//   if (curr.next) curr.next = null;
//   return head;
// }
