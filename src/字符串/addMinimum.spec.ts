import assert from "assert";
import addMinimum from "./addMinimum";

describe("addMinumun", () => {
  it("go", () => {
    assert.equal(addMinimum("a"), 2);
    assert.equal(addMinimum("b"), 2);
    assert.equal(addMinimum("c"), 2);
    assert.equal(addMinimum("aaa"), 6);
    assert.equal(addMinimum("abc"), 0);
  });
});
