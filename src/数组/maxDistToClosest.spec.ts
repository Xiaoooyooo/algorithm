import assert from "assert";
import maxDistToClosest from "./maxDistToClosest";

describe("maxDistToClosest", () => {
  it("go", () => {
    assert.equal(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]), 2);
    assert.equal(maxDistToClosest([0, 0, 0, 0, 1, 0, 1]), 4);
    assert.equal(maxDistToClosest([1, 0, 0, 0]), 3);
    assert.equal(maxDistToClosest([0, 1]), 1);
  });
});
