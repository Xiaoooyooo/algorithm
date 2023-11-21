import assert from "assert";
import maximumMinutes from "./maximumMinutes";

describe("maximumMinutes", () => {
  it("go", () => {
    assert.equal(
      maximumMinutes([
        [0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 2, 1, 0],
        [0, 2, 0, 0, 1, 2, 0],
        [0, 0, 2, 2, 2, 0, 2],
        [0, 0, 0, 0, 0, 0, 0]
      ]),
      3
    );
    assert.equal(
      maximumMinutes([
        [0, 0, 0, 0],
        [0, 1, 2, 0],
        [0, 2, 0, 0]
      ]),
      -1
    );
    assert.equal(
      maximumMinutes([
        [0, 0, 0],
        [2, 2, 0],
        [1, 2, 0]
      ]),
      1e9
    );
  });
});
