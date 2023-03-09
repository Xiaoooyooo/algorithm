import assert from "assert";
import maxArea from "./maxArea";

describe("maxArea", () => {
  it("go", () => {
    assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
    assert.equal(maxArea([1, 1]), 1);
  });
});
