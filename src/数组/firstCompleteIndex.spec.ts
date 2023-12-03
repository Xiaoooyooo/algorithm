import assert from "assert";
import firstCompleteIndex from "./firstCompleteIndex";

describe("firstCompleteIndex", () => {
  it("go", () => {
    assert.equal(
      firstCompleteIndex(
        [1, 3, 4, 2],
        [
          [1, 4],
          [2, 3]
        ]
      ),
      2
    );
    assert.equal(
      firstCompleteIndex(
        [2, 8, 7, 4, 1, 3, 5, 6, 9],
        [
          [3, 2, 5],
          [1, 4, 6],
          [8, 7, 9]
        ]
      ),
      3
    );
  });
});
