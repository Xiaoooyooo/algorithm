import assert from "assert";
import floodFill from "./floodFill";

describe("floodFill", () => {
  it("go", () => {
    assert.deepEqual(
      floodFill(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1]
        ],
        1,
        1,
        2
      ),
      [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1]
      ]
    );
    assert.deepEqual(
      floodFill(
        [
          [0, 0, 0],
          [0, 0, 0]
        ],
        0,
        0,
        2
      ),
      [
        [2, 2, 2],
        [2, 2, 2]
      ]
    );
  });
});
