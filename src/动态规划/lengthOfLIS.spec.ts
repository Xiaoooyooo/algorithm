import assert from "assert";
import lengthOfLIS from "./lengthOfLIS";

describe("lengthOfLIS", () => {
  it("go", () => {
    assert.equal(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4);
    assert.equal(lengthOfLIS([0, 1, 0, 3, 2, 3]), 4);
    assert.equal(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]), 1);
    assert.equal(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]), 6);
  });
});
