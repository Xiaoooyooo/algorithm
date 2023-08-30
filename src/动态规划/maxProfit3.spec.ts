import assert from "assert";
import maxProfit3 from "./maxProfit3";

describe("maxProfit3", () => {
  it("go", () => {
    assert.equal(maxProfit3([3, 3, 5, 0, 0, 3, 1, 4]), 6);
    assert.equal(maxProfit3([1, 2, 3, 4, 5]), 4);
    assert.equal(maxProfit3([7, 6, 4, 3, 1]), 0);
    assert.equal(maxProfit3([1]), 0);
  });
});
