import assert from "assert";
import MyQueue from "./MyQueue";

describe("MyQueue", () => {
  it("go", () => {
    const myQueue = new MyQueue();
    myQueue.push(1); // queue is: [1]
    myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
    assert.equal(myQueue.peek(), 1);
    assert.equal(myQueue.pop(), 1);
    assert.equal(myQueue.empty(), false);
  });
});
