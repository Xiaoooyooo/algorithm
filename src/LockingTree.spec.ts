import assert from "assert";
import LockingTree from "./LockingTree";

describe("LockingTree", () => {
  it("go", () => {
    const instance = new LockingTree([-1, 0, 0, 1, 1, 2, 2]);
    assert.equal(instance.lock(2, 2), true);
    assert.equal(instance.unlock(2, 3), false);
    assert.equal(instance.unlock(2, 2), true);
    assert.equal(instance.lock(4, 5), true);
    assert.equal(instance.upgrade(0, 1), true);
    assert.equal(instance.lock(0, 1), false);
  });
});
