// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。
// 如果两个链表不存在相交节点，返回 null 。
// 题目数据 保证 整个链式结构中不存在环。
// 注意，函数返回结果后，链表必须 保持其原始结构 。

// 快慢指针
export default function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null || headB === null) return null;
  let p1 = headA,
    p2 = headB;
  // 如果有相交，那么 p1 和 p2 一定会在相交点相遇
  // 否则会在都为 null 时相遇
  while (p1 !== p2) {
    p1 = p1 === null ? headA : p1.next;
    p2 = p2 === null ? headB : p2.next;
  }
  return p1;
}

// 哈希表
// export default function getIntersectionNode(
//   headA: ListNode | null,
//   headB: ListNode | null
// ): ListNode | null {
//   if (headA === null || headB === null) return null;
//   const set = new Set();
//   while (headA !== null) {
//     set.add(headA);
//     headA = headA.next;
//   }
//   while (headB !== null) {
//     if (set.has(headB)) return headB;
//     headB = headB.next;
//   }
//   return null;
// }

// 测试一下 i j 相遇时指针的出现顺序
(function test() {
  const arr1 = [4, 5, 7, 1, 3, 8];
  const arr2 = [9, 2, 6, 7, 0, 11, 12, 13, 14];
  let i = 0,
    j = 0;
  const now = Date.now();
  while (Date.now() < now + 1000) {
    // if (i === j) {
    //   console.log(i, j);
    // }
    console.log(i, j);
    if (arr1[i] === arr2[j]) return arr1[i];
    i = arr1[i] ? i + 1 : 0;
    j = arr2[j] ? j + 1 : 0;
  }
})();
