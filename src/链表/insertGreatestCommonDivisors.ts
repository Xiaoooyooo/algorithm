// https://leetcode.cn/problems/insert-greatest-common-divisors-in-linked-list/description/
// 给你一个链表的头 head ，每个结点包含一个整数值。
// 在相邻结点之间，请你插入一个新的结点，结点值为这两个相邻结点值的 最大公约数 。
// 请你返回插入之后的链表。
// 两个数的 最大公约数 是可以被两个数字整除的最大正整数。

import { ListNode } from "./ListNode";

export default function insertGreatestCommonDivisors(
  head: ListNode | null
): ListNode | null {
  if (head === null) {
    return head;
  }
  let curr = head;
  while (curr.next) {
    const next = curr.next;
    const node = new ListNode(gcd(curr.val, next.val));
    curr.next = node;
    node.next = next;
    curr = next;
  }
  return head;
}

// 更相减损求最大公因数
function gcd(a: number, b: number) {
  let s = 1;
  while (a % 2 === 0 && b % 2 === 0) {
    s *= 2;
    a /= 2;
    b /= 2;
  }
  while (a !== b) {
    [a, b] = [Math.min(a, b), Math.abs(a - b)];
  }
  return s * a;
}
