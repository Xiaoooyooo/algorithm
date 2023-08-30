import assert from "assert";
import numDupDigitsAtMostN from "./numDupDigitsAtMostN";

describe("numDupDigitsAtMostN", () => {
  it("go", () => {
    assert.equal(numDupDigitsAtMostN(20), 1);
    assert.equal(numDupDigitsAtMostN(100), 10);
    assert.equal(numDupDigitsAtMostN(1000), 262);
  });
});
