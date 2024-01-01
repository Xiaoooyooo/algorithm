/* eslint-disable @typescript-eslint/no-explicit-any */

export class ListNode<T = any> {
  val?: T;
  next: ListNode<T> | null;
  constructor(value?: T) {
    this.val = value;
  }
}

export class DoubleLinkedListNode<T = any> {
  val?: T;
  next: DoubleLinkedListNode<T> | null;
  prev: DoubleLinkedListNode<T> | null;
  constructor(value?: T) {
    this.val = value;
  }
}
