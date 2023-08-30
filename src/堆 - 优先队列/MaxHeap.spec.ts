import assert from "assert";
import MaxHeap from "./MaxHeap";

describe("MaxHeap", () => {
  it("go", () => {
    const heap = new MaxHeap();
    const arr = [6, 58, 10, 84, 35, 8, 22, 64, 1, 78, 86, 71, 77];
    let max = arr[0];
    arr.forEach((el) => {
      heap.add(el);
      if (el > max) max = el;
      assert.equal(heap.getMax(), max);
    });
    arr.sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++) {
      assert.equal(heap.getMax(), arr[i]);
      heap.deleteMax();
    }
    assert.equal(heap.getMax(), undefined);
  });
});
