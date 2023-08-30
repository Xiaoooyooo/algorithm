import assert from "assert";
import findNumberOfLIS from "./findNumberOfLIS";

describe("findNumberOfLIS", () => {
  it("go", () => {
    assert.equal(findNumberOfLIS([1, 3, 2]), 2);
    assert.equal(findNumberOfLIS([1, 3, 5, 4, 7]), 2);
    assert.equal(findNumberOfLIS([2, 2, 2, 2, 2]), 5);
    assert.equal(findNumberOfLIS([1, 3, 2, 5, 4, 7]), 4);
    assert.equal(findNumberOfLIS([1, 2, 4, 3, 5, 4, 7, 2]), 3);
    assert.equal(findNumberOfLIS([1, 10, 11, 2, 3, 4]), 1);
    assert.equal(findNumberOfLIS([1, 10, 11, 2, 3, 12]), 2);
  });
});
