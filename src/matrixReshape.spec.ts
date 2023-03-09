import assert from "assert";
import matrixReshape from "./matrixReshape";

describe("matrixReshape", () => {
  it("go", () => {
    assert.deepEqual(
      matrixReshape(
        [
          [1, 2],
          [3, 4]
        ],
        1,
        4
      ),
      [[1, 2, 3, 4]]
    );
    assert.deepEqual(
      matrixReshape(
        [
          [1, 2],
          [3, 4]
        ],
        2,
        4
      ),
      [
        [1, 2],
        [3, 4]
      ]
    );
  });
});
