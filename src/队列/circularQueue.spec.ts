import assert from "assert";
import CircularQueue from "./circularQueue";

describe("CircularQueue", () => {
  it("go", () => {
    let circularQueue = new CircularQueue(3);
    assert.equal(circularQueue.enQueue(1), true);
    assert.equal(circularQueue.enQueue(2), true);
    assert.equal(circularQueue.enQueue(3), true);
    assert.equal(circularQueue.enQueue(4), false);
    assert.equal(circularQueue.Rear(), 3);
    assert.equal(circularQueue.isFull(), true);
    assert.equal(circularQueue.deQueue(), true);
    assert.equal(circularQueue.enQueue(4), true);
    assert.equal(circularQueue.Rear(), 4);

    circularQueue = new CircularQueue(2);
    assert.equal(circularQueue.enQueue(4), true);
    assert.equal(circularQueue.Rear(), 4);
    assert.equal(circularQueue.enQueue(9), true);
    assert.equal(circularQueue.deQueue(), true);
    assert.equal(circularQueue.Front(), 9);
    assert.equal(circularQueue.deQueue(), true);
    assert.equal(circularQueue.deQueue(), false);
    assert.equal(circularQueue.isEmpty(), true);
    assert.equal(circularQueue.deQueue(), false);
    assert.equal(circularQueue.enQueue(6), true);
    assert.equal(circularQueue.enQueue(4), true);
  });
});
