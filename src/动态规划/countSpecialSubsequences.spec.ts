import assert from "assert";
import countSpecialSubsequences from "./countSpecialSubsequences";

describe("countSpecialSubsequences", () => {
  it("go", () => {
    assert.equal(countSpecialSubsequences([0, 1, 2, 2]), 3);
    assert.equal(countSpecialSubsequences([2, 2, 0, 0]), 0);
    assert.equal(countSpecialSubsequences([0, 1, 2, 0, 1, 2]), 7);
  })
});
