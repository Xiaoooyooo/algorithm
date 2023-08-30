export class ListNode<T = number> {
  val: T;
  next: ListNode<T> | null;
  constructor(value?: T, next?: ListNode<T>) {
    this.val = value || (0 as T);
    if (next) {
      this.next = next;
    }
  }
}

export function generateListFromArray<T = number>(arr: T[], index = 0) {
  if (index >= arr.length) return null;
  const node = new ListNode(arr[index]);
  node.next = generateListFromArray(arr, index + 1);
  return node;
}

export function isListValueEquals(list1: ListNode, list2: ListNode) {
  let left = list1,
    right = list2;
  while (left || right) {
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
}
