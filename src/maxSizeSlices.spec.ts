import assert from "assert";
import maxSizeSlices from "./maxSizeSlices";

describe("maxSizeSlices", () => {
  it("go", () => {
    assert.equal(maxSizeSlices([1, 2, 3]), 3);
    assert.equal(maxSizeSlices([1, 2, 3, 4, 5, 6]), 10);
    assert.equal(maxSizeSlices([8, 9, 8, 6, 1, 1]), 16);
    // assert.equal(maxSizeSlices(Array(15).fill(100)), 500);
    // assert.equal(maxSizeSlices(Array(30).fill(100)), 1000);
    // assert.equal(maxSizeSlices(Array(498).fill(100)), 16600);
  });
});
