// https://leetcode.cn/problems/palindrome-linked-list/
// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。
// 如果是，返回 true ；否则，返回 false 。
// 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

// export default function isPalindrome(head: ListNode | null): boolean {
//   let p = head;
//   let len = 0;
//   while (p !== null) {
//     len += 1;
//     p = p.next;
//   }
//   const mid = Math.round(len / 2);
// }

// 栈
// export default function isPalindrome(head: ListNode | null): boolean {
//   let p = head;
//   let len = 0;
//   while (p !== null) {
//     len += 1;
//     p = p.next;
//   }
//   const stack = [];
//   const mid = Math.round(len / 2);
//   let i = 0;
//   p = head;
//   while (i < mid) {
//     if (i !== mid - 1 || len % 2 === 0) {
//       stack.push(p);
//     }
//     i++;
//     p = p.next;
//   }
//   while (p) {
//     const s = stack.pop();
//     if (s.val !== p.val) return false;
//     p = p.next;
//   }
//   return true;
// }
