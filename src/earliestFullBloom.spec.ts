import assert from "assert";
import earliestFullBloom from "./earliestFullBloom";

describe("earliestFullBloom", () => {
  it("go", () => {
    assert.equal(earliestFullBloom([1, 4, 3], [2, 3, 1]), 9);
    assert.equal(earliestFullBloom([1, 2, 3, 2], [2, 1, 2, 1]), 9);
    assert.equal(earliestFullBloom([1], [1]), 2);
  });
});
