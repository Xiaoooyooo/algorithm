// https://leetcode.cn/problems/reorder-list/description/
// 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
//   L0 → L1 → … → Ln - 1 → Ln
// 请将其重新排列后变为：
//   L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 寻找中点 + 逆序 + 合并
export default function reorderList(head: ListNode | null): void {
  if (head === null || head.next === null) return;
  let slow = head,
    fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const mid = slow;
  // 反转链表
  let prev: ListNode | null = null,
    curr = mid.next;
  mid.next = null;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  // 合并链表
  while (head && prev) {
    let t = head.next,
      r = prev.next;
    head.next = prev;
    prev.next = t;
    head = t;
    prev = r;
  }
}

// 转换为数组 线性表
// export default function reorderList(head: ListNode | null): void {
//   const arr = [];
//   let curr = head;
//   while (curr) {
//     arr.push(curr);
//     curr = curr.next;
//   }
//   curr = arr.shift();
//   while (arr.length) {
//     curr.next = arr.pop();
//     curr = curr.next;
//     if (arr.length) {
//       curr.next = arr.shift();
//       curr = curr.next;
//     }
//   }
//   curr.next = null;
// }
