import assert from "assert";
import sumDistance from "./sumDistance";

describe("sumDistance", () => {
  it("go", () => {
    assert.equal(sumDistance([-2, 0, 2], "RLL", 3), 8);
    assert.equal(sumDistance([1, 0], "RL", 2), 5);
  });
});
