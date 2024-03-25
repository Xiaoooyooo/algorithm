import assert from "assert";
import rootCount from "./rootCount";

describe("rootCount", () => {
  it("go", () => {
    assert.equal(
      rootCount(
        [
          [0, 1],
          [1, 2],
          [1, 3],
          [4, 2]
        ],
        [
          [1, 3],
          [0, 1],
          [1, 0],
          [2, 4]
        ],
        3
      ),
      3
    );
    assert.equal(
      rootCount(
        [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4]
        ],
        [
          [1, 0],
          [3, 4],
          [2, 1],
          [3, 2]
        ],
        1
      ),
      5
    );
  });
});
