import assert from "assert";
import threeSumClosest from "./threeSumClosest";

describe("threeSumClosest", () => {
  it("go", () => {
    assert.equal(threeSumClosest([0, 3, 97, 102, 200], 300), 300);
    assert.equal(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2), -2);
    assert.equal(threeSumClosest([-1, 2, 1, -4], 1), 2);
    assert.equal(threeSumClosest([0, 0, 0], 1), 0);
  });
});
