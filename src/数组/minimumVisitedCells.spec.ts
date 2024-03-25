import assert from "assert";
import minimumVisitedCells from "./minimumVisitedCells";

describe("minimumVisitedCells", () => {
  it("go", () => {
    assert.equal(
      minimumVisitedCells([
        [3, 4, 2, 1],
        [4, 2, 3, 1],
        [2, 1, 0, 0],
        [2, 4, 0, 0]
      ]),
      4
    );
    assert.equal(
      minimumVisitedCells([
        [3, 4, 2, 1],
        [4, 2, 1, 1],
        [2, 1, 1, 0],
        [3, 4, 1, 0]
      ]),
      3
    );
    assert.equal(
      minimumVisitedCells([
        [2, 1, 0],
        [1, 0, 0]
      ]),
      -1
    );
  });
});
