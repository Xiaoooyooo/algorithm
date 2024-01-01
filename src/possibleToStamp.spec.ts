import assert from "assert";
import possibleToStamp from "./possibleToStamp";

describe("possibleToStamp", () => {
  it("go", () => {
    assert.equal(
      possibleToStamp(
        [
          [1, 0, 0, 0],
          [1, 0, 0, 0],
          [1, 0, 0, 0],
          [1, 0, 0, 0],
          [1, 0, 0, 0]
        ],
        4,
        3
      ),
      true
    );
    assert.equal(
      possibleToStamp(
        [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1]
        ],
        2,
        2
      ),
      false
    );
  });
});
