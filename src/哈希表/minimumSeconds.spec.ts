import assert from "assert";
import minimumSeconds from "./minimumSeconds";

describe("minimumSeconds", () => {
  it("go", () => {
    assert.equal(minimumSeconds([1, 2, 1, 2]), 1);
    assert.equal(minimumSeconds([2, 1, 3, 3, 2]), 2);
    assert.equal(minimumSeconds([5, 5, 5, 5]), 0);
    assert.equal(minimumSeconds([1, 2, 3]), 1);
    assert.equal(minimumSeconds([3, 19, 8, 12]), 2);
  });
});
