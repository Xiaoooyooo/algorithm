import assert from "assert";
import climbStairs from "./climbStairs";

describe("climbStairs", () => {
  it("go", () => {
    assert.equal(climbStairs(2), 2);
    assert.equal(climbStairs(3), 3);
  });
});
