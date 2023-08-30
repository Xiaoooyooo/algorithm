import assert from "assert";
import MinStack from "./MinStack";

describe("MinStack", () => {
  it("go", () => {
    let minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    assert.equal(minStack.getMin(), -3);
    minStack.pop();
    assert.equal(minStack.top(), 0);
    assert.equal(minStack.getMin(), -2);

    minStack = new MinStack();
    minStack.push(0);
    minStack.push(1);
    minStack.push(0);
    assert.equal(minStack.getMin(), 0);
    minStack.pop();
    assert.equal(minStack.getMin(), 0);
  });
});
