import assert from "assert";
import getMaximumGenerated from "./getMaximumGenerated";

describe("getMaximumGenerated", () => {
  it("go", () => {
    assert.equal(getMaximumGenerated(7), 3);
    assert.equal(getMaximumGenerated(2), 1);
    assert.equal(getMaximumGenerated(3), 2);
  });
});
