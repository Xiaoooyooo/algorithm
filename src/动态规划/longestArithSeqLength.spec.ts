import assert from "assert";
import longestArithSeqLength from "./longestArithSeqLength";

describe("longestArithSeqLength", () => {
  it("go", () => {
    assert.equal(longestArithSeqLength([3, 6, 9, 12]), 4);
    assert.equal(longestArithSeqLength([9, 4, 7, 2, 10]), 3);
    assert.equal(longestArithSeqLength([20, 1, 15, 3, 10, 5, 8]), 4);
  });
});
