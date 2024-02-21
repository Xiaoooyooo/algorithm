import assert from "assert";
import minOperationsQueries from "./minOperationsQueries";

describe("minOperationsQueries", () => {
  it("go", () => {
    assert.deepEqual(
      minOperationsQueries(
        7,
        [
          [0, 1, 1],
          [1, 2, 1],
          [2, 3, 1],
          [3, 4, 2],
          [4, 5, 2],
          [5, 6, 2]
        ],
        [
          [0, 3],
          [3, 6],
          [2, 6],
          [0, 6]
        ]
      ),
      [0, 0, 1, 3]
    );
    assert.deepEqual(
      minOperationsQueries(
        8,
        [
          [1, 2, 6],
          [1, 3, 4],
          [2, 4, 6],
          [2, 5, 3],
          [3, 6, 6],
          [3, 0, 8],
          [7, 0, 2]
        ],
        [
          [4, 6],
          [0, 4],
          [6, 5],
          [7, 4]
        ]
      ),
      [1, 2, 2, 3]
    );
  });
});
