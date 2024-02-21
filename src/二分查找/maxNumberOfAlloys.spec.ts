import assert from "assert";
import maxNumberOfAlloys from "./maxNumberOfAlloys";

describe("maxNumberOfAlloys", () => {
  it("go", () => {
    assert.equal(
      maxNumberOfAlloys(
        3,
        2,
        15,
        [
          [1, 1, 1],
          [1, 1, 10]
        ],
        [0, 0, 0],
        [1, 2, 3]
      ),
      2
    );
    assert.equal(
      maxNumberOfAlloys(
        3,
        2,
        15,
        [
          [1, 1, 1],
          [1, 1, 10]
        ],
        [0, 0, 100],
        [1, 2, 3]
      ),
      5
    );
    assert.equal(
      maxNumberOfAlloys(
        2,
        3,
        10,
        [
          [2, 1],
          [1, 2],
          [1, 1]
        ],
        [1, 1],
        [5, 5]
      ),
      2
    );
    assert.equal(
      maxNumberOfAlloys(
        2,
        5,
        48,
        [
          [6, 3],
          [9, 5],
          [1, 9],
          [1, 8],
          [3, 3]
        ],
        [4, 8],
        [10, 1]
      ),
      5
    );
  });
});
