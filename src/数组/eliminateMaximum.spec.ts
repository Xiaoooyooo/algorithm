import assert from "assert";
import eliminateMaximum from "./eliminateMaximum";

describe("eliminateMaximum", () => {
  it("go", () => {
    assert.equal(eliminateMaximum([1, 3, 4], [1, 1, 1]), 3);
    assert.equal(eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1]), 1);
    assert.equal(eliminateMaximum([3, 2, 4], [5, 3, 2]), 1);
    assert.equal(eliminateMaximum([4, 2, 3], [2, 1, 1]), 3);
  });
});
