import assert from "assert";
import maxUncrossedLines from "./maxUncrossedLines";

describe("maxUncrossedLines", () => {
  it("go", () => {
    assert.equal(maxUncrossedLines([1, 4, 2], [1, 2, 4]), 2);
    assert.equal(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]), 3);
    assert.equal(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]), 2);
  });
});
