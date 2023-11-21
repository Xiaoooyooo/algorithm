import assert from "assert";
import numRollsToTarget from "./numRollsToTarget";

describe("numsRollsToTarget", () => {
  it("go", () => {
    assert.equal(numRollsToTarget(1, 6, 3), 1);
    assert.equal(numRollsToTarget(2, 6, 7), 6);
    assert.equal(numRollsToTarget(30, 30, 500), 222616187);
  });
});
