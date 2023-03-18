// https://leetcode.cn/problems/merge-two-sorted-lists
// 将两个升序链表合并为一个新的 升序 链表并返回。
// 新链表是通过拼接给定的两个链表的所有节点组成的。

export default function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  let head: ListNode, p1: ListNode, p2: ListNode;
  if (list1.val < list2.val) {
    head = list1;
    p1 = list1.next;
    p2 = list2;
  } else {
    head = list2;
    p1 = list1;
    p2 = list2.next;
  }
  let curr = head;
  while (!(p1 === null && p2 === null)) {
    if (p2 === null || (p1 && p1.val < p2.val)) {
      curr.next = p1;
      curr = curr.next;
      p1 = p1.next;
    } else if (p1 === null || (p2 && p2.val <= p1.val)) {
      curr.next = p2;
      curr = curr.next;
      p2 = p2.next;
    }
  }
  return head;
}
