import assert from "assert";
import maximumSumOfHeights from "./maximumSumOfHeights";

describe("maximunSUmOfHeights", () => {
  it("go", () => {
    assert.equal(maximumSumOfHeights([5, 3, 4, 1, 1]), 13);
    assert.equal(maximumSumOfHeights([6, 5, 3, 9, 2, 7]), 22);
    assert.equal(maximumSumOfHeights([3, 2, 5, 5, 2, 3]), 18);
  });
});
