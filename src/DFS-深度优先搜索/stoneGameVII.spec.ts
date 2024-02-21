import assert from "assert";
import stoneGameVII from "./stoneGameVII";

describe("stoneGameVII", () => {
  it("go", () => {
    assert.equal(stoneGameVII([5, 3, 1, 4, 2]), 6);
    assert.equal(stoneGameVII([7, 90, 5, 1, 100, 10, 10, 2]), 122);
  });
});
