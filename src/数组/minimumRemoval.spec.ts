import assert from "assert";
import minimumRemoval from "./minimumRemoval";

describe("minimumRemoval", () => {
  it("go", () => {
    assert.equal(minimumRemoval([4, 1, 6, 5]), 4);
    assert.equal(minimumRemoval([2, 10, 3, 2]), 7);
  });
});
