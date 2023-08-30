import assert from "assert";
import numTrees from "./numTrees";

describe("numTrees", () => {
  it("go", () => {
    assert.equal(numTrees(3), 5);
    assert.equal(numTrees(1), 1);
    assert.equal(numTrees(5), 42);
    assert.equal(numTrees(10), 16796);
    assert.equal(numTrees(19), 1767263190);
    assert.equal(numTrees(20), 6564120420);
  });
});
