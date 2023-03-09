// import assert from "assert";
// import hasCycle from "./hasCycle";

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(value?: number, next?: ListNode) {
//     this.val = value === undefined ? 0 : value;
//     this.next = next === undefined ? null : next;
//   }
// }

// function generateList(arr: number[], index = 0) {
//   let node: ListNode;
//   if (index < arr.length - 1) {
//     node = new ListNode(arr[index], generateList(arr, index + 1));
//   } else {
//     node = new ListNode(arr[index]);
//   }
//   return node;
// }

// describe("hasCycle", () => {
//   it("go", () => {
//     assert.deepEqual(hasCycle(generateList([3, 2, 0, -4])), true);
//     // assert.deepEqual(hasCycle([1, 2]), true);
//   });
// });
