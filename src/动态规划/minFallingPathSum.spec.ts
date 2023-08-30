import assert from "assert";
import minFallingPathSum from "./minFallingPathSum";

describe("minFallingPathSun", () => {
  it("go", () => {
    assert.equal(
      minFallingPathSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]),
      13
    );
    assert.equal(minFallingPathSum([[7]]), 7);
  });
});
