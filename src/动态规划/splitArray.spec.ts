import assert from "assert";
import splitArray from "./splitArray";

describe("splitArray", () => {
  it("go", () => {
    assert.equal(splitArray([7, 2, 5, 10, 8], 2), 18);
    assert.equal(splitArray([1, 2, 3, 4, 5], 2), 9);
    assert.equal(splitArray([1, 4, 4], 3), 4);
  });
});
