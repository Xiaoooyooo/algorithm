import assert from "assert";
import kSum from "./kSum";

describe("kSum", () => {
  it("go", () => {
    assert.equal(kSum([2, 4, -2], 5), 2);
    assert.equal(kSum([1, -2, 3, 4, -10, 12], 16), 10);
  });
});
