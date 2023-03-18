import assert from "assert";
import restoreMatrix from "./restoreMatrix";

describe("restoreMatrix", () => {
  it("go", () => {
    assert.deepEqual(restoreMatrix([3, 8], [4, 7]), [
      [3, 0],
      [1, 7]
    ]);
    assert.deepEqual(restoreMatrix([5, 7, 10], [8, 6, 8]), [
      [5, 0, 0],
      [3, 4, 0],
      [0, 2, 8]
    ]);
    assert.deepEqual(restoreMatrix([14, 9], [6, 9, 8]), [
      [6, 8, 0],
      [0, 1, 8]
    ]);
    assert.deepEqual(restoreMatrix([1, 0], [1]), [[1], [0]]);
    assert.deepEqual(restoreMatrix([0], [0]), [[0]]);
  });
});
