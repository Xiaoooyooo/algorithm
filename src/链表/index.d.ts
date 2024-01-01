declare class ListNode<T = number> {
  val: T;
  next: ListNode<T> | null;
  constructor(value?: number, next?: ListNode<T>);
}
