import assert from "assert";
import MinHeap from "./MinHeap";

describe("MinHeap", () => {
  it("go", () => {
    let heap = new MinHeap();
    let arr = [10, 5, 3, 7, 2, 1, 4];
    heap.push(10);
    heap.push(5);
    assert.equal(heap.peek(), 5);
    heap.push(3);
    assert.equal(heap.peek(), 3);
    assert.equal(heap.pop(), 3);
    assert.equal(heap.peek(), 5);
    heap.push(7);
    assert.equal(heap.peek(), 5);
    heap.push(2);
    assert.equal(heap.peek(), 2);
    heap.push(1);
    assert.equal(heap.peek(), 1);
    heap.push(4);
    assert.equal(heap.peek(), 1);
    assert.equal(heap.pop(), 1);
    assert.equal(heap.size(), 5);
    assert.equal(heap.pop(), 2);
    assert.equal(heap.size(), 4);
    assert.equal(heap.pop(), 4);
    assert.equal(heap.size(), 3);
    assert.equal(heap.pop(), 5);
    assert.equal(heap.size(), 2);
    assert.equal(heap.pop(), 7);
    assert.equal(heap.size(), 1);
    assert.equal(heap.pop(), 10);
    assert.equal(heap.size(), 0);
    assert.equal(heap.isEmpty(), true);
  });
});
