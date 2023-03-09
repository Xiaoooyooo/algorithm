import assert from "assert";
import maxSubArray from "./maxSubArray";

describe("maxSubArray", () => {
  it("go", () => {
    assert.equal(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
    assert.equal(maxSubArray([1]), 1);
    assert.equal(maxSubArray([5, 4, -1, 7, 8]), 23);
    assert.equal(maxSubArray([-2, -1]), -1);
    assert.equal(maxSubArray([-1]), -1);
  });
});
