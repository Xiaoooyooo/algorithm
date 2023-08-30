import assert from "assert";
import countSquares from "./countSquares";

describe("countSquares", () => {
  it("go", () => {
    assert.equal(
      countSquares([
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1]
      ]),
      15
    );
    assert.equal(
      countSquares([
        [1, 0, 1],
        [1, 1, 0],
        [1, 1, 0]
      ]),
      7
    );
    assert.equal(
      countSquares([
        [1, 0, 1, 1],
        [1, 1, 0, 1],
        [1, 1, 0, 1]
      ]),
      10
    );
    assert.equal(
      countSquares([
        [1, 0, 1, 1],
        [1, 1, 0, 1],
        [1, 1, 1, 1]
      ]),
      11
    );
    assert.equal(
      countSquares([
        [1, 0, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
      ]),
      15
    );
  });
});
