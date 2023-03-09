import assert from "assert";
import searchRange from "./searchRange";

describe("searchRange", () => {
  it("go", () => {
    assert.deepEqual(searchRange([5, 7, 7, 8, 8, 10], 5), [0, 0]);
    assert.deepEqual(searchRange([5, 7, 7, 8, 8, 10], 7), [1, 2]);
    assert.deepEqual(searchRange([5, 7, 7, 8, 8, 10], 8), [3, 4]);
    assert.deepEqual(searchRange([5, 7, 7, 8, 8, 10], 10), [5, 5]);
    assert.deepEqual(searchRange([5, 7, 7, 8, 8, 10], 6), [-1, -1]);
    assert.deepEqual(searchRange([], 0), [-1, -1]);
    assert.deepEqual(searchRange([2, 2], 1), [-1, -1]);
  });
});
