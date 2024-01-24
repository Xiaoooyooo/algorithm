// https://leetcode.cn/problems/remove-nodes-from-linked-list/
// 给你一个链表的头节点 head 。
// 移除每个右侧有一个更大数值的节点。
// 返回修改后链表的头节点 head 。

export default function removeNodes(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  }
  let ans = head;
  let curr = head;
  const stack: ListNode[] = [];
  while (curr) {
    while (stack.length && stack[stack.length - 1].val < curr.val) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans = curr;
    } else {
      stack[stack.length - 1].next = curr;
    }
    stack.push(curr);
    curr = curr.next;
  }
  return ans;
}
