import assert from "assert";
import numsGame from "./numsGame";

describe("numsGame", () => {
  it("go", () => {
    assert.deepEqual(numsGame([3, 4, 5, 1, 6, 7]), [0, 0, 0, 5, 6, 7]);
    assert.deepEqual(numsGame([1, 2, 3, 4, 5]), [0, 0, 0, 0, 0]);
    assert.deepEqual(numsGame([1, 1, 1, 2, 3, 4]), [0, 1, 2, 3, 3, 3]);
    assert.deepEqual(
      numsGame([471, 626, 848, 957, 788, 138]),
      [0, 154, 375, 704, 704, 1355]
    );
  });
});
