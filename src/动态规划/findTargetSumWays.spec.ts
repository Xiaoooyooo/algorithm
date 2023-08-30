import assert from "assert";
import findTargetSumWays from "./findTargetSumWays";

describe("findTargetSumWays", () => {
  it("go", () => {
    assert.equal(findTargetSumWays([1, 1, 1, 1, 1], 3), 5);
    assert.equal(findTargetSumWays([1], 1), 1);
    assert.equal(
      findTargetSumWays(
        [
          40, 21, 33, 25, 8, 20, 35, 9, 5, 27, 0, 18, 50, 21, 10, 28, 6, 19, 47,
          15
        ],
        3
      ),
      7050
    );
    assert.equal(
      findTargetSumWays(
        [
          10, 12, 16, 24, 3, 38, 24, 35, 45, 20, 12, 18, 25, 24, 1, 26, 9, 18,
          29, 28
        ],
        31
      ),
      7426
    );
  });
});
