import assert from "assert";
import hIndex from "./hIndex";

describe("hIndex", () => {
  it("go", () => {
    assert.equal(hIndex([3, 0, 6, 1, 5]), 3);
    assert.equal(hIndex([1, 3, 1]), 1);
  });
});
