import assert from "assert";
import canArrange from "./canArrange";

describe("canArrange", () => {
  it("go", () => {
    assert.equal(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5), true);
    assert.equal(canArrange([1, 2, 3, 4, 5, 6], 7), true);
    assert.equal(canArrange([1, 2, 3, 4, 5, 6], 10), false);
    assert.equal(canArrange([-1, 1, -2, 2, -3, 3, -4, 4], 3), true);
  });
});
