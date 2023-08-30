import assert from "assert";
import maxSubarraySumCircular from "./maxSubarraySumCircular";

describe("maxSubarraySumCircular", () => {
  it("go", () => {
    assert.equal(maxSubarraySumCircular([1, -2, 3, -2]), 3);
    assert.equal(maxSubarraySumCircular([5, -3, 5]), 10);
    assert.equal(maxSubarraySumCircular([3, -2, 2, -3]), 3);
    assert.equal(maxSubarraySumCircular([-3, -2, -3]), -2);
    assert.equal(maxSubarraySumCircular([-2]), -2);
    assert.equal(maxSubarraySumCircular([0]), 0);
  });
});
