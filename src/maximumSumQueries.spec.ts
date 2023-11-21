import assert from "assert";
import maximumSumQueries from "./maximumSumQueries";

describe("maximumSumQueries", () => {
  it("go", () => {
    assert.deepEqual(
      maximumSumQueries(
        [4, 3, 1, 2],
        [2, 4, 9, 5],
        [
          [4, 1],
          [1, 3],
          [2, 5]
        ]
      ),
      [6, 10, 7]
    );
    assert.deepEqual(
      maximumSumQueries(
        [3, 2, 5],
        [2, 3, 4],
        [
          [4, 4],
          [3, 2],
          [1, 1]
        ]
      ),
      [9, 9, 9]
    );
    assert.deepEqual(maximumSumQueries([2, 1], [2, 3], [[3, 3]]), [-1]);
  });
});
