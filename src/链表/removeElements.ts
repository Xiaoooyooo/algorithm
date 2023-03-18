// https://leetcode.cn/problems/remove-linked-list-elements
// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

export default function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  while (head && head.val === val) {
    head = head.next;
  }
  if (head === null) return head;
  let curr = head,
    next = head.next;
  while (next !== null) {
    if (next.val !== val) {
      curr.next = next;
      curr = curr.next;
    }
    next = next.next;
  }
  if (curr.next) curr.next = null;
  return head;
}
