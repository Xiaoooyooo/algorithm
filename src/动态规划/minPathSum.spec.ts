import assert from "assert";
import minPathSum from "./minPathSum";

describe("minPathSum", () => {
  it("go", () => {
    assert.equal(
      minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
      ]),
      7
    );
    assert.equal(
      minPathSum([
        [1, 2, 3],
        [4, 5, 6]
      ]),
      12
    );
  });
});
