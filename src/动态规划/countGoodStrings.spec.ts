import assert from "assert";
import countGoodStrings from "./countGoodStrings";

describe("countGoodStrings", () => {
  it("go", () => {
    assert.equal(countGoodStrings(3, 3, 1, 1), 8);
    assert.equal(countGoodStrings(2, 3, 1, 2), 5);
    assert.equal(countGoodStrings(3, 10000, 1, 2), 319943211);
  });
});
