import assert from "assert";
import singleNumber from "./singleNumber";

describe("singleNumber", () => {
  it("go", () => {
    assert.equal(singleNumber([2, 2, 3, 2]), 3);
    assert.equal(singleNumber([0, 1, 0, 1, 0, 1, 99]), 99);
  });
});
