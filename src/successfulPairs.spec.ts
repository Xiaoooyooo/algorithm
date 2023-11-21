import assert from "assert";
import successfulPairs from "./successfulPairs";

describe("successfulPairs", () => {
  it("go", () => {
    assert.deepEqual(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7), [4, 0, 3]);
    assert.deepEqual(successfulPairs([3, 1, 2], [8, 5, 8], 16), [2, 0, 2]);
  });
});
