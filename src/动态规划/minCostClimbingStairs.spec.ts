import assert from "assert";
import minCostClimbingStairs from "./minCostClimbingStairs";

describe("minCostClimbingStairs", () => {
  it("go", () => {
    assert.equal(minCostClimbingStairs([10, 15, 20]), 15);
    assert.equal(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6);
  });
});
