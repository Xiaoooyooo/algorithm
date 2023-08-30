import assert from "assert";
import fn from "./_review";

describe("_review", () => {
  it.skip("go", () => {
    assert.equal(fn([1, 2, 5], 11), 3);
    assert.equal(fn([2], 3), -1);
    assert.equal(fn([1], 0), 0);
    assert.equal(fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 10000), 834);
  });
});
