import assert from "assert";
import maximumRows from "./maximumRows";

describe("maximumRows", () => {
  it("go", () => {
    assert.equal(
      maximumRows(
        [
          [0, 0, 0],
          [1, 0, 1],
          [0, 1, 1],
          [0, 0, 1]
        ],
        2
      ),
      3
    );
    assert.equal(maximumRows([[1], [0]], 1), 2);
  });
});
