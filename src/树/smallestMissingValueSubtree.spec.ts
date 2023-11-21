import assert from "assert";
import smallestMissingValueSubtree from "./smallestMissingValueSubtree";

describe("smallestMissingValueSubtree", () => {
  it("go", () => {
    assert.deepEqual(
      smallestMissingValueSubtree([-1, 0, 0, 2], [1, 2, 3, 4]),
      [5, 1, 1, 1]
    );
    assert.deepEqual(
      smallestMissingValueSubtree([-1, 0, 1, 0, 3, 3], [5, 4, 6, 2, 1, 3]),
      [7, 1, 1, 4, 2, 1]
    );
    assert.deepEqual(
      smallestMissingValueSubtree(
        [-1, 2, 3, 0, 2, 4, 1],
        [2, 3, 4, 5, 6, 7, 8]
      ),
      [1, 1, 1, 1, 1, 1, 1]
    );
  });
});
