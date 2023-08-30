import assert from "assert";
import maxAbsoluteSum from "./maxAbsoluteSum";

describe("maxAbsoluteSum", () => {
  it("go", () => {
    assert.equal(maxAbsoluteSum([-1]), 1);
    assert.equal(maxAbsoluteSum([1, -3, 2, 3, -4]), 5);
    assert.equal(maxAbsoluteSum([2, -5, 1, -4, 3, -2]), 8);
    assert.equal(maxAbsoluteSum([1, 1, 1, 1, 1, 1]), 6);
    assert.equal(maxAbsoluteSum([1, -1, 1, 1, 1, 1]), 4);
    assert.equal(maxAbsoluteSum([1, -1, 1, 1, -1, 1]), 2);
    assert.equal(maxAbsoluteSum([2, -1, -3]), 4);
    assert.equal(
      maxAbsoluteSum([
        -7, -1, 0, -2, 1, 3, 8, -2, -6, -1, -10, -6, -6, 8, -4, -9, -4, 1, 4, -9
      ]),
      44
    );
  });
});
