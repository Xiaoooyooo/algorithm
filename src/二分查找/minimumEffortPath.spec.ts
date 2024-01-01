import assert from "assert";
import minimumEffortPath from "./minimumEffortPath";

describe("minimumEffortPath", () => {
  it("go", () => {
    assert.equal(
      minimumEffortPath([
        [1, 2, 2],
        [3, 8, 2],
        [5, 3, 5]
      ]),
      2
    );
    assert.equal(
      minimumEffortPath([
        [1, 2, 3],
        [3, 8, 4],
        [5, 3, 5]
      ]),
      1
    );
    assert.equal(
      minimumEffortPath([
        [1, 2, 1, 1, 1],
        [1, 2, 1, 2, 1],
        [1, 2, 1, 2, 1],
        [1, 2, 1, 2, 1],
        [1, 1, 1, 2, 1]
      ]),
      0
    );
    assert.equal(
      minimumEffortPath(
        Array(30)
          .fill(0)
          .map(() => Array(30).fill(1))
      ),
      0
    );
  });
});
