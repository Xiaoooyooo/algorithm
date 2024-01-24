import { ListNode } from "./ListNode";

export function generateListFromArray<T = number>(arr: T[], index = 0) {
  if (index >= arr.length) return null;
  const node = new ListNode(arr[index]);
  node.next = generateListFromArray(arr, index + 1);
  return node;
}

export function isListValueEquals<T = number>(
  list1: ListNode<T>,
  list2: ListNode<T>
) {
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

export function serialize<T = number>(input: string): ListNode<T> | null {
  try {
    const arr = JSON.parse(input) as T[];
    if (arr.length === 0) {
      return null;
    }
    const head = new ListNode(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
      const node = new ListNode(arr[i]);
      curr.next = node;
      curr = node;
    }
    return head;
  } catch (err) {
    return null;
  }
}

export function deserialize<T = number>(
  head: ListNode<T> | null,
  getValue = (value: T) => value
) {
  const arr: T[] = [];
  let curr = head;
  while (curr) {
    arr.push(getValue(curr.val));
    curr = curr.next;
  }
  return JSON.stringify(arr);
}
