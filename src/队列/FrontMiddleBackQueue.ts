// https://leetcode.cn/problems/design-front-middle-back-queue/
// 请你设计一个队列，支持在前，中，后三个位置的 push 和 pop 操作。
// 请你完成 FrontMiddleBack 类：
// FrontMiddleBack() 初始化队列。
// void pushFront(int val) 将 val 添加到队列的 最前面 。
// void pushMiddle(int val) 将 val 添加到队列的 正中间 。
// void pushBack(int val) 将 val 添加到队里的 最后面 。
// int popFront() 将 最前面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
// int popMiddle() 将 正中间 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
// int popBack() 将 最后面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
// 请注意当有 两个 中间位置的时候，选择靠前面的位置进行操作。比方说：
// 将 6 添加到 [1, 2, 3, 4, 5] 的中间位置，结果数组为 [1, 2, 6, 3, 4, 5] 。
// 从 [1, 2, 3, 4, 5, 6] 的中间位置弹出元素，返回 3 ，数组变为 [1, 2, 4, 5, 6] 。
import { DoubleLinkedListNode } from "../链表/ListNode";

export default class FrontMiddleBackQueue {
  size = 0;
  head = new DoubleLinkedListNode();
  tail = new DoubleLinkedListNode();
  constructor() {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  pushFront(val: number): void {
    const node = new DoubleLinkedListNode(val);
    const next = this.head.next;
    node.next = next;
    next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size++;
  }

  pushMiddle(val: number): void {
    const midIndex = Math.floor(this.size / 2);
    let index = 0,
      curr = this.head;
    while (index < midIndex) {
      curr = curr.next;
      index++;
    }
    const node = new DoubleLinkedListNode(val);
    const next = curr.next;
    node.next = next;
    next.prev = node;
    curr.next = node;
    node.prev = curr;
    this.size++;
  }

  pushBack(val: number): void {
    const node = new DoubleLinkedListNode(val);
    const prev = this.tail.prev;
    prev.next = node;
    node.next = this.tail;
    this.tail.prev = node;
    node.prev = prev;
    this.size++;
  }

  popFront(): number {
    if (this.size === 0) return -1;
    const node = this.head.next;
    this.head.next = node.next;
    node.next.prev = this.head;
    this.size--;
    return node.val;
  }

  popMiddle(): number {
    if (this.size === 0) return -1;
    const midIndex = Math.floor((this.size - 1) / 2);
    let index = 0,
      curr = this.head.next;
    while (index < midIndex) {
      curr = curr.next;
      index++;
    }
    const prev = curr.prev;
    const next = curr.next;
    prev.next = next;
    next.prev = prev;
    this.size--;
    return curr.val;
  }

  popBack(): number {
    if (this.size === 0) return -1;
    const node = this.tail.prev;
    node.prev.next = this.tail;
    this.tail.prev = node.prev;
    this.size--;
    return node.val;
  }
}
