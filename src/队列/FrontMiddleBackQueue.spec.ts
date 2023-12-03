import assert from "assert";
import FrontMiddleBackQueue from "./FrontMiddleBackQueue";

describe("FrontMiddleBackQueue", () => {
  it("go", () => {
    const instance = new FrontMiddleBackQueue();
    instance.pushFront(1); // [1]
    instance.pushBack(2); // [1, 2]
    instance.pushMiddle(3); // [1, 3, 2]
    instance.pushMiddle(4); // [1, 4, 3, 2]
    assert.equal(instance.popFront(), 1); // 返回 1 -> [4, 3, 2]
    assert.equal(instance.popMiddle(), 3); // 返回 3 -> [4, 2]
    assert.equal(instance.popMiddle(), 4); // 返回 4 -> [2]
    assert.equal(instance.popBack(), 2); // 返回 2 -> []
    assert.equal(instance.popFront(), -1); // 返回 -1 -> [] （队列为空）
  });
});
