import assert from "assert";
import maxProfit1 from "./maxProfit1";

describe("maxProfit1", () => {
  it("go", () => {
    assert.equal(maxProfit1([1, 2, 3, 0, 2]), 3);
    assert.equal(maxProfit1([1, 2, 3, 0, 2, 1]), 3);
    assert.equal(maxProfit1([1, 2, 3, 0, 2, 5]), 6);
    assert.equal(maxProfit1([1]), 0);
  });
});
