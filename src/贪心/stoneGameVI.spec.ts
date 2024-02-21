import assert from "assert";
import stoneGameVI from "./stoneGameVI";

describe("stoneGameVI", () => {
  it("go", () => {
    assert.equal(stoneGameVI([1, 3], [2, 1]), 1);
    assert.equal(stoneGameVI([1, 2], [3, 1]), 0);
    assert.equal(stoneGameVI([2, 4, 3], [1, 6, 7]), -1);
    assert.equal(
      stoneGameVI(
        [2, 9, 1, 1, 1, 3, 5, 8, 8, 6, 8, 6, 2, 4],
        [1, 9, 7, 8, 3, 4, 2, 7, 8, 10, 1, 7, 10, 4]
      ),
      -1
    );
  });
});
