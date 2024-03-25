import assert from "assert";
import reachableNodes from "./reachableNodes";

describe("reachableNodes", () => {
  it("go", () => {
    assert.equal(
      reachableNodes(
        7,
        [
          [0, 1],
          [1, 2],
          [3, 1],
          [4, 0],
          [0, 5],
          [5, 6]
        ],
        [4, 5]
      ),
      4
    );
    assert.equal(
      reachableNodes(
        7,
        [
          [0, 1],
          [0, 2],
          [0, 5],
          [0, 4],
          [3, 2],
          [6, 5]
        ],
        [4, 2, 1]
      ),
      3
    );
  });
});
