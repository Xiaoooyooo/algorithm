// https://leetcode.cn/problems/smallest-number-in-infinite-set/
// 现有一个包含所有正整数的集合 [1, 2, 3, 4, 5, ...] 。
// 实现 SmallestInfiniteSet 类：
// SmallestInfiniteSet() 初始化 SmallestInfiniteSet 对象以包含 所有 正整数。
// int popSmallest() 移除 并返回该无限集中的最小整数。
// void addBack(int num) 如果正整数 num 不 存在于无限集中，则将一个 num 添加 到该无限集最后。

import { DoubleLinkedListNode } from "./链表/ListNode";

export default class SmallestInfiniteSet {
  private deleted: Map<number, DoubleLinkedListNode> = new Map();
  private head = new DoubleLinkedListNode();
  private tail = new DoubleLinkedListNode();
  constructor() {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  popSmallest(): number {
    let curr = this.head.next;
    let smallest = 0;
    while (curr !== this.tail && curr.val === smallest + 1) {
      curr = curr.next;
      smallest += 1;
    }
    const node = new DoubleLinkedListNode(smallest + 1);
    const prev = curr.prev;
    const next = curr;
    prev.next = node;
    node.next = next;
    next.prev = node;
    node.prev = prev;
    this.deleted.set(node.val, node);
    return node.val;
  }

  addBack(num: number): void {
    if (!this.deleted.has(num)) {
      return;
    }
    const node = this.deleted.get(num);
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    this.deleted.delete(num);
  }
}
