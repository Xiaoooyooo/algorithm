import assert from "assert";
import maxValue from "./maxValue";

describe("maxValue", () => {
  it("go", () => {
    assert.equal(
      maxValue([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
      ]),
      12
    );
  });
});
