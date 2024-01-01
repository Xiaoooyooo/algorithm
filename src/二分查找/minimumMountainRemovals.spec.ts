import assert from "assert";
import minimumMountainRemovals from "./minimumMountainRemovals";

describe("minimumMountainRemovals", () => {
  it("go", () => {
    assert.equal(minimumMountainRemovals([1, 3, 1]), 0);
    assert.equal(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1]), 3);
    assert.equal(minimumMountainRemovals([9, 8, 1, 7, 6, 5, 4, 3, 2, 1]), 2);
  });
});
