import assert from "assert";
import carPooling from "./carPooling";

describe("carPooling", () => {
  it("go", () => {
    assert.equal(
      carPooling(
        [
          [2, 1, 5],
          [3, 3, 7]
        ],
        4
      ),
      false
    );
    assert.equal(
      carPooling(
        [
          [2, 1, 5],
          [3, 3, 7]
        ],
        5
      ),
      true
    );
    assert.equal(
      carPooling(
        [
          [7, 5, 6],
          [6, 7, 8],
          [10, 1, 6]
        ],
        16
      ),
      false
    );
    assert.equal(
      carPooling(
        [
          [9, 3, 4],
          [9, 1, 7],
          [4, 2, 4],
          [7, 4, 5]
        ],
        23
      ),
      true
    );
  });
});
