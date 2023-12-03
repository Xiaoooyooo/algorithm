import assert from "assert";
import SmallestInfiniteSet from "./SmallestInfiniteSet";

describe("SmallestInfiniteSet", () => {
  it("go", () => {
    const instance = new SmallestInfiniteSet();
    instance.addBack(2); // 2 已经在集合中，所以不做任何变更。
    assert.equal(instance.popSmallest(), 1); // 返回 1 ，因为 1 是最小的整数，并将其从集合中移除。
    assert.equal(instance.popSmallest(), 2); // 返回 2 ，并将其从集合中移除。
    assert.equal(instance.popSmallest(), 3); // 返回 3 ，并将其从集合中移除。
    instance.addBack(1); // 将 1 添加到该集合中。
    assert.equal(instance.popSmallest(), 1); // 返回 1 ，因为 1 在上一步中被添加到集合中，
    // 且 1 是最小的整数，并将其从集合中移除。
    assert.equal(instance.popSmallest(), 4); // 返回 4 ，并将其从集合中移除。
    assert.equal(instance.popSmallest(), 5); // 返回 5 ，并将其从集合中移除。
  });
});
