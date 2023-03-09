declare class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null);
}

// 快慢指针
export default function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  let slow = head,
    fast = head;
  // 先让快指针移动 n 步
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  // 保存慢指针此时位置的上一个
  let prev: ListNode = null;
  // 如果快指针走到头了，则说明此时慢指针所在位置即是要删除的节点
  while (fast !== null) {
    fast = fast.next;
    prev = slow;
    slow = slow.next;
  }
  // 有可能快指针一开始就走到头了
  if (slow === head) {
    return slow.next;
  }
  prev.next = slow.next;
  return head;
}

// export default function removeNthFromEnd(
//   head: ListNode | null,
//   n: number
// ): ListNode | null {
//   let curr = head;
//   let len = 0;
//   // 先遍历一次确定链表的长度
//   while (curr !== null) {
//     len += 1;
//     curr = curr.next;
//   }
//   if (len === n) return head.next;
//   curr = head;
//   let i = 1;
//   while (i + n !== len) {
//     i++;
//     curr = curr.next;
//   }
//   curr.next = curr.next.next;
//   return head;
// }
